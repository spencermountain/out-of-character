const isVariationSelector = (num) => num >= 65024 && num <= 65039
const isHighSurrogate = (num) => num >= 55296 && num <= 56319
const isLowSurrogate = (num) => num >= 56320 && num <= 57343

// allow invisible characters in emojis
const isEmoji = function (text, i) {
  // look at code before
  if (text[i - 1]) {
    let code = text.charCodeAt(i - 1)
    if (isHighSurrogate(code) || isLowSurrogate(code) || isVariationSelector(code)) {
      return true
    }
  }
  // look at code before
  if (text[i + 1]) {
    let code = text.charCodeAt(i + 1)
    if (isHighSurrogate(code) || isLowSurrogate(code) || isVariationSelector(code)) {
      return true
    }
  }

  return false
}
module.exports = isEmoji
