import data from '../data/characters.json' with { type: 'json' }
import isEmoji from './isEmoji.js'

// For easier lookup
const byCode = data.reduce((h, obj) => {
  h[obj.code] = obj
  return h
}, {})

const codes = data
  .filter((obj) => obj.replaceWith !== undefined)
  .map((obj) => obj.actualUnicodeChar)
const codeRegex = new RegExp(`(${codes.join('|')})`, 'gu')

/**
 * @description Finds all invisible characters in the given text.
 * @param {string} text - The text to search for invisible characters.
 * @returns {{name: string, code: string, offset: number, replacement: string}[]} An array
 * of objects representing the found invisible characters.
 */
const findAll = function (text) {
  const matches = []

  for (const match of text.matchAll(codeRegex)) {
    const char = match[0]
    const offset = match.index

    // Find the code details of the matched character
    const codePoint = char.codePointAt(0) // Use codePointAt for full Unicode support
    const hex = 'U+' + codePoint.toString(16).toUpperCase().padStart(4, '0')

    const found = byCode[hex] // Lookup using the canonical 'U+XXXX' format
    if (found) {
      // Don't report U+200D (Zero Width Joiner) if it's part of an emoji sequence
      if (found.code === 'U+200D' && isEmoji(text, offset)) {
        continue
      }

      matches.push({
        code: found.code,
        name: found.name,
        offset: offset,
        replacement: found.replaceWith || '',
      })
    }
  }
  return matches
}

export default findAll
