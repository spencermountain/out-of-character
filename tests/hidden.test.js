import test from 'tape'
import { detect, replace } from '../src/index.js'

test('bidi control characters', function (t) {
  const bidi = [
    ['‪', 'LEFT-TO-RIGHT EMBEDDING'],
    ['‫', 'RIGHT-TO-LEFT EMBEDDING'],
    ['‬', 'POP DIRECTIONAL FORMATTING'],
    ['‭', 'LEFT-TO-RIGHT OVERRIDE'],
    ['‮', 'RIGHT-TO-LEFT OVERRIDE'],
    ['⁦', 'LEFT-TO-RIGHT ISOLATE'],
    ['⁧', 'RIGHT-TO-LEFT ISOLATE'],
    ['⁨', 'FIRST STRONG ISOLATE'],
    ['⁩', 'POP DIRECTIONAL ISOLATE'],
  ]
  bidi.forEach(([char, name]) => {
    const found = detect(`before${char}after`)
    t.equal(found.length, 1, `found ${name}`)
    t.equal(found[0].name, name, name)
    t.equal(found[0].type, 'Bidi', `${name} is Bidi`)
    t.equal(replace(`before${char}after`), 'beforeafter', `removed ${name}`)
  })

  // a trojan-source style line
  const sneaky = 'if (level != "user‮ ⁦// admin check⁩ ⁦") {'
  t.equal(detect(sneaky).length, 4, 'found all four bidi controls')
  t.equal(detect(sneaky, { exclude: ['Bidi'] }), null, 'exclude Bidi type')
  t.end()
})

test('tag characters', function (t) {
  // an invisible payload spelled in tag characters
  const steg = 'hello\u{E0068}\u{E0069}\u{E0021}world'
  const found = detect(steg)
  t.equal(found.length, 3, 'found the tag characters')
  t.equal(found[0].name, 'TAG CHARACTER', 'tag character name')
  t.equal(found[0].code, 'U+E0068', 'tag character code')
  t.equal(found[0].type, 'Tag', 'tag character type')
  t.equal(replace(steg), 'helloworld', 'removed the tag characters')
  t.equal(replace(steg).isWellFormed(), true, 'no lone surrogates')

  // the flag-of-england emoji is a legitimate tag sequence
  const england = '\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}'
  t.equal(detect(`go ${england}!`), null, 'england flag is not flagged')
  t.equal(replace(`go ${england}!`), `go ${england}!`, 'england flag is preserved')
  t.end()
})

test('variation selectors', function (t) {
  // stray selectors hiding in plain text
  t.equal(detect('a️b')[0].name, 'VARIATION SELECTOR-16', 'stray vs16 found')
  t.equal(detect('a︀b')[0].name, 'VARIATION SELECTOR-1', 'stray vs1 found')
  t.equal(detect('a᠋b')[0].type, 'Variation', 'stray mongolian fvs found')
  t.equal(replace('a️b'), 'ab', 'stray vs16 removed')

  // legitimate uses are left alone
  t.equal(detect('❤️'), null, 'emoji presentation selector kept')
  t.equal(detect('#️⃣'), null, 'keycap sequence kept')
  t.equal(detect('辻︀'), null, 'cjk variation sequence kept')
  t.equal(detect('ᠠ᠋'), null, 'mongolian fvs after mongolian letter kept')
  t.end()
})

test('exclude option', function (t) {
  const str = 'a​b‮c'
  t.equal(detect(str).length, 2, 'both found by default')
  t.equal(detect(str, { exclude: ['U+200B'] }).length, 1, 'exclude by code')
  t.equal(detect(str, { exclude: ['U+200B', 'Bidi'] }), null, 'exclude by code and type')
  t.equal(replace(str, { exclude: ['Bidi'] }), 'ab‮c', 'replace respects exclude')
  t.end()
})

test('astral offsets and lengths', function (t) {
  // an invisible char after an emoji — offset is a utf-16 index
  const found = detect('\u{1F600}​x')
  t.equal(found[0].offset, 2, 'offset counts code units')
  const cleaned = replace('a\u{1D173}b\u{110B1}c')
  t.equal(cleaned, 'abc', 'astral characters fully removed')
  t.equal(cleaned.isWellFormed(), true, 'no lone surrogates')
  t.end()
})
