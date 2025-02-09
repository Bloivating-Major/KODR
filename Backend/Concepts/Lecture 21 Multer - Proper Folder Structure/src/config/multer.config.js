const multer = require('multer')
const path = require('path')
const crypto = require('crypto')



// Step 1 is Disk Storage

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './public/images/')
    }, filename : (req, file, cb)=>{
        crypto.randomBytes(12, (err, buffer) => {
        const fn =  buffer.toString("hex") + path.extname(file.originalname);
        cb(null, fn);
        })
    }   
})



// Step 2 is Export Local Variable
const upload = multer({storage : storage});

module.exports = upload;