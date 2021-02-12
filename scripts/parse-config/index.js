const path = '../../data/characters-raw.json'
const config = require(path)
const fs = require('fs')
const {resolve} = require('path')

const parsed = config.map(char => {
    return {
        ...char,
        url: `https://www.compart.com/en/unicode/${char.code}`
    }
})
fs.writeFile(resolve(`${__dirname}/${path.replace('-raw','')}`), JSON.stringify(parsed, null, 2), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    console.log(parsed)
})

module.exports = parsed