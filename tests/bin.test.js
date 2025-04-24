'use strict'

const test = require('tape')
const { exec } = require('shelljs')
const fs = require('fs')
const getFiles = require('../bin/getFiles')

test('test glob input', function (t) {
  let arr = getFiles('./tests/texts/good-text.txt')
  t.equal(arr.length, 1, 'found file')

  arr = getFiles('./tests/texts/')
  t.ok(arr.length > 1, 'found dir')

  arr = getFiles('./tests/texts/*.txt')
  t.ok(arr.length > 1, 'found glob')
  t.end()
})

/** @todo Review this test. */
test.skip('bin detect cmd', function (t) {
  let cmd = './bin/out-of-character.js ./tests/texts/bad-text.txt'
  let res = exec(cmd, { silent: true }).stdout
  let wasFound = res.match(/found/i) || null
  t.notEqual(wasFound, null, 'detect true')

  // False-positive test
  cmd = './bin/out-of-character.js ./tests/texts/good-text.txt --detect'
  res = exec(cmd, { silent: true }).stdout
  wasFound = res.match(/looks good/i) || null
  t.notEqual(wasFound, null, 'detect false')
  t.end()
})

/** @todo Review this test. */
test.skip('replace bin cmd', function (t) {
  // Create a copy
  const path = './tests/texts/bad-text-copy.txt'
  exec(`cp ./tests/texts/bad-text.txt ${path}`)

  const before = fs.readFileSync(path).toString()
  exec(`./bin/out-of-character.js ${path} --replace`, { silent: true })
  const after = fs.readFileSync(path).toString()
  t.notEqual(before, after, 'file has changed')
  // Cleanup
  exec(`rm ${path}`)
  t.end()
})
