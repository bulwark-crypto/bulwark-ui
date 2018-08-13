
const fs = require('fs')
const path = require('path')
const sass = require('node-sass')

// Validate command line arguments.
if (process.argv.length < 3) {
  console.log('Please provide either "dark" or "light" as the first argument.')
  process.exit(1)
}

// Dark or light?
const styleType = process.argv[2] === 'dark' ? 'dark' : 'light'
// Minify?
const styleMin = process.argv[3] && process.argv[3] !== '' ? process.argv[3] : null

const sassPath = path.join(__dirname, 'sass')
const saveFile = path.join(__dirname, 'dist', `bulwark-${styleType}.css`)
const saveFileMin = path.join(__dirname, 'dist', `bulwark-${styleType}.min.css`)

sass.render({
  file: path.join(sassPath, `bulwark-${styleType}.scss`),
  // includePaths: [path.join(sassPath, 'include')],
  outFile: styleMin ? saveFileMin : saveFile,
  outputStyle: styleMin ? 'compressed' : 'nested'
}, (err, result) => {
  if (err) {
    return console.error(err)
  }

  fs.writeFile(styleMin ? saveFileMin : saveFile, result.css, (err) => {
    if (err) {
      return console.error(err)
    }

    console.log(`${styleMin ? saveFileMin : saveFile} saved to system!`)
  })
})
