const mongoose = require('mongoose');

const connect = ()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connected to Mongo DB");
    }).catch(err => console.log(err.message))
}

module.exports = connect;