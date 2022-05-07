const express = require('express')
const app = express()
const userController = require('../Controllers/usercontroller')
app.use(express.json())

const multer = require("multer");

const distStorage = multer.diskStorage({
    destination: function(req, file, cb){
            cb(null, `${__dirname}/Images`)
    },
    filename: function(req,file,cb){
        let ext = file.mimetype.split("/")[1];
        cb(null,`admin-${file.fieldname}-${Date.now()}.${ext}`);
    }
})

const upload = multer({
    storage: distStorage
})

app.post('/users',upload.array("proPic",5),userController.Register)
app.post('/books',upload.single('cov_img'),userController.RegisterBook)
app.post("/comments",userController.Comments);
module.exports = app
