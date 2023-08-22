import express from "express";
import { client } from "../../driver/db.js";

const route = express.Router();

route.get("/", async (_req, res) => {
    const result = await client.query("select * from dokter");
    res.send(result.rows)
})

export default route