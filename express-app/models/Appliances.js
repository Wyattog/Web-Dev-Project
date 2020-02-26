const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applianceSchema = new Schema({
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

const Appliances = mongoose.model('appliances', applianceSchema, 'Appliances');
module.exports = Appliances;