const express = require('express');
const mongoose = require('mongoose');
const config = require("./config.json");
const bodyParser = require ('body-parser');
const morgan =require('morgan');
const cors = require ('cors');

const app = express()


mongoose.connect(config.datasource,{useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology: true}).then(()=>{console.log("database connected")});

app.use (bodyParser.json ())
app.use (bodyParser.json ())
app.use(morgan())
app.use (cors())


const postRoute = require("./routes/postRoute")
const commentRoute = require("./routes/commentRoute");
const themeRoute = require("./routes/themeRoute");
const userRoute = require("./routes/userRoute");
const forumRoute=require("./routes/forumRoute");
const authRoute=require("./routes/auth");

app.use(postRoute)
app.use(commentRoute);
app.use(themeRoute);
app.use(userRoute);
app.use(forumRoute);
app.use('/auth',authRoute)

app.listen(config.port, function () {
        console.log(`server running at http://localhost:`+config.port);
    });