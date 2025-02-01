const mongoose = require('mongoose')

const connect = ()=>{
    mongoose.connect('mongodb://0.0.0.0/youtubeBackendSeries').then(()=>{
        console.log("Connected to MongoDB");
    }).catch(err => console.error(err));
}

module.exports = connect;