const mongoose = require('mongoose')

const connect = ()=> {
    mongoose.connect("mongodb://0.0.0.0/kodr2").then(()=>{
        console.log("Connected to MongoDB");
    }).catch(err => {
        console.log(err);
    })
}

module.exports = connect;