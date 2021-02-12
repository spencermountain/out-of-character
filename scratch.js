const { detect, replace } = require('./src')
const fs = require('fs')

// const path = './tests/bad-text/ipsom.txt'
// let text = fs.readFileSync(path).toString()
// console.log(detect(text))
// yikes.

// let text = `hello mudda؜hello fadda`
let text = `hello mudda؜hello fadda`
console.log(replace(text))
// // ok, fix it
// fs.writeFileSync(path, replace(text))

// // ok, double-check it.
// let goodNow = fs.readFileSync(path).toString()
// console.log(detect(goodNow))
