const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req,res, next)=>{
    console.log("Middleware chala.");
    next();
})

app.get('/', (req, res)=>{ 
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

