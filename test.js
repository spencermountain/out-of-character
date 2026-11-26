// smoke test: both entry points and the cli forward to char-out
import assert from 'node:assert'
import { createRequire } from 'node:module'
import { spawnSync } from 'node:child_process'
import * as esm from './index.js'
import * as real from 'char-out'

const cjs = createRequire(import.meta.url)('./index.cjs')
const dirty = 'a​b'

assert.deepEqual(Object.keys(esm).sort(), Object.keys(real).sort(), 'esm exports match')
assert.deepEqual(Object.keys(cjs).sort(), Object.keys(real).sort(), 'cjs exports match')
assert.equal(esm.replace(dirty), 'ab', 'esm replace')
assert.equal(cjs.replace(dirty), 'ab', 'cjs replace')
assert.equal(esm.detect(dirty).length, 1, 'esm detect')

// with no path, the cli warns and exits 1
const res = spawnSync(process.execPath, ['./bin/out-of-character.js'], { encoding: 'utf8' })
assert.equal(res.status, 1, 'cli exit code')
assert.match(res.stderr, /file path/, 'cli usage message')
console.log('ok')
