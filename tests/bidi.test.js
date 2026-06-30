import test from 'tape'
import { detect, replace } from '../src/index.js'

// Explicit bidirectional formatting controls (Bidi_Control=Yes). The implicit
// marks U+200E/U+200F/U+061C were already handled; these are the embedding,
// override and isolate controls used by the Trojan Source attack
// (CVE-2021-42574). Code points are spelled out so the (invisible) characters
// are reviewable in source.
const bidi = [
  [0x202a, 'LEFT-TO-RIGHT EMBEDDING'],
  [0x202b, 'RIGHT-TO-LEFT EMBEDDING'],
  [0x202c, 'POP DIRECTIONAL FORMATTING'],
  [0x202d, 'LEFT-TO-RIGHT OVERRIDE'],
  [0x202e, 'RIGHT-TO-LEFT OVERRIDE'],
  [0x2066, 'LEFT-TO-RIGHT ISOLATE'],
  [0x2067, 'RIGHT-TO-LEFT ISOLATE'],
  [0x2068, 'FIRST STRONG ISOLATE'],
  [0x2069, 'POP DIRECTIONAL ISOLATE'],
]

test('remove bidirectional formatting characters', function (t) {
  bidi.forEach(([cp, name]) => {
    const ch = String.fromCodePoint(cp)
    t.equal(replace('before' + ch + 'after'), 'beforeafter', name + ' is removed')
  })
  t.end()
})

test('detect bidirectional formatting characters', function (t) {
  bidi.forEach(([cp, name]) => {
    const ch = String.fromCodePoint(cp)
    const found = detect('before' + ch + 'after')
    t.equal(found && found.length, 1, name + ' is detected')
    t.equal(found[0].name, name, name + ' has the expected name')
  })
  t.end()
})

test('strip a Trojan Source style override sequence', function (t) {
  // RIGHT-TO-LEFT OVERRIDE ... POP DIRECTIONAL FORMATTING reorders the visible text
  const rlo = String.fromCodePoint(0x202e)
  const pdf = String.fromCodePoint(0x202c)
  t.equal(replace('access' + rlo + 'level' + pdf), 'accesslevel', 'override pair removed')
  t.end()
})
