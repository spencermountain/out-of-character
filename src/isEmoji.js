// const variationSelectors = /[\uFE00-\uFE0F]/
const isVariationSelector = (num) => num >= 65024 && num <= 65039
// const highSurrogates = /[\uD800-\uDBFF]/
const isHighSurrogate = (num) => num >= 55296 && num <= 56319
// const lowSurrogates = /[\uDC00-\uDFFF]/
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
