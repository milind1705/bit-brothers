const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true
    },
    username:{
        type: String,
        required: true,
        trim:true
    },
    password:{
        type: String,
        required: true,
        trim:true
    },
});

module.exports = mongoose.model("User", userSchema);