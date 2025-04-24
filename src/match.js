'use strict'

const data = require('../data/characters.json')
const isEmoji = require('./isEmoji')

/**
 * @description Adds leading zeros to a string until it reaches the specified width.
 * @param {string} str - The string to pad with leading zeros.
 * @param {number} width - The desired width of the string.
 * @returns {string} The padded string with leading zeros.
 */
const padStr = function (str, width) {
  while (str.length < width) {
    str = '0' + str
  }
  return str
}

// For easier lookup
const byCode = data.reduce((h, obj) => {
  h[obj.code] = obj
  return h
}, {})

// Chars to create our regex with
const codes = data
  .filter((obj) => obj.replaceWith !== undefined)
  .map((obj) => {
    return obj.code.replace(/^U\+/, '\\u')
  })

/**
 * @description Finds all invisible characters in the given text.
 * @param {string} text - The text to search for invisible characters.
 * @returns {{name: string, code: string, offset: number, replacement: string}[]} An array
 * of objects representing the found invisible characters.
 */
const findAll = function (text) {
  const regEx = new RegExp(`(${codes.join('|')})`, 'g')
  const matches = []
  text.replace(regEx, (ch, _b, offset) => {
    // Find the code of the char we matched
    const code = ch.charCodeAt(0)
    let hex = code.toString(16).toUpperCase()
    hex = 'U+' + padStr(hex, 4)

    const found = byCode[hex] || {}
    // Don't match for emoji zero-width chars
    if (found.code === 'U+200D') {
      // Is this zero-width used in an emoji?
      if (isEmoji(text, offset)) {
        return ch // Do nothing
      }
    }
    matches.push({
      name: found.name,
      code: found.code,
      offset: offset,
      replacement: found.replaceWith || '',
    })
    return ch // Do nothing
  })
  return matches
}

module.exports = findAll