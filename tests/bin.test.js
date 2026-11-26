import test from 'tape'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
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

const bin = './bin/out-of-character.js'
const run = (args) => spawnSync(process.execPath, [bin, ...args], { encoding: 'utf8' })

test('bin detect cmd', function (t) {
  let res = run(['./tests/texts/bad-text.txt'])
  t.ok(/found/i.test(res.stdout), 'detect true')
  t.equal(res.status, 1, 'fails when characters are found')

  // False-positive test
  res = run(['./tests/texts/good-text.txt'])
  t.ok(/looks good/i.test(res.stdout), 'detect false')
  t.equal(res.status, 0, 'passes when clean')

  res = run(['./tests/texts/good-text.txt', './tests/texts/bad-text.txt'])
  t.ok(/inspecting 2 files/.test(res.stdout), 'several paths')
  t.equal(res.status, 1, 'fails if any file is bad')

  res = run(['./tests/texts/good-text.txt', '--nope'])
  t.equal(res.status, 1, 'unknown flag')
  t.end()
})

test('bin replace cmd', function (t) {
  // Create a copy
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ooc-'))
  const filePath = path.join(dir, 'bad-text-copy.txt')
  fs.copyFileSync('./tests/texts/bad-text.txt', filePath)

  const before = fs.readFileSync(filePath).toString()
  let res = run([filePath, '--replace'])
  const after = fs.readFileSync(filePath).toString()
  t.notEqual(before, after, 'file has changed')
  t.equal(res.status, 0, 'passes after replacing')

  res = run([filePath])
  t.equal(res.status, 0, 'file is now clean')
  // Cleanup
  fs.rmSync(dir, { recursive: true })
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
  t.true(result.includes(path.join('bin', 'getFiles.js')), 'should include getFiles.js')

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