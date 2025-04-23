'use strict'

const test = require('tape')
const { replace } = require('../src')
const spaces = [
  'beforeᅟafter', // HANGUL CHOSEONG FILLER
  'beforeᅠafter', // HANGUL JUNGSEONG FILLER
  'before after', // OGHAM SPACE MARK
  'before after', // EN QUAD
  'before after', // EM QUAD
  'before after', // EN SPACE
  'before after', // EM SPACE
  'before after', // THREE-PER-EM SPACE
  'before after', // FOUR-PER-EM SPACE
  'before after', // SIX-PER-EM SPACE
  'before after', // FIGURE SPACE
  'before after', // PUNCTUATION SPACE
  'before after', // THIN SPACE
  'before after', // HAIR SPACE
  'before after', // MEDIUM MATHEMATICAL SPACE
  'before　after', // IDEOGRAPHIC SPACE
  'before⠀after', // BRAILLE PATTERN BLANK
  'beforeㅤafter', // HANGUL FILLER
  'beforeﾠafter', // HALFWIDTH HANGUL FILLER
]
// https://character.construction/blanks
test('remove invisible characters', function (t) {
  spaces.forEach((before, i) => {
    const after = replace(before)
    t.notEqual(before, after, `#${i} - ${before}`)
    t.equal(after, 'before after', `#${i} - is before-after`)
  })
  t.end()
})

const noSpaces = [
  'beforeafter', // FORM FEED
  'beforeafter', // NEXT LINE
  'before after', // LINE SEPARATOR
  'before after', // PARAGRAPH SEPARATOR
  'before­after', // SOFT HYPHEN
  'before͏after', // COMBINING GRAPHEME JOINER
  'before؜after', // ARABIC LETTER MARK
  'before܏after', // SYRIAC ABBREVIATION MARK
  'before឴after', // KHMER VOWEL INHERENT AQ
  'before឵after', // KHMER VOWEL INHERENT AA
  'before᠎after', // MONGOLIAN VOWEL SEPARATOR
  'before​after', // ZERO WIDTH SPACE
  'before‌after', // ZERO WIDTH NON-JOINER
  'before‍after', // ZERO WIDTH
  'before‎after', // LEFT-TO-RIGHT MARK
  'before‏after', // RIGHT-TO-LEFT MARK
  'before after', // NARROW NO-BREAK SPACE
  'before⁠after', // WORD JOINER
  'before⁡after', // FUNCTION APPLICATION
  'before⁢after', // INVISIBLE TIMES
  'before⁣after', // INVISIBLE SEPARATOR
  'before⁤after', // INVISIBLE PLUS
  'before⁪after', // INHIBIT SYMMETRIC SWAPPING
  'before⁫after', // ACTIVATE SYMMETRIC SWAPPING
  'before⁬after', // INHIBIT ARABIC FORM SHAPING
  'before⁭after', // ACTIVATE ARABIC FORM SHAPING
  'before⁮after', // NATIONAL DIGIT SHAPES
  'before⁯after', // NOMINAL DIGIT SHAPES
  'before﻿after', // ZERO WIDTH NO-BREAK SPACE
  // 'beforeႱafter', // KAITHI VOWEL SIGN I
  // 'before베after', // SHORTHAND FORMAT LETTER OVERLAP
  // 'before벡after', // SHORTHAND FORMAT CONTINUING OVERLAP
  // 'before벢after', // SHORTHAND FORMAT DOWN STEP
  // 'before벣after', // SHORTHAND FORMAT UP STEP
  // 'before텙after', // MUSICAL SYMBOL NULL NOTEHEAD
  // 'before텳after', // MUSICAL SYMBOL BEGIN BEAM
  // 'before텴after', // MUSICAL SYMBOL END BEAM
  // 'before텵after', // MUSICAL SYMBOL BEGIN TIE
  // 'before텶after', // MUSICAL SYMBOL END TIE
  // 'before텷after', // MUSICAL SYMBOL BEGIN SLUR
  // 'before텸after', // MUSICAL SYMBOL END SLUR
  // 'before텹after', // MUSICAL SYMBOL BEGIN PHRASE
  // 'before텺after', // MUSICAL SYMBOL END PHRASE
]
test('remove whitespace characters', function (t) {
  noSpaces.forEach((before, i) => {
    const after = replace(before)
    t.notEqual(before, after, `#${i} - ${before}`)
    t.equal(after, 'beforeafter', `#${i} - is 'beforeafter'`)
  })
  t.end()
})
