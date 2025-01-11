// Today we will be studying about FS.
// making folder.
// making file.
// reading file.
// reading directory.
// to store the data for file we store it in dirent.
// unlink 
// rmdir 
// rn command.

// http of node js
// http createserver

const fs = require('fs');
const fn = 'test'
const fi = "./test/testing.txt";
const data = "This is Test";

fs.readdir(fn, {withFileTypes: true,}, (err, files)=>{
    if(err) console.log(err);
    else {
        files.forEach((dirent)=>{
            dirent.isDirectory() ? console.log("Folder", dirent.name) : console.log("File", dirent.name);
        })
    }
})

