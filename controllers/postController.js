const mongoose = require('mongoose');

let model = require("../model/post");

module.exports = {
    addPost : function (req, res) {
       
        let newPost = new model(req.body);

        newPost.save((err, results) => {
            if (err) {
                console.error(err)
 
            } else {
                console.log('Saved: ', results);
                res.status(200).send(newPost)

            }
        })
    },
    getPosts: function (req, res) {
         model.find((err, results) =>{
            if (err) {
                console.error(err)

            } else {
                console.log('Result: ', results);
                res.status(200).send(results)

            }
        })
    },
    getPostById: function (req, res) {
        model.findById(req.params.postId,(err, results) =>{
            if (err) {
                console.error(err)

            } else {
                console.log('Result: ', results);
                res.status(200).send(results)

            }
        })
    },

    getPostByUserId : function (req,res){
        model.findOne({user: req.params.userId},(err, results) =>{
            if (err) {
                console.error(err)
    
            } else {
                console.log('Result: ', results);
                res.status(200).send(results)
  
            }
        })
    },
    getPostByThemeId : function (req,res){
        model.findOne({theme:req.params.themeId},(err, results) =>{
            if (err) {
                console.error(err)

            } else {
                console.log('Result: ', results);
                res.status(200).send(results)

            }
        })
    },

    deletePost: function (req, res) {
        model.deleteOne({_id: req.params.postId},(err, results)=>{
            if (err) {
                console.error(err)

            } else {
                console.log('Deleted: ', results);
                res.status(200).send(results)

            }
        })
    },
    modifyPost: function (req, res) {
        model.findByIdAndUpdate(req.params.postId, req.body,{upsert: true}, (err, results)=>{
            if (err) {
                console.error(err)

            } else {
                console.log('Updated: ', req.body);
                res.status(200).send(req.body)

            }
        })
    }
}
