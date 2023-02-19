const Upload = require("../model/uploadModel")

const uploadService = async (req, res) => {
  if(!req.file) {
    return {
      success: false,
      message: 'No file uploaded'
    }
  }

  const {name} = req.body

  if(!name) {
    return {
      success: false,
      message: 'Please enter a name for your file'
    }
  }

  const fileExist = await Upload.findOne({name})

  if(fileExist) {
    return {
      success: false,
      message: 'A file with this name already exist please enter another name'
    }
  }

  const newUpload = await Upload.create({
    name: name,
    file: req.url
  })

  return {
    success: true,
    message: 'File upload successful',
    data: newUpload
  }

}

module.exports = {uploadService}