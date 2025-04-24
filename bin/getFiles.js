'use strict'

const glob = require('glob')
const fs = require('fs')
const path = require('path')

/**
 * @description Get files from a directory, file, or glob pattern.
 * @param {string} pathStr - The path to the file or directory.
 * @returns {string[]} An array of file paths.
 */
const getFiles = function (pathStr) {
  const files = []
  // File/folder exists
  if (fs.existsSync(pathStr)) {
    // Get files from directory
    const isDir = fs.lstatSync(pathStr).isDirectory()
    if (isDir) {
      fs.readdirSync(pathStr).forEach((file) => {
        const filePath = path.join(pathStr, file)
        if (fs.lstatSync(filePath).isDirectory() === false) {
          files.push(filePath)
        }
      })
      return files
    }
    // Return a single file
    const isFile = fs.lstatSync(pathStr).isFile()
    if (isFile) {
      return [pathStr]
    }
  }
  return glob.sync(pathStr) || []
}

module.exports = getFiles