const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BookSchema = new Schema({
    likes: {type:Number,default:0,min:0},
        coverImage: {type:Buffer,required:true},
        content :{type:string,required:true},
        timestamps: {type:Date},
        userId : {type:mongoose.Types.ObjectId,ref:"users"}
})

const Books  = mongoose.model("Books",BookSchema)
module.exports = Books
