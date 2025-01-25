const app = require('./src/app');
const connect = require('./src/db/db')

connect();
app.listen(5000, ()=>{
    console.log("Server Started");
})