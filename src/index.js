import findAll from './match.js'


/**
 * @description Detects hidden characters in the given text.
 * @param {string} text - The text to search for hidden characters.
 * @param {object} [opts] - Options.
 * @param {string[]} [opts.exclude] - Codes (like 'U+202E') or types (like 'Bidi') to ignore.
 * @returns {{name: string, code: string, type: string, offset: number, replacement: string}[]|null} An array
 * of objects representing the found hidden characters, or null if none are found.
 * Offsets are UTF-16 code-unit indices, like String.prototype.indexOf.
 */
const detect = function (text, opts) {
  const matches = findAll(text, opts)
  if (matches.length > 0) {
    return matches
  }
  return null
}

/**
 * @description Remove invisible or strange unicode characters from the text.
 * @param {string} text - The text to search.
 * @param {object} [opts] - Options.
 * @param {string[]} [opts.exclude] - Codes (like 'U+202E') or types (like 'Bidi') to keep in the text.
 * @returns {string} The text with invisible characters removed.
 */
const replace = function (text, opts) {
  const matches = findAll(text, opts)

  // Early return if no matches
  if (matches.length === 0) {
    return text
  }

  let result = ''
  let lastIndex = 0

  const matchesLength = matches.length
  for (let i = 0; i < matchesLength; i += 1) {
    const match = matches[i]
    result += text.slice(lastIndex, match.offset)
    result += match.replacement
    // astral characters span two code units
    lastIndex = match.offset + (text.codePointAt(match.offset) > 0xffff ? 2 : 1)
  }
  result += text.slice(lastIndex)

  return result
}

export { detect, replace }
