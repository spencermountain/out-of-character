/* eslint-disable no-console */

/** @todo Turn this into modules and promisify + tidy. **/
import codes from '../../data/codes.json' with { type: 'json' }
import config from '../../data/characters-raw.json' with { type: 'json' }
import fs from 'fs'
import { resolve } from 'path'

let parsed = []

const parse = function (char) {
  const codeNumber = char.code.replace('U+', '')
  // astral code points need the `\u{...}` form
  const codeEscaped = codeNumber.length > 4 ? `\\u{${codeNumber}}` : `\\u${codeNumber}`
  const actualUnicodeChar = String.fromCodePoint(`0x${codeNumber}`)
  const htmlEntity = codes.find(code => code.unicode === char.code)

  const combinedObject = {
    ...htmlEntity,
    ...char,
    actualUnicodeChar,
    codeEscaped,
    url: `https://www.compart.com/en/unicode/${char.code}`
  }

  // Return the object with keys sorted alphabetically
  const sortedKeys = Object.keys(combinedObject).sort()
  const sortedObject = {}
  const sortedKeysLength = sortedKeys.length
  for (let i = 0; i < sortedKeysLength; i += 1) {
    const key = sortedKeys[i]
    sortedObject[key] = combinedObject[key]
  }

  return sortedObject
}

const save = function (obj) {
  fs.writeFile(resolve(`${import.meta.dirname}/../../data/characters.json`), JSON.stringify(obj, null, 2) + '\n', (err) => {
    if (err) throw err
    console.log('The file has been saved!')
    console.log(parsed)
  })
}


parsed = config.map(parse)
save(parsed)

/** @todo Fix this won't work because axios.get is promise. **/
export default parsed