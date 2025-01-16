# Lecture 2 Node.js and npm with File System Operations

- Node.js Basics
    - It is not a programming language
    - It is also not a technology
    - It is also not a framework
    - It is not a library
    - It is JavaScript Runtime Environment
    - With javascript you cannot build Backend because JavaScript does'nt have those functionalities.
    - So there was a developer known as Ryan Dahl thought to write backend using JavaScript
    - What he did is took v8 engine of Google and then modified it the way that you can write backend using it.
    - So v8 engine was written in c++ so what he did is wrapped js outside v8 engine and now you can write backend using JavaScript.
    - runtime environment means until the node is running till that time only node will run.
- Introduction to Node.js
    - to start working with nodejs you have to go inside your folder and then first initialize your package.json file
    - you can then write a command npm init -y why -y because then you won't be asked many questions it will direactly create a package.json file
- Installating Node.js and npm
    - You can visit nodejs website to download node.js 
    - From there you can download node js
    - what is npm it is package manager where people can upload their own packages and then you can download those packages
- Working with modules.
- File System Operations
    - What we have to learn in FS is 
        - write file
            - it means creation of file
            ```javascript
                fs.writeFile("test.js", "let name = 'Sambhav'", (err)=>{
                if(err) console.log(err);
                else console.log("File created successfully");
                })
            ```
        - append file
             ```javascript
                fs.appendFile("test.js", "age = 20", (err)=>{
                if(err) console.log(err);
                else console.log("Data appended successfully");
                })
            ```
        - copy file - used to copy a file
            ```javascript
               fs.copyFile('renamed.js', 'copy.js', (err)=>{
                if(err) console.log(err);
                else console.log("Copied successfully");
                })
            ```
        - rename file - used to rename a file
             ```javascript
                fs.rename('test.js', 'renamed.js' , (err)=>{
                if(err) console.log(err);
                else console.log("Renamed Successfully");
                })
            ```
        - unlink file - used to delete file
             ```javascript
                fs.unlink('renamed.js', (err)=>{
                if(err) console.log(err);
                else console.log("File deleted successfully");
                })
            ```

- Understanding HTTP module