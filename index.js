const http = require("http");
const QRCode = require('qrcode');

http.createServer((req, res) => {
  try {
    const code = decodeURIComponent(req.url.split("/?text=")[1]);
    console.log(code);
    if(!code || code == "undefined")
      return res.end("Error");
    
    QRCode.toFileStream(res, code, {
      margin: 1,
      width: 200
    });
  } catch(err) {
    res.end("Error");
  }
}).listen(process.env.PORT ? process.env.PORT : 8080);