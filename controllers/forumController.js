let model=require("../model/forum")

module.exports={
    addForum:function(req,res){
        let newForum=new model(req.body);

        newForum.save((err,forum1)=>{
            if(err){
                console.error(err);
            }
            else{
                console.log(forum1)
                res.status(200).json({
                    msg:'Forum added',
                    forum:newForum
                })
            }
        })
    },
    getForums:function(req,res){
        model.find((err,forums)=>{
            if(err){
                console.error(err);
            }
            else{
                console.log(forums);
                res.status(200).json({
                    forums
                })

            }
        })
    },
    getForumById: function (req, res) {
        model.findById(req.params.forumId,(err, results)=>{
            if (err) {
                console.error(err)
 
            } else {
                console.log('Result By Id: ', results);
                res.status(200).send(results)

            }
        })
    },

    deleteForum: function (req, res) {
        model.findByIdAndDelete(req.params.forumId,
            
            (err, results)=>{
            if (err) {
                console.error(err)

            } else {
                console.log('Deleted Forum: ', req.body);
                res.status(200).send(req.body)

            }
        })
    },

    updateForum: function (req, res) {
        model.findByIdAndUpdate(req.params.forumId, req.body,{upsert: true}, (err, results)=>{
            if (err) {
                console.error(err)

            } else {
                console.log('Updated Forum: ', req.body);
                res.status(200).send(req.body)

            }
        })
    }
};