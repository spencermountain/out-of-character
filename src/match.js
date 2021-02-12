const data = require('../data/characters.json')

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
  const regEx = new RegExp(`[${codes.join('')}]`, 'g')
  let matches = []
  text = text.replace(regEx, (ch, offset) => {
    // find the code of the char we matched
    let code = ch.charCodeAt(0)
    let hex = code.toString(16).toUpperCase()
    hex = `U+` + padStr(hex, 4)
    let found = byCode[hex] || {}
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
