"use strict"

const jwt = require('jsonwebtoken');
const jwtConfig = require('../jwt/jwt-config');
const url = require('url');

/**
 * input:  GET/POST
 * return: req.token
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
var getToken = (req, res, next)=> {
   let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (!token) token = url.parse(req.url, true, false).query.token;
    if (!token) token = req.json_data?req.json_data.token:''; //lay them tu json_data post
    req.token = req.token?req.token:token; // uu tien token truyen trong json gan truoc do
    if (req.token) {
      next();
    } else {
      res.writeHead(403, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(JSON.stringify({code:403, message:'token-handler: getToken: Auth token is not supplied or you are unauthorized!'}));
    }
  }


module.exports = {
  getToken: getToken,
  /* tokenSign: tokenSign,
  tokenVerify: tokenVerify */
};