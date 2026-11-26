#!/usr/bin/env node

import fs from 'node:fs'
import { styleText } from 'node:util'
import detectFile from './detect-file.js'
import { replace } from '../src/index.js'
import getFiles from './getFiles.js'

let mode = 'detect'
let recursive = false
const paths = []
process.argv.slice(2).forEach((arg) => {
  if (arg === '--replace') {
    mode = 'replace'
  } else if (arg === '--recursive') {
    recursive = true
  } else if (arg.startsWith('--')) {
    console.warn(`Unknown flag '${arg}'`)
    process.exit(1)
  } else {
    paths.push(arg)
  }
})

if (paths.length === 0) {
  console.warn(`Must supply a file path: 'char-out ./path/to/file.txt'`)
  process.exit(1)
}

// every path can be a file, directory, or glob — a file is only checked once
const files = [...new Set(paths.flatMap((pathStr) => getFiles(pathStr, recursive)))]
if (files.length === 0) {
  console.warn(`Found no files that match '${paths.join(' ')}'`)
  process.exit()
}
console.log(styleText('dim', `\ninspecting ${files.length} ${files.length !== 1 ? 'files' : 'file'}...\n\n`))

let remaining = 0
files.forEach((file) => {
  const found = detectFile(file)
  if (found === true && mode === 'replace') {
    const text = fs.readFileSync(file).toString()
    fs.writeFileSync(file, replace(text))
    console.log(styleText('blue', '     👍 Removed them'))
  } else if (found === true) {
    remaining += 1
  }
})
console.log('\n\n')

// fail when hidden characters are left behind, so this can gate a build
if (remaining > 0) {
  process.exitCode = 1
}
