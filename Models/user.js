const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    "firstName" : {type: String, required: true},
    "lastName" : {type: String, required: true},
    "age" : {type: Number,required:true,min:1,max:150},
    "email" : {type: String,unique:true,required:true},
    "profileImages" : [{type: Buffer,required:true}],
    "timeStamps" : {type: Date}
})

const User = mongoose.model("user", UserSchema);
module.exports = User;