import findAll from './match.js'


/**
 * @description Detects hidden characters in the given text.
 * @param {string} text - The text to search for hidden characters.
 * @returns {{name: string, code: string, offset: number, replacement: string}[]|null} An array
 * of objects representing the found hidden characters, or null if none are found.
 */
const detect = function (text) {
  const matches = findAll(text)
  if (matches.length > 0) {
    return matches
  }
  return null
}

/**
 * @description Remove invisible or strange unicode characters from the text.
 * @param {string} text - The text to search.
 * @returns {string} The text with invisible characters removed.
 */
const replace = function (text) {
  const matches = findAll(text)

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
    lastIndex = match.offset + 1
  }
  result += text.slice(lastIndex)

  return result
}

export { detect, replace }