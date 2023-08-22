import { client } from "../../driver/db.js";
import express from "express";

const route = express.Router()

route.get("/", async(req,res)=>{
    try{
        const result = await client.query("select * from services")
        res.status(200).json({status: "OK", message: "Data berhasil ditampilkan", data: result.rows})
    }catch(err){
        res.send(err)
    }
})

export default route