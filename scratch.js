const { detect, replace } = require('./src')
const fs = require('fs')

// const data = require('./data/characters.json')
// let spaces = data.filter((obj) => obj.replaceWith === ' ')
// let noSpaces = data.filter((obj) => obj.replaceWith === '')

// spaces = spaces.map((obj) => {
//   let hex = obj.code.replace(/^U\+/, '')
//   let num = parseInt(hex, 16)
//   let char = String.fromCharCode(num)
//   // console.log(hex, num, char)
//   console.log(`'before${char}after', // ${obj.name}`)
//   return `before${char}after`
// })
// console.log(JSON.stringify(spaces, null, 2))

// noSpaces = noSpaces.map((obj) => {
//   let hex = obj.code.replace(/^U\+/, '')
//   let num = parseInt(hex, 16)
//   let char = String.fromCharCode(num)
//   // console.log(hex, num, char)
//   console.log(`'before${char}after', // ${obj.name}`)
//   return `before${char}after`
// })

// const path = './tests/bad-text/ipsom.txt'
// const path = './tests/bad-text/good-text.txt'
// let text = fs.readFileSync(path).toString()
// console.log(detect(text))
// yikes.

// let text = `hello mudda؜hello fadda`
// let text = `hello mudda؜hello fadda`
// let text = `before‍after`
// let text = 'noth­ing s͏neak឵y h᠎ere'
// console.log(detect(text))
// console.log(text === replace(text))
// // ok, fix it
// fs.writeFileSync(path, replace(text))

// // ok, double-check it.
// let goodNow = fs.readFileSync(path).toString()
// console.log(detect(goodNow))
