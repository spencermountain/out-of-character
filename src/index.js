// from https://github.com/xpl/printable-characters/blob/master/build/printable-characters.js
const zeroWidth = /[^\u0000-\u007E]/g
const spaceChars = /[\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000\u0009]/g

// remove invisible or strange unicode characters from the text
module.exports = {
  detect: (text) => {
    return zeroWidth.test(text) || spaceChars.test(text)
  },
  replace: (text) => {
    text = text.replace(zeroWidth, '')
    text = text.replace(spaceChars, ' ')
    return text
  },
}
