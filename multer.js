const multer = require('multer');
const path = require('path');

// set up Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('1')
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, '-') +
        path.extname(file.originalname)
    );
    console.log('2')

  },
});

const upload = multer({ storage: storage });

module.exports = upload;
