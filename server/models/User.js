const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
}, {
        collection: 'users'
    })

module.exports = mongoose.model('User', userSchema)