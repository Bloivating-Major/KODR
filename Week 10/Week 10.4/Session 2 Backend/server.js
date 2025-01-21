const app= require('./src/app');
const connectToDb = require('./src/db/db')

connectToDb();

app.listen(3000, ()=>{
    console.log("Server is Running on Port 3000");
});