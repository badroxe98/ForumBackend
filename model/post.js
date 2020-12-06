
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    user: {type : mongoose.Schema.Types.ObjectId, ref: "user"},
    theme: {type : mongoose.Schema.Types.ObjectId, ref: "theme"},
    titre: {type: String, required: true},  
    message: {type: String, required: true},
},{timestamps: true}
);

const model = mongoose.model("post",postSchema);

module.exports =  model;