const cloudinary = require('./cloudinary');

const fileUpload = async (req, res, next) => {
  try {
    console.log('5')

    const result = await cloudinary.uploadFile(req.file.path, 'my-folder');
    // console.log(result);
    req.url = result.secure_url
    next()
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

module.exports = fileUpload