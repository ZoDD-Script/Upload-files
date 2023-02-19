const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const uploadRouter = require('./routes/uploadRoute') 

const app = express()

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())

app.use((req, res, next) => {
  console.log(req.body);
  console.log(req.file);
  next();
});

app.use('/api/v1', uploadRouter)

module.exports = app;
