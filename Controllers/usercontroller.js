const userModel = require('../Models/user')
const BookModel = require('../Models/book')
const CommentModel = require('../Models/comment')

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

async function Comments(req,res){
    try {
      let details = req.body;
      let userId = req.headers.userId;
      let bookId = req.headers.bookId;
      details.userId = mongoose.Types.ObjectId(userId);
      details.bookId = mongoose.Types.ObjectId(bookId);
      let response = await CommentModel.insertMany([details]);
      console.log(result);
      res.status(200).json({
        status: "Success",
        Result: result
      })
    } catch (error) {
      res.status(400).json({
        Error : error
      })
    }
  }

module.exports = {
    Register,
    RegisterBook,
    Comments
}