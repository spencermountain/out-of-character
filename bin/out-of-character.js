#!/usr/bin/env node

import fs from 'fs'
import { dim, blue } from 'colorette'
import detectFile from './detect-file.js'
import { replace } from '../src/index.js'
import getFiles from './getFiles.js'
let args = process.argv.slice(2)

const modes = {
  '--test': 'detect',
  '--detect': 'detect',
  '--replace': 'replace',
  '--remove': 'remove',
  '--recursive': false,
}

let mode = 'detect'
let pathStr = ''
args = args.filter((arg) => {
  if (modes.hasOwnProperty(arg) === true) {
    // cast to boolean
    if (modes[arg] === 'false') {
      modes[arg] = false
    }
    mode = modes[arg]
    return false
  }
  return arg //is truthy
})
// Take the first non-flag arg as path
pathStr = args[0]

if (!pathStr) {
  console.warn(`Must supply a file path: 'out-of-character ./path/to/file.txt'`)
  process.exit(1)
}

const files = getFiles(pathStr, modes['--recursive'])
if (files.length === 0) {
  console.warn(`Found no files that match '${pathStr}'`)
  process.exit()
}
console.log(dim(`\ninspecting ${files.length} ${files.length !== 1 ? 'files' : 'file'}...\n\n`))

files.forEach((file) => {
  const found = detectFile(file)
  if (found === true && mode === 'replace') {
    const text = fs.readFileSync(file).toString()
    fs.writeFileSync(file, replace(text))
    console.log(blue('     👍 Removed them'))
  }
})
console.log('\n\n')