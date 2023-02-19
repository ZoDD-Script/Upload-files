const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadFile = (path, folder) => {
  console.log('3')

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      path,
      { folder: folder },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
    console.log('4')

  });
};

module.exports = { uploadFile };

