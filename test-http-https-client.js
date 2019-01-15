const request = require('request')

request.post('https://c3.mobifone.vn/api/auth/request-isdn', {
  json: {
    isdn: '903500888'
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
  //console.log(`statusCode: ${res.statusCode}`);
  console.log('statusCode', res.statusCode);
  console.log(body)
})