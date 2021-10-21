const axios = require('axios')
module.exports = async () => axios.get('https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json')
.then(({ data }) => data)
