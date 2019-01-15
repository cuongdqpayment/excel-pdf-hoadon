"use strict"
/**
 * Class nay su dung request lam proxy
 * truy van den server auth
 * yeu cau cap token
 * kiem tra token cho user thuoc server nay
 * 
 * cap lai token cho user tren ung nay sau khi da xac thuc day du
 * 
 */

const proxy = require('request'); //doi tuong yeu cau proxy truy van POST/GET
const authServer = 'https://c3.mobifone.vn/api'

/**
 * POST /auth/request-isdn
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const requestIsdn = (req, res, next) => {
    var kq = new Promise((resolve, reject) => {
        proxy.post(authServer + '/auth/request-isdn', { json: req.json_data } //du lieu parse tu postProcess
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
    });

    //cho ket qua xu ly xong tra ket qua ve cho khach
    kq.then(data => {
        console.log('data', data);
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(JSON.stringify(data));
    })
        .catch(err => {
            console.log('err', err);
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(JSON.stringify({ code: 403, message: 'request to authentication server error!', error: err }));
        })
}

module.exports = {
    requestIsdn: requestIsdn
};