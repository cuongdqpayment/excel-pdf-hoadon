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
    req.token = req.token?req.token:token; // uu tien token truyen trong json gan truoc do
    if (req.token) {
      next();
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(JSON.stringify({code:403, message:'Auth token is not supplied or you are unauthorized!'}));
    }
  }

/**
 * req = {user:{username...}} | {json_data}
 * @param {*} req 
 */
var tokenSign = (req,expires) => {
  let localTime = new Date().getTime()+7*60*60*1000;
  let secret = (jwtConfig.secret + req.clientIp + req.headers["user-agent"] + localTime)
  if (req.user && req.user.username) {
    console.log('Sign secret 1:', secret);
    return jwt.sign({
      username: req.user.username,
      nickname: req.user.nickname?req.user.nickname : undefined,
      image: req.user.image?req.user.image : undefined,
      role: req.user.role?req.user.role:undefined,
      local_time: localTime
    },
    secret
    , {
      expiresIn: expires?expires:'24h' // expires in 24 hours
    }
    );
  } else if (req.json_data&&req.json_data.phone&&req.json_data.key) {
    secret += req.json_data.key;
    console.log('Sign secret 2:', secret);
    return jwt.sign({
      username: req.json_data.phone,
      req_device: req.headers["user-agent"],
      local_time: localTime
    },
    secret
      , {
        expiresIn: '1h' // expires in 1 hours
      }
    );
  } else {
    console.log('Sign secret 3:', secret);
    return jwt.sign({
      req_device: req.headers["user-agent"],
      local_time: localTime
    },
    secret
      , {
        expiresIn: '1h' // expires in 1 hours
      }
    );
  }
}

/**
 * input: req = {token:'...'}
 * return true or false
 * @param req 
 */
var tokenVerify = (req) => {
  if (req.token) {
    let token = req.token;
    if (token.startsWith('Bearer ')) {
      token = token.slice(7);
    }
    let tokenObj = jwt.decode(token);

    let secret = jwtConfig.secret + req.clientIp + (req.headers?req.headers["user-agent"]:'') + (tokenObj?tokenObj.local_time:'') + (req.keyOTP?req.keyOTP:'') 
    console.log('Verify secret:',secret);
    return jwt.verify(token
        , secret
        , (err, decoded) => {
          if (err) return false;
          req.user = decoded;
          return true;
        })
  } else {
    return false;
  }
};

module.exports = {
  getToken: getToken,
  tokenSign: tokenSign,
  tokenVerify: tokenVerify
};