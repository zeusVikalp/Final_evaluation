
const mongoose = require('mongoose');

class Mongo {

    constructor() {
        this.createMongoConnection();
    }

    createMongoConnection() {
        mongoose.connect(`mongodb+srv://PatreonDatabase:VJrSqiPqFWm6NfZn@patreondb.vfhzr.mongodb.net/Patreon_Database?retryWrites=true&w=majority`)
        // jTp5kt3MPhlhgC7b

        mongoose.connection.once('open', () => {
            console.log("MongoDB is connected");
        })
        mongoose.connection.on('error', () => {
            console.log("Error occured in mongoDB connection");
        })
    }
}

module.exports = Mongo;








