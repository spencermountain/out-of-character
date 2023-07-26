/* eslint-disable no-unused-vars */
const { detect, replace } = require('./src')
const fs = require('fs')

//👶🧒👦👧🧑👨👱‍♂️🧔👩👱‍♀️🧓👴👵👨‍⚕️👩‍⚕️👨‍🎓👩‍🎓👨‍🏫👩‍🏫👨‍⚖️👩‍⚖️👨‍🌾👩‍🌾👨‍🍳👩
//‍🍳👨‍🔧👩‍🔧👨‍🏭👩‍🏭👨‍💼👩‍💼👨‍🔬👩‍🔬👨‍💻👩‍💻👨‍🎤👩‍🎤👨‍🎨👩‍🎨👨‍✈️👩‍✈️👨‍🚀👩‍🚀👨‍🚒👩‍🚒🧙‍♂️🧙‍♀️🧚‍♂️🧚‍♀️👨‍🦰🧛‍♂️🧛‍♀️👨‍🦱👨‍🦳👨‍🦲🧜‍♂️🧜‍♀️🧝‍♂️👩‍🦰👩‍🦱🧝‍♀️👩‍🦳🧞‍♂️👩‍🦲🧞‍♀️🧟‍♂️🧟‍♀️🙍‍♂️🙍‍♀️🙎‍♂️🙎‍♀️🙅‍♂️🙅‍♀️🙆‍♂️🙆‍♀️💁‍♂️💁‍♀️🙋‍♂️🙋‍♀️🙇‍♂️🙇‍♀️🤦🤦‍♂️🤦‍♀️🤷🤷‍♂️🤷‍♀️💆‍♂️💆‍♀️💇‍♂️💇‍♀️👤👥🦸‍♂️🦸‍♀️🦹‍♂️🦹‍♀️👫👬👭👩‍❤️‍💋‍👨👨‍❤️‍💋‍👨👩‍❤️‍💋‍👩👩‍❤️‍👨👨‍❤️‍👨👩‍❤️‍👩👨‍👩‍👦👨‍👩‍👧👨‍👩‍👧‍👦👨‍👩‍👦‍👦👨‍👩‍👧‍👧👨‍👨‍👦👨‍👨‍👧👨‍👨‍👧‍👦👨‍👨‍👦‍👦👨‍👨‍👧‍👧👩‍👩‍👦👩‍👩‍👧👩‍👩‍👧‍👦👩‍👩‍👦‍👦👩‍👩‍👧‍👧👨‍👦👨‍👦‍👦👨‍👧👨‍👧‍👦👨‍👧‍👧👩‍👦👩‍👦‍👦👩‍👧👩‍👧‍👦👩‍👧‍👧
// 🦵
// let str = `🚶‍♂️🚶‍♀️🏃‍♂️🏃‍♀️💃🕺👯‍♂️👯‍♀️🧖‍♂️🧖‍♀️🧗‍♂️🧗‍♀️🧘‍♂️🧘‍♀️🛌🕴️🗣️🤺🏇⛷️🏂🏌️‍♂️🏌️‍♀️🏄‍♂️🏄‍♀️🚣‍♂️🚣‍♀️🏊‍♂️🏊‍♀️⛹️‍♂️⛹️‍♀️🏋️‍♂️🏋️‍♀️🚴‍♂️🚴‍♀️🚵‍♂️🚵‍♀️🏎️🏍️🤸🤸‍♂️🤸‍♀️🤼🤼‍♂️🤼‍♀️🤽🤽‍♂️🤽‍♀️🤾🤾‍♂️🤾‍♀️🤹🤹‍♂️🤹‍♀️`
// let str = `🇨🇿🇩🇪🇩🇬🇩🇯🇩🇰🇩🇲🇩🇴🇩🇿🇪🇦🇪🇨🇪🇪🇪🇬🇪🇭🇪🇷🇪🇸🇪🇹🇪🇺🇫🇮🏴‍☠️🇫🇯🇫🇰🇫🇲🇫🇴🇫🇷🇬🇦🇬🇧🇬🇩🇬🇪🇬🇫🇬🇬🇬🇭🇬🇮🇬🇱🇬🇲🇬🇳🇬🇵🇬🇶🇬🇷🇬🇸🇬🇹🇬🇺🇬🇼🇬🇾🇭🇰🇭🇲🇭🇳`
// let str = ` 👮‍♂️👮‍♀️🕵️‍♂️🕵️‍♀️💂‍♂️💂‍♀️👷‍♂️👷‍♀️🤴👸👳‍♂️👳‍♀️👲🧕🤵👰🤰🤱👼🎅🤶`

// ZWJ sequence: family (man, woman, boy)
// 👨‍ + U+200D + 👩‍ + U+200D + 👦
// U+1F468 + U+200D + U+1F469 + U+200D + U+1F466
// let str = `‍👨‍👩‍👦`

let str = `👨‍🦰`
// console.log(str.length)
// console.log(str[0])
// console.log(str[1])
// console.log(str[2])
// console.log(str[3])
// console.log(str[4])
// console.log(str[5])

//from https://www.regextester.com/106421
// const emojiReg = /^(\u00a9|\u00ae|[\u2319-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/

// const padStr = function (str, width) {
//   while (str.length < width) {
//     str = '0' + str
//   }
//   return str
// }

// U+1F441 U+FE0F U+200D U+1F5E8 U+FE0F

// 👁️‍🗨️ U+D83D
// 👁️‍🗨️ U+DC41
// 👁️‍🗨️ U+FE0F - variation selector
// 👁️‍🗨️ U+200D
// 👁️‍🗨️ U+D83D  -high-surragates
// 👁️‍🗨️ U+DDE8
// 👁️‍🗨️ U+FE0F

// high-surragates - 0xD800 to 0xDB7F

// console.log(str.length)
// for (let i = 0; i < str.length; i += 1) {
//   let code = str.charCodeAt(i)
//   console.log(code)
//   let hex = code.toString(16).toUpperCase()
//   // hex = `U+` + padStr(hex, 4)
//   console.log(parseInt(hex, 16))

//   console.log(str, hex)
// }

// ZWJ sequence: woman singer
// U+1F469 + U+1F3FF + U+200D + U+1F3A4
// 👩 + 🏿 + U+200D + 🎤
// > 👩🏿🎤 -> single symbol not supported yet

// console.log(str.)
console.log(detect(str))
// console.log(replace(str))

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
