import { dev } from "astro";
import http from "http";
import fs from "fs";

async function main() {
  const serv = dev({});

  const hostname = "localhost";
  const port = 3000;
  // when using middleware `hostname` and `port` must be provided below

  const server = http.createServer(async (req, res) => {
    const path = `./old_public${req.url}`;
    if (fs.existsSync(path) && fs.lstatSync(path).isFile()) {
      const mimetype = MimeTypes[path.split(".").pop()];
      if (mimetype) {
        res.writeHead(200, { "Content-Type": mimetype });
      }
      fs.createReadStream(path).pipe(res);
    } else {
      http
        .request(
          {
            hostname: "localhost",
            port: 4321,
            path: req.url,
            method: req.method,
            headers: req.headers,
          },
          (astroRes) => {
            res.writeHead(astroRes.statusCode, astroRes.headers);
            astroRes.pipe(res);
          }
        )
        .end();
    }
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}
main()
  .then(() => console.log("done"))
  .catch(console.error);

const MimeTypes = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  json: "application/json",
  png: "image/png",
  jpg: "image/jpg",
  gif: "image/gif",
  svg: "image/svg+xml",
};
