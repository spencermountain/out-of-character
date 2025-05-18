import glob from 'glob'
import fs from 'fs'
import path from 'path'

/**
 * @description Get files from a directory, file, or glob pattern.
 * @param {string} pathStr - The path to the file or directory.
 * @returns {string[]} An array of file paths.
 */
const getFiles = function (pathStr, recursive = false) {
  const files = []

  const getDirectory = function (currentPath, deep = false) {
    // Check if path exists
    if (fs.existsSync(currentPath)) {
      // Check if it's a directory
      const isDir = fs.lstatSync(currentPath).isDirectory()
      if (isDir) {
        fs.readdirSync(currentPath).forEach((file) => {
          const filePath = path.join(currentPath, file)
          if (fs.lstatSync(filePath).isDirectory()) {
            // Recursively process subdirectories
            if (deep) {
              getDirectory(filePath)
            }
          } else {
            // Add file to the list
            files.push(filePath)
          }
        })
      } else {
        // It's a file, add it to the list
        files.push(currentPath)
      }
    }
  }

  // Handle glob patterns
  if (!fs.existsSync(pathStr) && glob.hasMagic(pathStr)) {
    return glob.sync(pathStr) || []
  }

  // Check if it's a file or directory
  if (fs.existsSync(pathStr)) {
    const isDir = fs.lstatSync(pathStr).isDirectory()

    if (isDir) {
      // It's a directory, use recursive function
      getDirectory(pathStr, recursive)
    } else {
      // It's a specific file, just add it directly
      files.push(pathStr)
    }
  }

  return files
}

export default getFiles
