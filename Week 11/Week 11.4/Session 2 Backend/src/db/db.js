const mongoose = require('mongoose');

const connect = ()=>{
    console.log(process.env.MONGO_URL);
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connected to MongoDB");
    }).catch(err => console.log(err))
}

module.exports = connect;