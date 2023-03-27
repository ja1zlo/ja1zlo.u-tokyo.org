const { exec } = require("child_process");
const http = require("http");
const fs = require("fs");
const path = require("path");

exec("yarn next dev", (err, stdout, stderr) => {
  if (err) {
    //some err occurred
    console.error(err);
  } else {
    // the *entire* stdout and stderr (buffered)
    if (stdout) console.log(`stdout: ${stdout}`);
    if (stderr) console.log(`stderr: ${stderr}`);
  }
});

const MIME = {
  ".css": "text/css",
  ".js": "application/javascript",
  ".html": "text/html",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".wav": "audio/wav",
  ".svg": "image/svg+xml",
};

const server = http.createServer(async (req, res) => {
  // read the file from the file system
  const filepath = "./old_public" + req.url;
  const extname = path.extname(filepath);
  const contentType = MIME[extname] || "text/plain";

  try {
    await new Promise((resolve, reject) => {
      fs.readFile(filepath, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    })
      .then((data) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", `${contentType}; charset=utf-8`);
        res.end(data);
      })
      .catch(async (e) => {
        if (e.code !== "ENOENT" && e.code !== "EISDIR") {
          // throw e;
          return Promise.reject(e);
        }

        const options = {
          hostname: "localhost",
          port: 3000,
          path: req.url,
          method: req.method,
          headers: req.headers,
        };

        const r = await new Promise((resolve, reject) => {
          const proxy = http.request(options, resolve);
          proxy.on("error", reject);
          req.pipe(proxy, {
            end: true,
          });
        });
        res.writeHead(r.statusCode, r.headers);
        r.pipe(res, { end: true });
      });
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end(e.message);
  }
});

console.log("Server running at http://localhost:3001/");
server.listen(3001);
