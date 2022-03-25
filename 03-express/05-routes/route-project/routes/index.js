const express = require("express");
const bodyParser = require("body-parser");
const { Router } = require("express");

const router = express.Router();

//  GET / tampilkan pesan "Ini adalah route index method get"
router.get("/", (req, res, next) => {
    res.send("Ini adalah route index method GET");
});

// POST / tampilkan data yang dikirimkan melalui body
router.post("/", bodyParser.urlencoded({extended: true}),
(req,res,next) => {
    res.json(req.body);
});

// DELETE /: id tampilkan pesan "Data dengan id :id telah dihapus"
router.delete("/:id", (req, res, next) => {
    res.send(`Data ingin id ${req.params.id} telah dihapus`)
})


//  DELETE / tampilkan pesan " I D  harus ada"
router.delete("/", (req, res, next) => {
    res.status(400).send("ID harus ada");
});

// DELETE /:name/:email "Ini adalah route index method GET"
router.delete("/:name/:email", (req, res, next) => {
    res.send(`Data ${req.params.name} dan ${req.params.email} telah dihapus`)
})

module.exports = router;