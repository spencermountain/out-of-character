'use strict'

const findAll = require('./match')

module.exports = {
  // find invisible or strange unicode characters in the text
  detect: (text) => {
    const matches = findAll(text)
    if (matches.length > 0) {
      return matches
    }
    return null
  },
  // remove invisible or strange unicode characters from the text
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
