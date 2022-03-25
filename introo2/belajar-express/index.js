// import express from 'express';
const express = require('express');

// instantiate express
const app = express();

//routing index: / menggunakan method GET
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// menentukan port dari server
app.listen(3000,() => {
console.log('Server berjalan diport 3000');
});