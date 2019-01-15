//"use strict"
const router = require('express').Router();

const postHandler = require('../utils/post-handler');
const proxyHandler = require('../handlers/proxy-handler');

//router.get('/authorize', proxyHandler.tokenCheck, proxyHandler.authorize);

//gui chuoi json nhan duoc len authen server nhan ket qua, tra lai user
router.post('/request-isdn', postHandler.jsonProcess, proxyHandler.requestIsdn );

//nguoi dung nhap key xu ly, gui len authen serer nhan ket qua, tra ve token
//router.post('/confirm-key', postHandler.jsonProcess, proxyHandler.confirmKey);

module.exports = router;