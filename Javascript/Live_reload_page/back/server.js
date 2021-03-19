const express = require('express')
const { ExpectationFailed } = require('http-errors')
const db = require('./components/user/db')

var app = express();
const port = process.env.PORT || 3000;
const MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

db(MONGO_URI)

app.use('/', express.static('front/src'))


// if (port == null || port == ""){
//     port = 3000;
// }
app.listen(port)
console.log(`Listening on port ${port}`)