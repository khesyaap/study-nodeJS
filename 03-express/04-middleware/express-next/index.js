// require dotenv
require ('dotenv').config();

// import express
const express = require('express');
// import body-parser
const bodyParser = require('body-parser');
// import module headers
const headers = require('./middlewares/headers');
// import module body 
const body = require('./middlewares/body');

// instantiate express
const app = express();

// Middleware body-parser json

// app.use(bodyParser.json(), (req, res, next) => {
//   console.log(req.bodyParser)
//   //ats or bwh
// }
//);

//   app.use(bodyParser.json(), (req, res, next) => {
//   console.log("Method: ", req.method);
//   console.log("URL Path: ", req.path);
//   console.log("Headers: ", req.headers);
// }
//);


// // Midlleware pertama yakni body praser 
// // Middleware kedua menampilkan headers dari request
// app.use(bodyParser.json(), headers);

app.use(bodyParser.json(), headers);

// // middleware hanya berlaku pada method post di index /
// // tampilkan sisi  dari request body menggunakan middleware body
// // tampilakn data request body ke clieng
app.post(
  "/", 
  bodyParser.urlencoded({extended: true}), 
  body, 
  (req, res, next) => {
    //kirim data req.body ke client menggunakan req.send
    res.send(req.body);
  }
);

// // middlewae untuk selain method POST  di index/
app.use("/", (req, res, next) => {
  res.send(req.headers);
});


// port
app.listen(process.env.PORT, () => {
  console.log(`Server berjalan di port ${process.env.PORT}`);
});