// const fs = require('fs');

// fs.open('./Readme.md', (err)=>{
//     if(err) console.log(err);
//     else console.log("File opened successfully");
// });

// fs.mkdir('./temp', (err)=>{
//     if(err) console.log(err);
//     else console.log("Folder created successfully");
// })

// fs.writeFile('hey.txt',"Hey Hello kaise Ho" , (err)=>{
//     if(err) console.log(err);
//     else console.log("File created successfully");
// })

// fs.writeFile("test.js", "let name = 'Sambhav'", (err)=>{
//     if(err) console.log(err);
//     else console.log("File created successfully");
// })

// append file means you can write more inside the original file without overwriting existing contents.

// fs.appendFile("test.js", "age = 20", (err)=>{
//     if(err) console.log(err);
//     else console.log("Data appended successfully");
// })

// fs.rename('test.js', 'renamed.js' , (err)=>{
//     if(err) console.log(err);
//     else console.log("Renamed Successfully");
// })

// fs.copyFile('renamed.js', 'copy.js', (err)=>{
//     if(err) console.log(err);
//     else console.log("Copied successfully");
// })

// fs.unlink('renamed.js', (err)=>{
//     if(err) console.log(err);
//     else console.log("File deleted successfully");
// })

const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("Hello World");
})

server.listen(3000);