const {Schema, model} = require('mongoose');
const ProfileSchema = new Schema({
    firstname : {
        type:String,
        required:true,
    },
    lastname : {
        type : String,
        required: true,
    },
    email : {
        type: String,
        required:true,
    },
    phonenumber:{
        type: Number,
        required:true,
    }
});

module.exports = model("profile", ProfileSchema);