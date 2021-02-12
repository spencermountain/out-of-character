#!/usr/bin/env node
const fs = require('fs')
const { dim, blue } = require('colorette')
const detectFile = require('./detect-file')
const { replace } = require('../src/index')
const getFiles = require('./getFiles')
let args = process.argv.slice(2)

const modes = {
  '--test': 'detect',
  '--detect': 'detect',
  '--replace': 'replace',
  '--remove': 'remove',
}

let mode = 'detect'
let pathStr = ''
args = args.filter((arg) => {
  if (modes.hasOwnProperty(arg) === true) {
    mode = modes[arg]
    return false
  }
  return arg //is truthy
})
// take the first non-flag arg as path
pathStr = args[0]

if (!pathStr) {
  console.warn(`Must supply a file path: 'out-of-character ./path/to/file.txt'`)
  process.exit(1)
}

let files = getFiles(pathStr)
if (files.length === 0) {
  console.warn(`Found no files that match '${pathStr}'`)
  process.exit()
}
console.log(dim(`\ninspecting ${files.length} ${files.length !== 1 ? 'files' : 'file'}...\n\n`))

files.forEach((file) => {
  let found = detectFile(file)
  if (found === true && mode === 'replace') {
    let text = fs.readFileSync(file).toString()
    fs.writeFileSync(file, replace(text))
    console.log(blue(`     👍 Removed them`))
  }
})
console.log('\n\n')
