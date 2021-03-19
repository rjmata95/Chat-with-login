const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
    username: String,
    email: String,
    password: String,
    address: String
})

const model = mongoose.model('User', mySchema)

module.exports = model;