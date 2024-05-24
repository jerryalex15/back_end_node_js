const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    imageUrl: {type: String , required: true},
    title: { type: String, required:true},
    description: { type: String, required:true},
    userId: {type: String, required:false},
    price: {type: Number , required:true},
});

module.exports = mongoose.model('Things' , thingSchema);