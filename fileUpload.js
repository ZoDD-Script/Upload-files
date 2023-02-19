const cloudinary = require("./cloudinary");

const fileupload = async (req, res, next) => {
  try {
    console.log('there', req.file)
    const result = await cloudinary.uploadFile(req.file.buffer, 'Example');
    console.log(result);
    req.url = result.secure_url
    next()
  } catch (error) {
    console.error('error', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

module.exports = fileupload