import fs from 'node:fs'
import { detect } from '../src/index.js'
import { styleText } from 'node:util'

/**
 * @description Detects hidden characters in a file.
 * @param {string} path - The path to the file to check.
 * @returns {boolean} True if hidden characters are found, false otherwise.
 */
const detectFile = function (path) {
  const text = fs.readFileSync(path).toString()
  const found = detect(text)
  if (found.length > 0) {
    console.log('\n  ' + styleText('yellow', path))
    const noun = found.length > 1 ? 'characters' : 'character'
    console.log(styleText('blue', `   - Found hidden-${noun} - `))
    found.forEach((obj) => {
      console.log(styleText('dim', `     ${styleText('red', '•')} '${obj.name}' :${obj.offset}`))
    })
    return true
  }
  // Looks good
  console.log(styleText('italic', '  ' + styleText('yellow', path)))
  console.log(styleText('dim', styleText('blue', '     • looks good')))
  return false
}

export default detectFile
