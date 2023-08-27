import express from "express";
import { client } from "../../driver/db.js";
import bycript from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router()

router.post('/login', async(req,res)=>{
    const result = await client.query(`select * from users`)
    const promises = result.rows.map(async(user)=>{
        if(await bycript.compare(req.body.password, user.password)){
            return user;
        }
    })
    const users = await Promise.all(promises);
    const user = users.find((user)=> user!=undefined)
    if(user){
        const token = jwt.sign(user, process.env.SECRET_KEY);
        res.cookie('token', token);
        res.status(200).json({status: "OK", message: "Login Berhasil", data: {
            userLogin: user.nama
        }})
    }else{
        res.status(400).json({status: "Bad Request", message: "Password Salah"})
    }
})

router.get('/logout', (_req,res)=>{
    res.setHeader("Cache-Control", "no-store");
    res.clearCookie('token');
    res.status(200).json({ status: 'OK', message: 'Logout berhasil' })
})

export default router