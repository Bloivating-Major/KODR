require('dotenv').config();
const app = require('./src/app');
const connect = require('./src/db/db');
const config = require('./src/config/config');


connect();  // Connect to MongoDB

app.listen(config.PORT, ()=>{
    console.log(`Server started on ${config.PORT}`);
});