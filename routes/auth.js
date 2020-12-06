const router=require('express').Router();
let User=require('../model/user');
const bcrypt= require('bcryptjs');
const config =require("config");
const jwt =require("jsonwebtoken");
const auth=require("../middleware/auth");


//@route Post /auth
//@desc Auth user
//@access Public
router.route('/').post((req,res)=>{
    const {email,password}=req.body;

    if(  !email || !password ){
        return res.status(400).json({msg:"Please enter the fields!"})
    }

    User.findOne({email})
    .then(user=>{
        if(!user) return res.status(400).json({msg:"User does not exist!"})

        //Validate Password
        bcrypt.compare(password, user.password)
        .then(isMatch=>{
            if(!isMatch) return res.status(400).json({msg:"Invalid credentials!"});
            jwt.sign(
                {id:user.id},
                config.get('jwtSecret'),
                {expiresIn:3600},
                (err,token)=>{
                    if(err) throw err;
                    res.json({
                        token,
                        user:{
                            id:user.id,
                            username:user.username,
                            email:user.email
                        }
            })            
        })
    })
})
})

//@route Post /auth/user
//@desc get user data
//@access Private
router.route('/user').get(auth,(req,res)=>{
    User.findById(req.user.id)
    .select("-password")
    .then(user =>res.json(user));
})

module.exports= router;