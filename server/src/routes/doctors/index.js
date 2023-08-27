import express from "express";
import { client } from "../../driver/db.js";

const route = express.Router();

route.get("/", async (_req, res) => {
    const result = await client.query("select * from dokter");
    res.send(result.rows)
})

route.get("/:id_dokter", async (req, res) => {
    try {
        const result = await client.query(`SELECT * FROM dokter WHERE id_dokter = ${req.params.id_dokter}`);
        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching doctor data:', error);
        res.status(500).send('Internal Server Error');
    }
});



export default route