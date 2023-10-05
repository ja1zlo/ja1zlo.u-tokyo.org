const { createServer } = require("http");
const next = require("next");

const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const handler = express();

  // add static path /src/pages
  handler.use(express.static("old_public"));

  handler.all("*", (req, res) => {
    return handle(req, res);
  });

  createServer(handler).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
