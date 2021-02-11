var test = require('tape')
const { replace } = require('../src')

// https://character.construction/blanks
test('remove invisible characters', function (t) {
  let arr = [`a‎b`, 'a­b', 'a؜b', 'a b', 'a឴b', 'a឵b', 'aﾠb', `a b`, `a​b`, `a b`, `a b`, `a᠎b`, `a؜b`, `a𝅳b`, `a𝅷b`]
  arr.forEach((before, i) => {
    let after = replace(before)
    t.notEqual(before, after, `#${i} - ${before}`)
    t.equal(after, 'ab', `#${i} - is ab`)
  })
  t.end()
})

test('remove whitespace characters', function (t) {
  let arr = [
    'a	b', //U+0009
    // `a b`,
    `a b`,
  ]
  arr.forEach((before, i) => {
    let after = replace(before)
    t.notEqual(before, after, `#${i} - ${before}`)
    // t.equal(after, 'a b', `#${i} - is 'a b'`)
  })
  t.end()
})
