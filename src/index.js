const findAll = require('./match')

module.exports = {
  // find invisible or strange unicode characters in the text
  detect: (text) => {
    let matches = findAll(text)
    if (matches.length > 0) {
      return matches
    }
    return null
  },
  // remove invisible or strange unicode characters from the text
  replace: (text) => {
    let matches = findAll(text)
    matches.forEach((o) => {
      let code = o.code.replace(/^U\+/, '\\u')
      let reg = new RegExp(code, 'g')
      text = text.replace(reg, o.replacement || '')
    })
    return text
  },
}
