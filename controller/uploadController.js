const { uploadService } = require("../services/uploadService");

const uploadController = async (req, res, next) => {
  const data = await uploadService(req, res)

  console.log("data", data)
  if (!data?.success) return res.status(400).json(data)

  return res.status(200).json(data)
}

module.exports = { uploadController }