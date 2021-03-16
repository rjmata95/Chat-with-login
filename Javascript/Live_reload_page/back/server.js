const express = require('express')
const { ExpectationFailed } = require('http-errors')

var app = express();
let port = process.env.PORT || 3000;

// app.use('/', express.static('./front/src/index.html'))
app.use('/', express.static('front/src'))


// if (port == null || port == ""){
//     port = 3000;
// }
app.listen(port)
console.log('Listening on http://localhost:3000/')