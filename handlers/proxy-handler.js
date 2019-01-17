"use strict"
const jwt = require('jsonwebtoken');
const proxy = require('request'); //doi tuong yeu cau proxy truy van POST/GET
const authServer = 'https://c3.mobifone.vn/api'

var tokenSession = []; //luu lai session lam viec
//chi verify --> auth 1 lan --> co thoi gian hieu luc va het hieu luc
//khi do chi can verify expires la duoc
const verifyExpire = (token)=>{
    let userInfo = jwt.decode(token);
    console.log(new Date().getTime(),userInfo);

    return true;
}

/**
 * ham nay se gan kiem tra verify proxy, neu thanh cong cho next, neu khong se tra loi
 * du lieu dau vao phai req.token --> next()
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const verifyProxyToken = (req, res, next)=>{
    if (req.token){
        new Promise((resolve, reject) => {

            let aliveToken = tokenSession.find(x=>x.token=req.token)

            if (aliveToken&&verifyExpire(aliveToken)){
                //neu token da xac thuc thi tra ve luon khong can xac thuc nua
                //can kiem tra thoi gian hieu luc nua
                resolve(aliveToken);

            }else{
                //neu chua xac thuc server
                proxy.post(authServer + '/ext-auth/authorize-token', { json: {token: req.token} } //du lieu parse tu postProcess
                    , (error, res, body) => {
                        if (error) {
                            reject(error);
                        }
                        if (res.statusCode == 200) {
            
                            console.log('body',body);
                            //chuyen doi body --> luu lai
                            /* tokenSession.push({
                                
                            }) */
                            resolve(body);
                        } else {
                            reject(body);
                        }
                    })
            }

        }).then(tokenData => {
            //console.log('tokenData.status', tokenData.status, tokenData.user_info);
            if (tokenData.status){
                req.user = tokenData.user_info;  
                next();              
            }else{
                res.writeHead(403, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ message: 'proxy-handler: verifyProxyToken: server status false!', data: data}));
            }
        })
        .catch(err => {
            res.writeHead(403, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(JSON.stringify({ message: 'proxy-handler: verifyProxyToken:  request to authentication server error!', error: err }));
        })
    }else{
        res.writeHead(403, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ message: 'proxy-handler: verifyProxyToken: no req.json_data'}));
    }
  }

const authorizeToken = (req, res, next) => {
    if (req.user){
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({status:true,message:'token valid',user_info: req.user, token: req.token}));
    }else{
        res.writeHead(403, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({status:false,message:'token INVALID'}));
    }
}





module.exports = {
    verifyProxyToken: verifyProxyToken,
    authorizeToken: authorizeToken,
};