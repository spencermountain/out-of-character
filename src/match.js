'use strict'

const data = require('../data/characters.json')
const isEmoji = require('./isEmoji')

// For easier lookup
const byCode = data.reduce((h, obj) => {
  h[obj.code] = obj
  return h
}, {})

// Chars to create our regex with
const unicodePrefixRegex = /^U\+/
const codes = data
  .filter((obj) => obj.replaceWith !== undefined)
  .map((obj) => {
    // Convert "U+XXXX" to "\\uXXXX" for RegExp
    return obj.code.replace(unicodePrefixRegex, '\\u')
  })
const codeRegex = new RegExp(`(${codes.join('|')})`, 'g')

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
        name: found.name,
        code: found.code,
        offset: offset,
        replacement: found.replaceWith || '',
      })
    }
  }
  return matches
}

module.exports = findAll