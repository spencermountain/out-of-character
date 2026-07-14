import data from '../data/characters.json' with { type: 'json' }
import { isEmoji, charBefore } from './isEmoji.js'

// For easier lookup — keyed by the literal character
const byChar = new Map()
data.forEach((obj) => {
  if (obj.replaceWith !== undefined) {
    byChar.set(obj.actualUnicodeChar, obj)
  }
})

const esc = (char) => `\\u{${char.codePointAt(0).toString(16).toUpperCase()}}`
// one character-class over the whole catalog, plus the tag-character block (U+E0000-U+E007F)
const codeRegex = new RegExp(`[${[...byChar.keys()].map(esc).join('')}\\u{E0000}-\\u{E007F}]`, 'gu')

const toHex = (num) => 'U+' + num.toString(16).toUpperCase().padStart(4, '0')

// a variation selector is legitimate after an emoji, a keycap base, or a CJK ideograph
const vsBase = /[\p{Extended_Pictographic}\p{Emoji_Component}\p{Ideographic}]/u
// a mongolian free variation selector is legitimate after a mongolian character
const fvsBase = /\p{Script=Mongolian}/u

const isTagChar = (num) => num >= 0xe0000 && num <= 0xe007f

/**
 * @description Checks whether a run of tag characters is anchored to a pictograph,
 * like the flag-of-england emoji — a lone run in plain text is steganography.
 * @param {string} text - The text being searched.
 * @param {number} offset - The offset of a tag character.
 * @returns {boolean} True if the run begins right after an emoji.
 */
const isEmojiTagSequence = function (text, offset) {
  let i = offset
  // walk back over the run — tag characters are always two code units
  while (i >= 2 && isTagChar(text.codePointAt(i - 2))) {
    i -= 2
  }
  const before = charBefore(text, i)
  return before !== '' && /\p{Extended_Pictographic}/u.test(before)
}

/**
 * @description Finds all invisible characters in the given text.
 * @param {string} text - The text to search for invisible characters.
 * @param {object} [opts] - Options.
 * @param {string[]} [opts.exclude] - Codes (like 'U+202E') or types (like 'Bidi') to ignore.
 * @returns {{name: string, code: string, type: string, offset: number, replacement: string}[]} An array
 * of objects representing the found invisible characters.
 */
const findAll = function (text, opts = {}) {
  const matches = []
  const exclude = opts.exclude ? new Set(opts.exclude) : null

  for (const match of text.matchAll(codeRegex)) {
    const char = match[0]
    const offset = match.index
    const codePoint = char.codePointAt(0)

    let found = byChar.get(char)
    if (found === undefined) {
      // otherwise we matched the tag-character block
      found = { code: toHex(codePoint), name: 'TAG CHARACTER', replaceWith: '', type: 'Tag' }
    }

    if (exclude !== null && (exclude.has(found.code) || exclude.has(found.type))) {
      continue
    }

    // Don't report U+200D (Zero Width Joiner) if it's part of an emoji sequence
    if (found.code === 'U+200D' && isEmoji(text, offset)) {
      continue
    }
    // Don't report variation selectors doing legitimate work
    if (found.type === 'Variation') {
      const base = charBefore(text, offset)
      if (base !== '' && (codePoint >= 0xfe00 ? vsBase.test(base) : fvsBase.test(base))) {
        continue
      }
    }
    // Don't report tag characters that spell out an emoji
    if (found.type === 'Tag' && isEmojiTagSequence(text, offset)) {
      continue
    }

    matches.push({
      code: found.code,
      name: found.name,
      type: found.type,
      offset: offset,
      replacement: found.replaceWith || '',
    })
  }
  return matches
}

export default findAll
