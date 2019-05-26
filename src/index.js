#!/usr/bin/env node
const fetch = require('./gitmojis')
const commitlint = require('./commitlint')
const generate = async () => {
  try {
    const { gitmojis } = await fetch()
    await commitlint(gitmojis)
    console.log(`succesfully auto-generated commitlint rules from https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json`)
  } catch (e) {
    console.log(`error trying to auto-generate commitlint rules from https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json`)
  }
}
generate()
