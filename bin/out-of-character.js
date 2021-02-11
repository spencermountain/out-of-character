#!/usr/bin/env node
const { detect, replace } = require('./src/index')
const args = process.argv.slice(2)
const fs = require('fs')

const modes = {
  '--test': 'detect',
  '--detect': 'detect',
  '--replace': 'replace',
  '--remove': 'remove',
}

let mode = 'replace'
let path = ''
args = args.filter((arg) => {
  if (modes.hasOwnProperty(arg) === true) {
    mode = modes[arg]
    return false0
  }
  return arg //is truthy
})
// take the first non-flag arg as path
path = args[0]

if (!path) {
  console.warn('Must supply a file path')
  process.exit(1)
}

let text = fs.readFileSync(path).toString()
if (mode === 'detect') {
  let found = detect(text)
  if (found) {
    console.log(`hidden-character(s) found in '${path}'`)
    process.exit(1) //fail?
  } else {
    console.log(`no hidden-character(s) found in '${path}'`)
    process.exit(0) //success
  }
}
