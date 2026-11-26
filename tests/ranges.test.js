import test from 'tape'
import { detect, replace } from '../src/index.js'

test('supplementary variation selectors', function (t) {
  const vs17 = '\u{E0100}'
  const found = detect(`a${vs17}b`)
  t.equal(found.length, 1, 'found after a latin letter')
  t.equal(found[0].code, 'U+E0100', 'code')
  t.equal(found[0].type, 'Variation', 'type')
  t.equal(replace(`a${vs17}${vs17}b`), 'ab', 'removed a run')
  t.deepEqual(detect(`辻${vs17}`), [], 'kept after an ideograph')
  t.deepEqual(detect(`a${vs17}`, { exclude: ['Variation'] }), [], 'exclude by type')
  t.end()
})

test('unassigned ignorables', function (t) {
  const codes = ['⁥', '￰', '￸', '\u{E0080}', '\u{E01F0}', '\u{E0FFF}']
  codes.forEach((ch) => {
    t.equal(detect(`a${ch}b`).length, 1, 'found ' + ch.codePointAt(0).toString(16))
    t.equal(replace(`a${ch}b`), 'ab', 'removed')
  })
  t.deepEqual(detect('a\u{E1000}b'), [], 'past the end of the block')
  t.end()
})

test('hieroglyph format controls', function (t) {
  const joiner = '\u{13430}'
  const begin = '\u{13437}'
  const end = '\u{13438}'
  const glyph = '\u{13000}'
  t.equal(detect(`a${joiner}b`).length, 1, 'found in latin text')
  t.equal(detect(`${joiner}${begin}${end}`).length, 3, 'found a lone run')
  t.equal(replace(`a${joiner}${begin}b`), 'ab', 'removed')
  t.deepEqual(detect(`${glyph}${joiner}${glyph}`), [], 'kept between hieroglyphs')
  t.deepEqual(detect(`${glyph}${joiner}${begin}${glyph}${end}`), [], 'kept in a nested group')
  t.end()
})
