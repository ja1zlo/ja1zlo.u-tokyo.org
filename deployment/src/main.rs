use std::{env, fs};
use std::fmt::Display;
use std::io::Cursor;
use std::str::FromStr;

use tide::http::Mime;
use tide::{log, Request};

#[async_std::main]
async fn main() -> tide::Result<()> {
    let port = env::args().nth(1).and_then(|it| u16::from_str_radix(it.as_str(), 10).ok()).expect("The first argument should be port number.");
    let path = std::path::PathBuf::from(env::args().nth(2).expect("The second argument should be the dest path."));
    if !path.exists() {
        panic!("The path {} does not exist. Please pre-create the destination dir.", path.to_str().unwrap());
    }

    let mut app = tide::with_state(path);
    app.at("/update_site").post(update_site);
    app.listen(format!("127.0.0.1:{}", port)).await?;
    Ok(())
}

struct DeploymentError {
    msg: String
}

impl<T: Display> From<T> for DeploymentError {
    fn from(t: T) -> DeploymentError {
        DeploymentError { msg: t.to_string() }
    }
}

fn unarchive(body: &Vec<u8>, path: &std::path::Path) -> Result<(), DeploymentError> {
    // We use sync io for simplicity, because zip crate isn't async-ready
    let mut archive = zip::ZipArchive::new(Cursor::new(body))?;
    let mut existing = fs::read_dir(path)?;
    while let Some(res) = existing.next() {
        let entry = res?;
        let path = entry.path();
        if entry.file_type()?.is_dir() {
            fs::remove_dir_all(&path)?;
        } else {
            fs::remove_file(path)?;
        }
    }
    for i in 0..archive.len() {
        let mut file = archive.by_index(i)?;
        let outpath = file.enclosed_name().ok_or(DeploymentError { msg: String::from("illegal file path") })?;

        if (*file.name()).ends_with('/') {
            let dest = path.join(outpath).to_owned();
            log::debug!("File {} extracted to \"{}\"", i, dest.display());
            fs::create_dir_all(&dest)?;
        } else {
            let dest = path.join(outpath).to_owned();
            log::debug!(
                "File {} extracted to \"{}\" ({} bytes)",
                i,
                dest.display(),
                file.size()
            );
            if let Some(p) = dest.parent() {
                if !p.exists() {
                    fs::create_dir_all(p)?;
                }
            }
            let mut outfile = fs::File::create(&dest)?;
            std::io::copy(&mut file, &mut outfile)?;
        }
    }
    Ok(())
}

async fn update_site(mut req: Request<std::path::PathBuf>) -> tide::Result {
    let ct = req.content_type();
    if ct.is_none() || ct.unwrap() != Mime::from_str("application/zip").unwrap() {
        return Ok(tide::Response::new(tide::StatusCode::UnsupportedMediaType));
    }

    let body = req.body_bytes().await?;
    log::info!("New client connection from {}", req.remote().unwrap_or_else(|| "unknown client"));
    if let Err(err) = unarchive(&body, req.state()) {
        return Ok(tide::Response::builder(tide::StatusCode::BadRequest).body(format!("Unable to unzip: {}", err.msg)).build())
    }
    Ok(tide::Response::new(tide::StatusCode::NoContent))
}