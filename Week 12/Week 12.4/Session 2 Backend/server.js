require('dotenv').config();
const app = require('./src/app')
const connect = require('./src/db/db');

connect();  // Connect to MongoDB

app.listen(process.env.PORT, ()=>{
    console.log("Server started on port 3000");
})