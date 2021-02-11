#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { detect, replace } = require('../src/index')
const { dim, blue } = require('colorette')
let args = process.argv.slice(2)
const detectFile = require('./detect-file')

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

let files = []
// do a directory?
const isDir = fs.lstatSync(pathStr).isDirectory()
if (isDir) {
  fs.readdirSync(pathStr).forEach((file) => {
    files.push(path.join(pathStr, file))
  })
  console.log(dim(`\ninspecting ${files.length} ${files.length !== 1 ? 'files' : 'file'}...\n\n`))
} else {
  files = [pathStr]
}

files.forEach((file) => {
  let found = detectFile(file)
  if (found === true && mode === 'replace') {
    let text = fs.readFileSync(file).toString()
    fs.writeFileSync(file, replace(text))
    console.log(blue(`     👍 Removed them`))
  }
})
console.log('\n\n')
