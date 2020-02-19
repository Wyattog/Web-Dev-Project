const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const books_schema = new Schema({
        title:{
            type: String,
            required: true,
            index: true,
            unique: true
        },
        author_first: {
            type: String,
            required: true,
            index: true,
            unique: true

        },
        author_last: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        published: {
            type: Number,
            required: true,
            index: true,
            unique: true
        },
        Illustrator: {
            type: String,
            required: true,
            
        }
});

const Books = mongoose.model('books', books_schema);
module.exports = Books;