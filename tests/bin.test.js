const test = require('tape')
const { exec } = require('shelljs')
const fs = require('fs')

test('bin detect cmd', function (t) {
  let cmd = `./bin/out-of-character.js ./tests/bad-text/ipsom.txt`
  let res = exec(cmd, { silent: true }).stdout
  let wasFound = res.match(/found/i) || null
  t.notEqual(wasFound, null, 'detect true')

  // false-positive test
  cmd = `./bin/out-of-character.js ./tests/bad-text/good-text.txt --detect`
  res = exec(cmd, { silent: true }).stdout
  wasFound = res.match(/looks good/i) || null
  t.notEqual(wasFound, null, 'detect false')
  t.end()
})

test('replace bin cmd', function (t) {
  // create a copy
  let path = `./tests/bad-text/ipsom-copy.txt`
  exec(`cp ./tests/bad-text/ipsom.txt ${path}`)

  let before = fs.readFileSync(path).toString()

  let res = exec(`./bin/out-of-character.js ${path} --replace`, { silent: true }).stdout

  let after = fs.readFileSync(path).toString()
  t.notEqual(before, after, 'file has changed')
  // cleanup
  exec(`rm ${path}`)
  t.end()
})
