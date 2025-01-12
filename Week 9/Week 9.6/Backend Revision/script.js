// const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.end("Hello World");
// })

// server.listen(3000);
// ➖➖➖➖➖➖➖ This is how we create server.

// const http = require('http');

// const server = http.createServer((req, res)=>{
//     if(req.url == "/about") res.end("Welcome to about page");
//     if(req.url == "/profile") res.end("Welcome to profile page");
//     if(req.url == "/") res.end("The Home Page");
// })

// server.listen(3000);
// ➖➖➖➖➖➖➖ This is how we are performing routing.

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.get('/about', (req, res) => {
//     res.send('Welcome to About Page');
// });

// app.get('/profile', (req, res) => {
//     res.send('Welcome to Profile Page');
// });

// app.listen(3000); // express uses http behind the scene.
// ➖➖➖➖➖➖➖ Routing using express

const express = require('express');
const app = express();
app.set("view engine", "ejs");

app.use((req, res, next)=>{
    console.log("This is MiddleWare");
    const a = 2, b = 3;
    
    res.send("This is Middleware");

})

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.send('Welcome to About Page');
});

app.get('/profile', (req, res) => {
    res.send('Welcome to Profile Page');
});

app.listen(3000); // express uses http behind the scene.