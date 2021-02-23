const glob = require('glob')
const fs = require('fs')
const path = require('path')

// return a list of paths from either dir, file, or glob
const getFiles = function (pathStr) {
  let files = []
  // file/folder exists
  if (fs.existsSync(pathStr)) {
    // get files from directory
    const isDir = fs.lstatSync(pathStr).isDirectory()
    if (isDir) {
      fs.readdirSync(pathStr).forEach((file) => {
        let filePath = path.join(pathStr, file)
        if (fs.lstatSync(filePath).isDirectory() === false) {
          files.push(filePath)
        }
      })
      return files
    }
    // return a single file
    const isFile = fs.lstatSync(pathStr).isFile()
    if (isFile) {
      return [pathStr]
    }
  }
  return glob.sync(pathStr) || []
}
module.exports = getFiles
