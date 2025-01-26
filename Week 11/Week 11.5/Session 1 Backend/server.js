require('dotenv').config();
const app = require('./src/app');
const connect = require('./src/db/db');

connect();

app.listen(3000, ()=>{
    console.log("Server at 3000 Started");
})