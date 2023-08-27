import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import routeDoctors from "./src/routes/doctors/index.js";
import routeServices from "./src/routes/services/index.js";
import routerLogin from "./src/routes/users/index.js";
import routerAuth from "./src/routes/auth/index.js";
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173" }))

const router = express.Router()
app.use("/api", router)

router.use("/auth", routerAuth)
router.use("/doctors", routeDoctors)
router.use("/services", routeServices)
router.use("/users", routerLogin)

app.listen(process.env.PORT, () => console.log(`Berjalan pada port ${process.env.PORT}`))