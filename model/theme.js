
const mongoose = require('mongoose');

const themeSchema = mongoose.Schema({
    titre: {type: String, required: true},
    description: {type: String, required: true},
    moderator:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:false},
    totalViews:{type:Number,required:true},
    totalPosts:{type:Number,required:true}
}
);
const model = mongoose.model("theme",themeSchema);

module.exports =  model;