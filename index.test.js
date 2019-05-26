const chalk = require('chalk')
const shell = require('shelljs')
shell.config.silent = true
const ShellString = shell.ShellString
const lint = message => new ShellString(message).exec('yarn commitlint --config index.js').code
const should = {}
should.pass = message => { it(chalk.green(message), () => { expect(lint(message)).toEqual(0) }) }
should.fail = message => { it(chalk.red(message), () => { expect(lint(message)).toEqual(1) }) }
describe('commitlint validation', () => {
  describe('malformed messages', () => {
    describe('type-enum', () => {
      should.fail(':abc: Some message')
    })
    describe('type-case', () => {
      should.fail(':ART: Some message')
    })
    describe('type-empty', () => {
      should.fail(': Some message')
    })
    describe('scope-empty', () => {
      should.fail(':art:(chore) some message')
    })
    describe('subject-case', () => {
      should.fail(':art: some Message')
    })
    describe('subject-empty', () => {
      should.fail(':art:')
    })
    describe('header-max-length', () => {
      should.fail(':art: Some message that is way too long and breaks the line max-length by several characters')
    })
    describe('body-leading-blank', () => {
      should.fail(':art: Some message\nSome extra comments')
    })
    describe('footer-leading-blank', () => {
      should.fail(':art: Some message\n\nSome extra comments\nFix #1')
    })
  })
  describe('compliant messages', () => {
    should.pass(':alembic: Some message')
    should.pass(':art: Some message')
    should.pass(':art: Some message\n\nSome extra comments')
    should.pass(':art: Some message\n\nSome extra comments\n\nFix #1')
  })
})
