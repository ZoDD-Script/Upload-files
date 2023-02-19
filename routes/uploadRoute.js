const { uploadController } = require("../controller/uploadController");
const fileupload = require("../fileUpload");
const upload = require("../multer");
const resizeFile = require("../resizeFile");

const uploadRoute = require('express').Router()

uploadRoute.post('/upload', upload.single('file'), fileupload, uploadController)

module.exports = uploadRoute