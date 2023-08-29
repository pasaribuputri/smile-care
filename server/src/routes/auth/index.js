import express from "express";
import { client } from "../../driver/db.js";
import bycript from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config"
import authMiddleware from "../middleware/index.js";

const router = express.Router()

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await client.query(`select * from users where email = $1`, [email])
        if (result.rows.length > 0) {
            const user = result.rows[0]
            if (await bycript.compare(password, user.password)) {
                const token = jwt.sign(user, process.env.SECRET_KEY);
                res.status(200).json({
                    status: "OK", message: "Login Berhasil", data: {
                        userLogin: user,
                        token: token
                    }
                })
            } else {
                res.status(401).json({ status: "Bad Request", message: "Kata sandi salah" })
            }
        } else {
            res.status(401).json({ status: "Bad Request", message: "Pengguna tidak ditemukan" })
        }
    } catch (err) {
        console.error("Error during login:", err)
        res.status(500).json({ status: "Internal Server Error", message: "Terjadi kesalahan dalam proses login" });
    }
})

router.use(authMiddleware)

router.get('/logout', (_req, res) => {
    res.setHeader("Cache-Control", "no-store");
    res.status(200).json({ status: 'OK', message: 'Logout berhasil' })
})

export default router