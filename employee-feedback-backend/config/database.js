const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

exports.connect = () =>{
    //Connecting database
    mongoose
        .connect(MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(()=>{
            console.log("Successfully connected to database");
        })
        .catch(()=>{
            console.log("Failed to connect to database");
            console.log(error);
            process.exit(1);
        })
}