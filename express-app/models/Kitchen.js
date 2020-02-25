const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kitchenSchema = new Schema({
        name:{
            type: String,
            required: true,
            index: true,
            unique: true
        },
        desc: {
            type: String,
            required: true,
            index: true,
            unique: true

        },
        price: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        
        time: {
            type: String,
            required: true,
            
        }
});

const Kitchen = mongoose.model('kitchen', kitchenSchema);
module.exports = Kitchen;