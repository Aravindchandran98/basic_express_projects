// const mongoose = require("mongoose");
// console.log(mongoose);
// const Schema = new Schema;
//const schema = mongoose.Schema;
const { Schema , Model } = require("mongoose");
const UserSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        company:{
            type: String,
            required: true,
        },
        salary:{
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

// const foodSchema = new Schema(
//     {
//       foodName: {
//           type: String,
//           required: true,
//       },
//       foodCategory: {
//           type: String,
//           required: true,
//       },
//       foodQuantity: {
//           type: Number,
//           required: true,
//       },
//       price: {
//           type: Number,
//           required: true,
//       }
//     },
//     { 
//       timestamps: true 
//     }
// );

// module.exports = Model("food",foodSchema);
module.exports = Model("user",UserSchema);