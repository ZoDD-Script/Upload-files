const sharp = require('sharp')

const resizeFile = (async (req, res, next) => {
  if (!req.file) return next();

  console.log(req.file)

  req.file.filename = `user-${res.locals.jwt._id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`./uploads${req.file.filename}`);
  console.log('here')
  next();
});

module.exports = resizeFile