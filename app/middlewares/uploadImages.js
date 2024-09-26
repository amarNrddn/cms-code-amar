const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, 'public/upload/thumbnails')
   },
   filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname))
   }
})

const fileFilter = (req, file, cb) => {
   if (
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/webp'
   ) {
      cb(null, true);
   } else {
      cb(
         { message: "unsupported file format" },
         false
      )
   }
}

const uploadMidleware = multer({
   storage,
   limits: {
      fileSize: 5 * 1024 * 1024,
   },
   fileFilter: fileFilter
})

module.exports = uploadMidleware