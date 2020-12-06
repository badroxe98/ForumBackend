let model = require("../model/user");
const bcrypt= require('bcryptjs');
const config =require("config");
const jwt =require("jsonwebtoken");
const auth =require("../middleware/auth");


module.exports = {
    addUser : function (req, res) {
       
        const {username,lastname,firstname,email,password}=req.body;

    if( !username|| !lastname || !firstname || !email || !password  ){
        return res.status(400).json({msg:"Please enter the fields!"})
    }

    model.findOne({email})
    .then(user=>{
        if(user) return res.status(400).json({msg:"User already exists !"})
    })

    const newUser=new model({
        username,
        lastname,
        firstname,
        email,
        password,
    });

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err2,hash)=>{
            if(err2)throw err2;
            newUser.password=hash;
            newUser.save()
            .then(user=>{
                jwt.sign(
                    {id:user.id},
                    config.get('jwtSecret'),
                    {expiresIn:3600},
                    (err1,token)=>{
                        if(err1) throw err1;
                        res.json({
                            token,
                            user:{
                                id:user.id,
                                username:user.username,
                                email:user.email
                            }
                        })
                    }
                )
            })
            .catch(err3=>res.status(400).json('Error :'+err3));
        })
    })
    },
    getUsers: function (req, res) {
        model.find((err, results)=>{
            if (err) {
                console.error(err)
            } else {
                console.log('Result: ', results);
                res.status(200).send(results)
            }
        })
    },
    getUserById: function (req, res) {
        model.findById(req.params.userId,(err, results)=>{
            if (err) {
                console.error(err)
            } else {
                console.log('Result By Id: ', results)
                res.status(200).send(results)
            }
        })
    },
    updateUser: function (req, res) {
        model.findByIdAndUpdate(req.params.userId,(err, results)=>{
            if (err) {
                console.error(err)
            } else {
                console.log('Deleted: ', results);
                res.status(200).send(results)
            }
        })
    },
    deleteUser: function (req, res) {
        model.findByIdAndDelete(req.params.userId,(err, results)=>{
            if (err) {
                console.error(err)
            } else {
                console.log('Deleted: ', results);
                res.status(200).send(results)
            }
        })
    },
}