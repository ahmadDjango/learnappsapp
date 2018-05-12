var pug = require('pug')
var app = require('express')()

// renderFile
var html = pug.renderFile('start.pug');

app.get('/', (req, res) => {
  res.status(200).send(html)
})

app.listen(3000, function() {
  console.log('listening on 3000')
})

