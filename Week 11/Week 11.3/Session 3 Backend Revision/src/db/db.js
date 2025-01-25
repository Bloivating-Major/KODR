const mongoose = require('mongoose');

const connect = ()=> {
    mongoose.connect('mongodb://0.0.0.0/kodr2').then(()=>{
        console.log("Database to Mongodb connected");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = connect;