// characters that legitimately sit beside a zero-width joiner in an emoji
// sequence — pictographs, the emoji variation selector, and skin-tone modifiers
const emojiish = /[\p{Extended_Pictographic}\u{FE0F}\u{1F3FB}-\u{1F3FF}]/u

/**
 * @description Returns the full code point ending just before index i, or '' at the start of the text.
 * @param {string} text - The text to look in.
 * @param {number} i - The offset to look before.
 * @returns {string} The character before i, handling surrogate pairs.
 */
const charBefore = function (text, i) {
  if (i <= 0) {
    return ''
  }
  let start = i - 1
  const unit = text.charCodeAt(start)
  // a low surrogate — the code point starts one unit earlier
  if (unit >= 0xdc00 && unit <= 0xdfff && i > 1) {
    start -= 1
  }
  return String.fromCodePoint(text.codePointAt(start))
}

/**
 * @description Returns the full code point starting just after the character at index i, or '' at the end.
 * @param {string} text - The text to look in.
 * @param {number} i - The offset of the character to look after.
 * @returns {string} The character after i, handling surrogate pairs.
 */
const charAfter = function (text, i) {
  const next = i + (text.codePointAt(i) > 0xffff ? 2 : 1)
  if (next >= text.length) {
    return ''
  }
  return String.fromCodePoint(text.codePointAt(next))
}

/**
 * @description Checks if the character at the given index in the text is part of an emoji sequence.
 * @param {string} text - The text to check for emojis.
 * @param {number} i - The offset of the character to check.
 * @returns {boolean} True if the character is joined to an emoji, false otherwise.
 */
const isEmoji = function (text, i) {
  const before = charBefore(text, i)
  if (before !== '' && emojiish.test(before)) {
    return true
  }
  const after = charAfter(text, i)
  if (after !== '' && emojiish.test(after)) {
    return true
  }
  return false
}

export { charBefore, charAfter }
export default isEmoji
