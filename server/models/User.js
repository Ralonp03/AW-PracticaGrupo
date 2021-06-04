const mongoose = require('mongoose')

const { Schema } = mongoose

const User = new Schema({
    name: String,
    password: String,
    collections: [],
    cards: []
})

module.exports = mongoose.model('User', User)

