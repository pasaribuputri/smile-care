import express from "express"
import "dotenv/config"
import cors from "cors"
import routeDoctors from "./src/routes/doctors/index.js";
import routeServices from "./src/routes/services/index.js";
import routerLogin from "./src/routes/users/index.js";
import routerAuth from "./src/routes/auth/index.js";
import authMiddleware from "./src/routes/middleware/index.js";


const app = express();

app.use(cors({
    origin: "http://localhost:5173", methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
}))
app.use(express.json())

const router = express.Router()
app.use("/api", router)

router.use("/auth", routerAuth)

router.use("/users", routerLogin)
router.use(authMiddleware)

router.use("/doctors", routeDoctors)
router.use("/services", routeServices)

app.listen(process.env.PORT, () => console.log(`Berjalan pada port ${process.env.PORT}`))