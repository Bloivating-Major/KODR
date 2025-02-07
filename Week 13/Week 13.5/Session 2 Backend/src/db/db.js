const mongoose = require('mongoose');
const config = require('../config/config');

const connect = ()=>{
    mongoose.connect(config.MONGO_URL).then(()=>{
        console.log("Connected to MongoDB");
    }).catch(err => console.error(err));
}

module.exports = connect;