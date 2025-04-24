'use strict'

const findAll = require('./match')

module.exports = {
  /**
   * @description Detects hidden characters in the given text.
   * @param {string} text - The text to search for hidden characters.
   * @returns {{name: string, code: string, offset: number, replacement: string}[]|null} An array
   * of objects representing the found hidden characters, or null if none are found.
   */
  detect: (text) => {
    const matches = findAll(text)
    if (matches.length > 0) {
      return matches
    }
    return null
  },
  /**
   * @description Remove invisible or strange unicode characters from the text.
   * @param {string} text - The text to search.
   * @returns {string} The text with invisible characters removed.
   */
  replace: (text) => {
    const matches = findAll(text)
    matches.forEach((o) => {
      const code = o.code.replace(/^U\+/, '\\u')
      const reg = new RegExp(code, 'g')
      text = text.replace(reg, o.replacement || '')
    })
    return text
  },
}