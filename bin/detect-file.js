const fs = require('fs')
const { detect } = require('../src/index')
const { blue, yellow, dim, italic, red } = require('colorette')

const detectFile = function (path) {
  let text = fs.readFileSync(path).toString()
  let found = detect(text)
  if (found && found.length > 0) {
    console.log('\n  ' + yellow(path))
    let noun = found.length > 1 ? 'characters' : 'character'
    console.log(blue(`   - Found hidden-${noun} - `))
    found.forEach((obj) => {
      console.log(dim(`     ${red('•')} '${obj.name}' :${obj.offset}`))
    })
    return true
  }
  // looks good
  console.log(italic('  ' + yellow(path)))
  console.log(dim(blue(`     ${'•'} looks good`)))
  return false
}
module.exports = detectFile
