const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    mobile_no: {
        type: String,
        unique: true
    },
    user_name: {
        type: String,
        minlength:4
    }
    
});

module.exports = mongoose.model('User', UserSchema);