const pug = require('pug')
const bodyParser = require('body-parser')
const app = require('express')()
const fs = require('fs')

const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended: true}))

// renderFile
var html = pug.renderFile('start.pug');

var db
MongoClient.connect(dbConnString, (err, client) => {
  if (err) return console.log(err)
  db = client.db('ahmadstestdatabase')
  app.listen(3000, function() {
    console.log('listening on 3000')
  })  
})


app.get('/', (req, res) => {
  res.status(200).send(html)
})

app.post('/quotes', (req,res) => {

})
