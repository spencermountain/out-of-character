'use strict'

import test from 'tape'
import sh from 'shelljs'
import fs from 'fs'
import path from 'path'
import getFiles from '../bin/getFiles.js'

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
  let res = sh.exec(cmd, { silent: true }).stdout
  let wasFound = res.match(/found/i) || null
  t.notEqual(wasFound, null, 'detect true')

  // False-positive test
  cmd = './bin/out-of-character.js ./tests/texts/good-text.txt --detect'
  res = sh.exec(cmd, { silent: true }).stdout
  wasFound = res.match(/looks good/i) || null
  t.notEqual(wasFound, null, 'detect false')
  t.end()
})

/** @todo Review this test. */
test.skip('replace bin cmd', function (t) {
  // Create a copy
  const filePath = './tests/texts/bad-text-copy.txt'
  sh.exec(`cp ./tests/texts/bad-text.txt ${filePath}`)

  const before = fs.readFileSync(filePath).toString()
  sh.exec(`./bin/out-of-character.js ${filePath} --replace`, { silent: true })
  const after = fs.readFileSync(filePath).toString()
  t.notEqual(before, after, 'file has changed')
  // Cleanup
  sh.exec(`rm ${filePath}`)
  t.end()
})

test('getFiles - single file', (t) => {
  const result = getFiles('bin/getFiles.js')
  t.true(Array.isArray(result), 'should return an array')
  t.equal(result.length, 1, 'should have exactly one item')
  t.equal(result[0], 'bin/getFiles.js', 'should contain the file path')
  t.end()
})

test('getFiles - directory', (t) => {
  const result = getFiles('bin')
  t.true(Array.isArray(result), 'should return an array')
  t.true(result.length > 1, 'should have multiple items')
  const expectedPath = path.join('bin', 'getFiles.js')
  t.true(result.includes(expectedPath), `should include ${expectedPath}`)

  result.forEach(filePath => {
    t.true(fs.lstatSync(filePath).isFile(), `${filePath} should be a file`)
  })

  t.end()
})

test('getFiles - recursive directory', (t) => {
  const result = getFiles('scripts', true)
  t.true(Array.isArray(result), 'should return an array')
  t.true(result.length > 0, 'should have at least one item')

  result.forEach(filePath => {
    t.true(fs.lstatSync(filePath).isFile(), `${filePath} should be a file`)
  })

  t.end()
})

test('getFiles - non-existent path', (t) => {
  const result = getFiles('non-existent-path')
  t.true(Array.isArray(result), 'should return an array')
  t.equal(result.length, 0, 'should be empty')
  t.end()
})