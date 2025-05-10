'use strict'

const isVariationSelector = (num) => num >= 65024 && num <= 65039
const isHighSurrogate = (num) => num >= 55296 && num <= 56319
const isLowSurrogate = (num) => num >= 56320 && num <= 57343

/**
 * @description Checks if the character at the given index in the text is an emoji.
 * @param {string} text - The text to check for emojis.
 * @param {number} i - The offset of the character to check.
 * @returns {boolean} True if the character is an emoji, false otherwise.
 */
const isEmoji = function (text, i) {
  // Look at code before
  if (text[i - 1]) {
    const code = text.charCodeAt(i - 1)
    if (isHighSurrogate(code) || isLowSurrogate(code) || isVariationSelector(code)) {
      return true
    }
  }
  // Look at code after
  if (text[i + 1]) {
    const code = text.charCodeAt(i + 1)
    if (isHighSurrogate(code) || isLowSurrogate(code) || isVariationSelector(code)) {
      return true
    }
  }

  return false
}

export default isEmoji
