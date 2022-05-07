const userModel = require('../Models/user')
const BookModel = require('../Models/book')

async function Register(req,res){
    try {
        let pics = req.pics;
        let images = []
        for(let i =0;i<pics.length;i++){
             images.push(files[i].path)
        }


        let details = req.body
    details.timestamps = new Date()
    details.profileImages = [images]
    let response = await userModel.insertMany([details])
    res.status(200).json({
        status:"Sucess",
        user:response
    })
    } catch (error) {
        res.status(400).json({
            error:error
        })
    }
}

async function RegisterBook(req,res){
    try {
        let location = req.file.path
        let details = req.body
        let userId = req.headers.userId
        details.timestamps = new Date();
        details.coverImage = location
        details.userId = mongoose.Types.objectId(userId)
        let response = await BookModel.insertMany([details])
        res.status(200).json({
            status:"Success",
            user:response
        })

    } catch (error) {
        res.status(400).json({
            Error:error
        })
        
    }
}

module.exports = {
    Register,
    RegisterBook
}