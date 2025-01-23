const { log } = require('console');
const express = require('express');
const fs = require('fs');

const app = express();

// set view engine
app.set('view engine', 'ejs');
// set view path
app.set('views', './src/views');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/' , (req, res)=>{
    fs.readdir('./src/files', (err, files)=>{
        res.render('index', {files : files})
    })
})

app.get('/file/:filename' , (req, res)=>{
    fs.readFile(`./src/files/${req.params.filename}`, "utf-8", (err, filedata)=>{
        res.render("show", {filename : req.params.filename, filedata : filedata})
    })
})

app.get('/edit/:filename' , (req, res)=>{
    res.render('edit' , {filename : req.params.filename});
})

app.post('/create' , (req, res)=>{
    fs.writeFile(`./src/files/${req.body.title.split(' ').join('')}.txt` , req.body.details, (err)=>{
        res.redirect("/");
    } )
})

app.post('/edit' , (req, res)=>{
    console.log(req.body);
    fs.rename(`./src/files/${req.body.previous}`,`./src/files/${req.body.new}` , (err)=>{
        res.redirect('/');
    } )
})

module.exports = app;