const mongoose = require('mongoose');

const forumSchema = mongoose.Schema({
    titre: String,
}
);
const model = mongoose.model("forumSchema",forumSchema);

module.exports =  model;
