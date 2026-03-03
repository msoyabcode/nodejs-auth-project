const multer = require("multer")

// to  create  name
const path = require("path")      
const crypto = require("crypto")


// diskstorage

// here the setup of folder name
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/upload')
  },
//   Here the setup of file name
  filename: function (req, file, cb) {
    crypto.randomBytes(12, function(err, name){
        const fn = name.toString("hex")+path.extname(file.originalname)
        cb(null, fn)
    })
  }
})



// export upload variable
const upload = multer({ storage: storage })

module.exports = upload;
