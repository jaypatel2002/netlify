const express = require('express')
const serveIndex = require('serve-index')

const app = express()
express.static('uploads')
app.use(
  '/*',
//   express.static('uploads'),
  serveIndex('', { icons: true })
)

app.listen(300, () => console.log('🚀 is on port 3000...'))
