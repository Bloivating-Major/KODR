require('dotenv').config();
const connect = require('./src/db/db')
const app = require('./src/app');

connect(); 

app.listen(3000, ()=>{
    console.log("Server started on port 3000");
})