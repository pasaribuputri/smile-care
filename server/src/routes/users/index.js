import express from "express"
import {client} from "../../driver/db.js"
import bycript from "bcryptjs"

const router = express.Router();

router.get("/", async(req,res)=>{
    const result = await client.query("select * from users")
    res.status(200).json({status: "OK", message: "Data users berhasil ditampilkan",data:result.rows})
})


router.post("/add", async(req,res)=>{
    try{
        const salt = await bycript.genSalt()
        const hash = await bycript.hash(req.body.password, salt)
        await client.query(`insert into users (nama,no_hp,email,password) values ('${req.body.nama}','${req.body.no_hp}','${req.body.email}','${hash}')`)
        res.status(201).json({status: "Created", message: "Data user berhasil ditambahkan"})
    }catch(err){
        res.status(400).json(err.message)
    }
})

router.delete("/delete/:id", async (req,res)=>{
    try{
        await client.query(`delete from users where id = ${req.params.id}`)
        res.status(200).json({status: "OK", message: "Data berhasil dihapus"})
    }catch(err){
        res.status(400).json(err.message)
    }
})

router.put("/update/:id", async(req,res)=>{
    try{
        await client.query(`update users set nama = '${req.body.nama}', no_hp = '${req.body.no_hp}', email= '${req.body.email}' where id = ${req.params.id}`)
        res.status(200).json({status:"OK", message: "Data berhasil di ediit"})
    } catch (err) {
        res.status(400).json(err.message)
    }
})

export default router