const express = require("express");
const bodyParser = require("body-parser");
const { route, use } = require(".");
const { urlencoded, json } = require("express");

const router = express.Router();

const users = [
 {
   id: 1,
   name: "John Doe",
   email: "John@Doe.com",
 },
 {
   id: 2,
   name: "Jane Doe",
   email: "Jane@Doe.com",
 },
];

//  tambahkan method GET untuk menampilkan semua data user
router.get("/user", (req,res,next) => {
    res.status(200).json({
        message: "Tampilkan sama user",
        users,
    })
});

//  Tambahkan method GET `/user/:id` untuk menampilkan data user berdasarkan ID
router.get("/user/:id", (req,res,next) => {
    const userID =req.params.id;
    const user = users.find((user) => user.id === parseInt(userId));

    if(!user) {
        res.status(404).json({
            message: `User dengan id: ${userID} tidak ditemukan`
        });
    }else{
        res.status(200).json(user);
    }
});


//  Tambahkan method POST untuk menambahkan data user
router.post("/user", bodyParser,urlencoded({extended:true}), (req,res,
    next) => {
        const{name,email} = req.body;
        // const name = req.body.name;
        // const email = req.body.email;

        // dapatkan user terakhir dari array users
        const lastUser = users[user.length - 1];
        //dapatkan  id terakhir
        const id = lastUser.id + 1;
        users.push({id,name,email});
        res.status(200).json({
            message : `User dengan id: ${id} name: ${name} email: ${email} berhasil ditambahkan `,
        });
});
//  Tambahkan method DELETE `/user/:id` untuk menghapus data user
router.delete("/user/:id", (req,res,next) =>{
    const{ id } = req.params;

    // cari user dengan id yang sama
    const user = user.find((user) => user.id == parseInt(id));

    // jika tidak ditemukan, maka akan kita tampilkan pada error
    if (!user) {
        res.status(404).json({
            message: `User dengan id: ${id} tidak ditemukan`,
        });
    }

    // jika ditemukan, maka hapus user tsb
    //  kita cari index dari user yang kita temukan
    const index = users.indexOf(user);

    users.splice(index,1);

    //  setelah menghapus user, tampilkan pesan sukses hapus user
    res.status(200).json({
        message: `User dengan id: ${id} berhasil dihapus`
    });

});

module.export = router;