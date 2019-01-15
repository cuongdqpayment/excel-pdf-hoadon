"use strict"

const proxy = require('request'); //doi tuong yeu cau proxy truy van POST/GET
const authServer = 'https://c3.mobifone.vn/api'

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
            proxy.post(authServer + '/ext-auth/authorize-token', { json: {token: req.token} } //du lieu parse tu postProcess
                , (error, res, body) => {
                    if (error) {
                        reject(error);
                    }
                    if (res.statusCode == 200) {
                        resolve(body);
                    } else {
                        reject(body);
                    }
                })
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