const express = require('express')
const { ExpectationFailed } = require('http-errors')

var app = express();
const port = process.env.PORT || 3000;


app.use('/', express.static('front/src'))


// if (port == null || port == ""){
//     port = 3000;
// }
app.listen(port)
console.log(`Listening on port ${port}`)