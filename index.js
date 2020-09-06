const http = require("http");
const QRCode = require('qrcode');

http.createServer((req, res) => {
  const code = decodeURIComponent(req.url.split("/?text=")[1]);
  console.log(code);
  QRCode.toFileStream(res, code, {
    margin: 1,
    width: 200
  });

}).listen(process.env.PORT ? process.env.PORT : 8080);