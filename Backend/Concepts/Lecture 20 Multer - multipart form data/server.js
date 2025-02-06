require('dotenv').config();
const app = require('./src/app');
const connect = require('./src/db/db');


connect();

app.listen(process.env.PORT, ()=>{
    console.log(`Server started on ${process.env.PORT}`);
})