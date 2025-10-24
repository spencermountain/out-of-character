import fs from 'fs'
import { detect } from '../src/index.js'
import { blue, yellow, dim, italic, red } from 'colorette'

/**
 * @description Detects hidden characters in a file.
 * @param {string} path - The path to the file to check.
 * @returns {boolean} True if hidden characters are found, false otherwise.
 */
const detectFile = function (path) {
  const text = fs.readFileSync(path).toString()
  const found = detect(text)
  if (found && found.length > 0) {
    console.log('\n  ' + yellow(path))
    const noun = found.length > 1 ? 'characters' : 'character'
    console.log(blue(`   - Found hidden-${noun} - `))
    found.forEach((obj) => {
      console.log(dim(`     ${red('•')} '${obj.name}' :${obj.offset}`))
    })
    return true
  }
  // Looks good
  console.log(italic('  ' + yellow(path)))
  console.log(dim(blue(`     ${'•'} looks good`)))
  return false
}

export default detectFile
