const http = require("http");
const app = require("./Routes/app");
const PORT = 9008;
const mongoConnection = require("./DBconnection/mongodb");

http.createServer(app).listen(PORT,()=>{
    new mongoConnection();
    console.log(`Server is Running Successfully on PORT : ${PORT}`)
})
