// @todo turn this into modules and promisify + tidy
const path = '../../data/characters-raw.json'
const lookupJSON = 'https://raw.githubusercontent.com/mdevils/html-entities/master/src/named-references.source.json'
const config = require(path)
const fs = require('fs')
const {resolve} = require('path')
const axios = require('axios')

let lookup = []
let parsed = []

const getEntity = (value) => {
    // @todo doesn't seem to work all the time
    const regex = new RegExp(value)
    return Object.keys(lookup).find(key => lookup[key].characters.match(regex));
}

const parse = (char) => {
    const codeEscaped = char.code.replace(/^U\+/, '\\u')
    const codeNumber = char.code.replace('U+', '')
    const actualUnicodeChar = String.fromCodePoint(`0x${codeNumber}`)
    return {
        ...char,
        codeNumber,
        actualUnicodeChar,
        codeEscaped,
        htmlEntity: getEntity(actualUnicodeChar),
        url: `https://www.compart.com/en/unicode/${char.code}`
    }
}

const save = (obj) => {
    fs.writeFile(resolve(`${__dirname}/${path.replace('-raw','')}`), JSON.stringify(obj, null, 2), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        console.log(parsed)
    })
}

axios.get(lookupJSON)
     .then((response) => {
        lookup = response.data.html5
        parsed = config.map(parse)
        save(parsed)
     })
     .catch((err) => {
         throw err
     })


// @todo fix: this won't work because axios.get is promise
module.exports = parsed