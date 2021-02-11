#!/usr/bin/env node
const fs = require('fs')
const { detect, replace } = require('../src/index')
let args = process.argv.slice(2)

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
    return false
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
    console.log(`Found hidden-character(s) in '${path}'`)
    process.exit(1) //fail?
  } else {
    console.log(`Found no hidden-character(s) in '${path}'`)
    process.exit(0) //success
  }
}

// replace mode
let found = detect(text)
if (found) {
  fs.writeFileSync(path, replace(text))
  console.log(`Successfully replaced hidden-characters in '${path}'`)
} else {
  console.log(`Found no hidden-character(s) in '${path}'`)
}
