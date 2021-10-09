const mongoose = require('mongoose');
const Things = require('./things');

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique:true},
    password: {type: String, required:true},
    products: {type: [String] , required:false}
});

module.exports = mongoose.model('User',UserSchema);
