const express = require('express');
const exphbs = require('express-handlebars');
const {connect} = require('mongoose');
let app = express();//apllication level

// load or import profile route
const profile = require('./Routes/profile');

// CONNECT DATABASE
let RemoteDbUrl = "mongodb+srv://aravind:ramukdnivara@cluster0.qmnqt.mongodb.net/UberEats?retryWrites=true&w=majority"
let LocalDbUrl = "mongodb:localhost:27017/UberEats"

connect(LocalDbUrl,{ useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (err) throw err;
        console.log("DATABASE CONNECTED...");
    }
    );

//SET TEMPLATE ENGINE
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get('/',(req,res)=>{
    res.render("home");
})

//ALWAYS ROUTER LEVEL MIDDLEWARE BEFORE LISTENER
app.use("/profile", profile);

let port = 2000;
app.listen(port,err => {
    if(err) throw err;
    console.log(`Server is successfully running in ${port}`);
})