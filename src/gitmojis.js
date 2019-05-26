const request = require('request-promise-native')
module.exports = async () => request({
  method: 'GET',
  url: 'https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json',
  json: true
})
