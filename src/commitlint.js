const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
module.exports = async gitmojis => {
  const data = {
    types: gitmojis
    .sort((a, b) => a.code > b.code ? 1 : a.code < b.code ? -1 : 0)
    .map(({ code }) => `'${code}'`)
    .join(', ')
  }
  const from = path.resolve(__dirname, 'templates', 'commitlint')
  const to = path.resolve(__dirname, '..', 'index.js')
  const rendered = await ejs.renderFile(from, data)
  fs.writeFileSync(to, rendered)
}
