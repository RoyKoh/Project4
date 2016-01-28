var express = require('express')
var app = express()
var morgan = require('morgan')


// middleware
app.use(morgan('dev'))

app.get('/', function (req, res) {
  var name = 'roy'
  res.json('my name is' + name)
})

app.use(express.static(__dirname + '/'))
var port = process.env.PORT || 5000
app.listen(port)
