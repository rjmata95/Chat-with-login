const express = require('express')
const { ExpectationFailed } = require('http-errors')

var app = express();

// app.use('/', express.static('./front/src/index.html'))
app.use('/', express.static('front/src'))

app.listen(3000)
console.log('Listening on http://localhost:3000/')