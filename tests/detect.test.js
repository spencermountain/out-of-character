'use strict'

const test = require('tape')
const { detect } = require('../src')

test('detect', function (t) {
  let text = 'noth­ing s͏neak឵y h᠎ere'
  let found = detect(text)
  t.equal(found.length, 4, 'found 4')

  // ARABIC LETTER MARK
  text = `hello mudda؜hello fadda`
  found = detect(text)
  t.equal(found.length, 1, 'found ar ltr mark')

  // EM SPACE
  text = `goodmorning vietnam`
  found = detect(text)
  t.equal(found.length, 1, 'found quad')
  t.equal(found[0].name, 'EM SPACE', 'EM SPACE')
  t.equal(found[0].offset, 11, 'found offset')
  t.equal(found[0].replacement, ' ', 'found replacement')
  t.end()
})
