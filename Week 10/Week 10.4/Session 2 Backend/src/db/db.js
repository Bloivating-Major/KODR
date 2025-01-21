const mongoose = require('mongoose');

const connect = mongoose.connect('mongodb://0.0.0.0/KODR').then(()=>{
    console.log("Connected to MongoDB");
}).catch(err => console.log("Connection Failed"));


const driverSchema = new mongoose.Schema({
    name : {
        type  : String
    },
    mobileNumber : {
        type : String
    },
    password : {
        type : String
    }
})

const driverModal = mongoose.model("driver", driverSchema);

module.exports = connect;
module.exports = driverModal;