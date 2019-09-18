const path = require('path')
const fs = require('fs')

/**
 * Change here, then run npm init
 */
const LIBRARY_TITLE = 'My library'
const LIBRARY_DESCRIPTION = 'My library is ...'
const LIBRARY_NAME = 'my-lib'
const LIBRARY_DOC_URL = 'https://quentinneyraud.github.io/my-lib'
const LIBRARY_REPO_URL = 'https://github.com/quentinneyraud/my-lib'

const replaceWords = { LIBRARY_TITLE, LIBRARY_DESCRIPTION, LIBRARY_NAME, LIBRARY_DOC_URL, LIBRARY_REPO_URL }
const files = ['package.json', 'rollup.config.js', 'docs/index.html', 'docs/README.md', 'example/index.html', 'example/index.js']

const readFile = (filePath) => {
  return fs.readFileSync(filePath, 'utf8')
}

const writeFile = (filePath, datas) => {
  return fs.writeFileSync(filePath, datas, 'utf8')
}

files.forEach(file => {
  const filePath = path.resolve(__dirname, '..', file)

  let content = readFile(filePath)

  Object.keys(replaceWords)
    .forEach(strToReplace => {
      content = content.replace(new RegExp(strToReplace, 'g'), replaceWords[strToReplace])
    })

  writeFile(filePath, content)
})
