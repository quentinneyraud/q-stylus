const path = require('path')
const fs = require('fs')

/**
 * Change here, then run npm init
 */
const LIBRARY_TITLE = 'Q stylus'
const LIBRARY_DESCRIPTION = 'Stylus stack with CSS reset, responsive breakpoints, easing, grid and helpers'
const LIBRARY_NAME = 'q-stylus'
const LIBRARY_DOC_URL = 'https://quentinneyraud.github.io/q-stylus'
const LIBRARY_REPO_URL = 'https://github.com/quentinneyraud/q-stylus'

const replaceWords = { LIBRARY_TITLE, LIBRARY_DESCRIPTION, LIBRARY_NAME, LIBRARY_DOC_URL, LIBRARY_REPO_URL }
const files = ['package.json', 'docs/index.html', 'docs/README.md', 'example/index.html', 'example/index.js']

/**
 * Log helpers
 */
const blank = _ => console.log('')
const sep = _ => console.log('#'.repeat(25))

const readFile = filePath => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, datas) => {
      if (err) reject(err)

      resolve(datas)
    })
  })
}

const writeFile = (filePath, datas) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, datas, 'utf8', err => {
      if (err) reject(err)

      resolve()
    })
  })
}

const processFile = file => {
  return new Promise((resolve, reject) => {
    const filePath = path.resolve(__dirname, '..', file)

    console.log(`Reading file ${file}...`)

    readFile(filePath)
    .then(content => {
      console.log(`Replacing constants in ${file}...`)

      Object.keys(replaceWords)
      .forEach(strToReplace => {
        content = content.replace(new RegExp(strToReplace, 'g'), replaceWords[strToReplace])
      })

      return content
    })
    .then(content => writeFile(filePath, content))
    .then(_ => {
      console.log(`${file} processed !`);
        resolve()
      })
      .catch(err => reject(err))
  })
}

sep()
blank()
console.log('Initalize library with :')
blank()
console.log(`Library title: ${LIBRARY_TITLE}`)
console.log(`Library description: ${LIBRARY_DESCRIPTION}`)
console.log(`Library file name: ${LIBRARY_NAME}`)
console.log(`Library doc URL: ${LIBRARY_DOC_URL}`)
console.log(`Library repsitory URL: ${LIBRARY_REPO_URL}`)
blank()
sep()
blank()

const allFilesPromises = files.map(processFile)

Promise.all(allFilesPromises)
  .then(_ => {
    blank()
    blank()
    blank()
    console.log('All files processed');
  })
