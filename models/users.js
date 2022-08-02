const mongoose = require('mongoose');
var conn = require('../config/db');

var userSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    password: String,
},{
    timestamps:true
});

let users = conn.model("users",userSchema);
module.exports = users;