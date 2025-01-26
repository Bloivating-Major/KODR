const mongoose = require('mongoose')

const connect = ()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connected to DB");
    }).catch(err => console.log(err))
}

module.exports = connect;