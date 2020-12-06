const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, unique:true, required: true},
    password: {type: String, required: true}, 
},{timestamps: true}
);


const model = mongoose.model("user", userSchema);

module.exports = model;