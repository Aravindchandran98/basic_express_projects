const express = require('express');
const router = express.Router() //router level middleware

// ALL GET ROUTES
router.get('/create-profile',(req,res)=>{
    // res.send('<h1>working</h1>')
    res.render("./profile.js/createProfile")
})

// ALL POST ROUTES

// ALL PUT ROUTES

// ALL DELETE ROUTES

module.export = router;  //commonjs module for exporting and importing