const express = require('express');
const app = express();
const fs = require('fs');
const os = require('os');

function main(isHttp, isHttps) {
    
  //CHONG TAN CONG DDDOS
  //ngan chan truy cap ddos tra ket qua cho user neu truy cap tan suat lon 
  app.use(require('./ddos/ddos-config').express('ip', 'path'));

  //web tinh
  app.use(express.static(__dirname + '/www'));

  //CORS handle
  const cors = require('./handlers/cors-handler');
  app.use(cors.CorsHandler.cors);

  //su dung auth user
  const userAuth = require('./routes/user-auth');
  app.use('/auth', userAuth); 

  const resource = require('./routes/resource-excel');
  app.use('/db', resource); 

  //ham tra loi cac dia chi khong co
  //The 404 Route (ALWAYS Keep this as the last route)
  app.all('*',(req, res) => {
    //gui trang thai bao noi dung tra ve
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Xin lỗi trang bạn muốn tìm không tồn tại!</h1>Địa chỉ ip của bạn là : ' + req.clientIp);
  });

  //cac route truoc chi can throw, thi error nay se tra loi cho nguoi sdung
  //Error handle ALLWAYS keep last route even all
  const err = require('./handlers/error-handler');
  app.use(err.ErrorHandler.errors);

  //---------socket.io for CHAT ------------//
  //var io; //= require('socket.io')(http);  or //= require('socket.io')(https); 

  if (isHttp) {
    // For http
    const httpServer = require('http').createServer(app);
    const portHttp = process.env.PORT || isHttp;
    httpServer.listen(portHttp, () => {
      console.log("Server HTTP (" + os.platform() + "; " + os.arch() + ") is started with PORT: "
        + portHttp
        + "\n tempdir: " + os.tmpdir()
        + "\n " + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      );
    });

   
  }

  if (isHttps) {
    // For https
    const privateKey = fs.readFileSync('cert/private_key.pem', 'utf8');
    const certificate = fs.readFileSync('cert/certificate.pem', 'utf8');
    const credentials = { key: privateKey, cert: certificate };
    const portHttps = process.env.PORT || isHttps;
    
    const httpsServer = require('https').createServer(credentials, app);

    httpsServer.listen(portHttps, () => {
      console.log("Server HTTPS (" + os.platform() + "; " + os.arch() + ") is started with PORT: "
        + portHttps
        + "\n tempdir: " + os.tmpdir()
        + "\n " + new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      );
    });
  }

}

//=false or port number >1000
const isHttp = 9235;
const isHttps = false //8443; 

main(isHttp, isHttps);