const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"..","..", '/public/images/'));
    },
    filename: function (req, file, cb) {
        crypto.randomBytes(12, (err, bytes)=>{
            if(err) return cb(err);
            const uniqueName = bytes.toString('hex') + path.extname(file.originalname);
            cb(null, uniqueName);
        })
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = upload;