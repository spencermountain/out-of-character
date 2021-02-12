const data = require('../data/characters.json')
const isEmoji = require('./isEmoji')

/** add spaces at the end */
const padStr = function (str, width) {
  while (str.length < width) {
    str = '0' + str
  }
  return str
}

// for easier look-up
const byCode = data.reduce((h, obj) => {
  h[obj.code] = obj
  return h
}, {})

// chars to create our regex with
let codes = data
  .filter((obj) => obj.replaceWith !== undefined)
  .map((obj) => {
    return obj.code.replace(/^U\+/, '\\u')
  })

// return an array of found invisible characters
const findAll = function (text) {
  // console.log(codes)
  const regEx = new RegExp(`(${codes.join('|')})`, 'g')
  let matches = []
  text.replace(regEx, (ch, _b, offset) => {
    // find the code of the char we matched
    let code = ch.charCodeAt(0)
    let hex = code.toString(16).toUpperCase()
    hex = `U+` + padStr(hex, 4)
    // console.log(ch, code, hex)
    let found = byCode[hex] || {}
    // dont match for emoji zero-width chars
    if (found.code === 'U+200D') {
      // is this zero-width used in an emoji?
      if (isEmoji(text, offset)) {
        return ch //do nothing
      }
    }
    matches.push({
      name: found.name,
      code: found.code,
      offset: offset,
      replacement: found.replaceWith || '',
    })
    return ch //do nothing
  })
  return matches
}
module.exports = findAll
