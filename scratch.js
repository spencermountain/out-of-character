/* eslint-disable no-console, no-unused-vars */
import { detect, replace } from './src/index.js'

const str = `👨‍🦰`

// ZWJ sequence: woman singer
// U+1F469 + U+1F3FF + U+200D + U+1F3A4
// 👩 + 🏿 + U+200D + 🎤
// > 👩🏿🎤 -> single symbol not supported yet

console.log(detect(str))
