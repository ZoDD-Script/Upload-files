const mongoose = require('mongoose')

const uploadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide the name of the file you are uploading']
  },
  file: {
    type: String,
    required: [true, 'Please provide a file for this upload']
  }
}, {
  timeStamp: true
})

const Upload = mongoose.model('Upload', uploadSchema)

module.exports = Upload