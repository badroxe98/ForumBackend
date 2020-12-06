const mongoose = require('mongoose');

let model = require("../model/comment");

module.exports = {
    addComment: function(req, res){
        let newComment = new model(req.body);

        newComment.save((err, results) => {
            if (err) {
                console.error(err)

            } else {
                console.log('Saved: ', results);
                res.status(200).send(newComment)

            }
        })
    },
    getCommentsByPostId : function(req, res){
        model.findOne({post: req.params.postId},(err, results) =>{
            if (err) {
                console.error(err)

            } else {
                console.log('Result: ', results);
                res.status(200).send(results)
            }
        })
        
    },
    getCommentsByUserId : function(req, res){
        model.findOne({user: req.params.userId},(err, results) =>{
            if (err) {
                console.error(err)
            } else {
                console.log('Result: ', results);
                res.status(200).send(results)
            }
        })
        
    },
    getComments : function(req, res){
        model.find((err, results) =>{
            if (err) {
                console.error(err)
            } else {
                console.log('Result: ', results);
                res.status(200).send(results)
            }
        })
    },
    getCommentById : function(req, res){
        model.findById(req.params.commentId,(err, results) =>{
            if (err) {
                console.error(err)
            } else {
                console.log('Result: ', results);
                res.status(200).send(results)
            }
        })
    },
    modifyComment : function (req, res) {
        model.findByIdAndUpdate(req.params.commentId, req.body,{upsert: true}, (err, results)=>{
            if (err) {
                console.error(err)
            } else {
                console.log('Updated: ', req.body);
                res.status(200).send(req.body)
            }
        })
    },
    deleteComment : function(req, res){
        model.deleteOne({_id: req.params.commentId}, (err, results) =>  {
            if(err){
                console.error(err);
            }
            else{
                console.log('Deleted: ', results);
                res.status(200).send(results)
            }
        })
    }
}