'use strict'

/** @todo Turn this into modules and promisify + tidy. **/
const codes = require('../../data/codes.json')
const config = require('../../data/characters-raw.json')
const fs = require('fs')
const {resolve} = require('path')

let parsed = []

const parse = function (char) {
  const codeEscaped = char.code.replace(/^U\+/, '\\u')
  const codeNumber = char.code.replace('U+', '')
  const actualUnicodeChar = String.fromCodePoint(`0x${codeNumber}`)
  const htmlEntity = codes.find(code => code.unicode === char.code)

  const combinedObject = {
    ...htmlEntity,
    ...char,
    actualUnicodeChar,
    codeEscaped,
    url: `https://www.compart.com/en/unicode/${char.code}`
  };

  // Return the object with keys sorted alphabetically
  const sortedKeys = Object.keys(combinedObject).sort();
  const sortedObject = {};
  for (const key of sortedKeys) {
    sortedObject[key] = combinedObject[key];
  }

  return sortedObject; 
}

const save = function (obj) {
  fs.writeFile(resolve(`${__dirname}/../../data/characters.json`), JSON.stringify(obj, null, 2), (err) => {
    if (err) throw err
    console.log('The file has been saved!')
    console.log(parsed)
  })
}


parsed = config.map(parse)
save(parsed)

/** @todo Fix this won't work because axios.get is promise. **/
module.exports = parsed