const fs = require('fs')
const { detect } = require('../src/index')
const { blue, yellow, dim, italic } = require('colorette')

const detectFile = function (path) {
  let text = fs.readFileSync(path).toString()
  let found = detect(text)
  if (found) {
    console.log('\n  ' + yellow(path))
    console.log(blue(`     😮 Found hidden-character(s)`))
    return true
  }
  // looks good
  console.log(italic('  ' + yellow(path)))
  console.log(dim(`     ${blue('•')} looks good`))
  return false
}
module.exports = detectFile
