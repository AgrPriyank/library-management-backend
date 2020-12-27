const mongoose = require('mongoose');
//const user = require('./user');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: [{
        type: String,
        required: [true, 'Unknown']
    }],
    totalCopies: {
        type: Number,
        required: true
    },
    availableCopies: {
        type: Number,
        required: true
    },
    edition: String,
    publishingYear: Number,
    currentlyIssuedTo: [{
      type: String//, ref: user.email
    }]
})

module.exports = mongoose.model('Book', schema, 'books');