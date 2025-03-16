const mongoose = require('mongoose');


const connect = ()=>{
    mongoose.connect('mongodb://0.0.0.0/CodeReview').then(()=>{
        console.log("Connected to MongoDB");
    }).catch(err => console.log(err))
}

module.exports = connect;