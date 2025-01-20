const express = require('express'); // basically you get all the functions written inside express function in the variable
const app = express();

app.use((req,res, next)=>{
    console.log("Middleware chala.");
    next();
})

// app.get("/", requestHandler); request handler is always a call back function.
app.get('/', (req, res)=>{ // here you are creating routes
    res.send('Hello World This is Sambhav');
})

app.get("/profile", (req, res, next) =>{
    return next(new Error("Not Implemented"));
})

app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.status(500).send("Something went wrong");
});

app.listen(3000); // now creating a port

