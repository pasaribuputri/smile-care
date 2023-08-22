import express from "express"
import dotenv from "dotenv"
import routeDoctors from "./src/routes/doctors/index.js";
import routeServices from "./src/routes/services/index.js";
import routerLogin from "./src/routes/users/index.js";
import routerAuth from "./src/routes/auth/index.js";
dotenv.config();

const app = express();
app.use(express.json())
app.use("/auth", routerAuth)
app.use("/doctors", routeDoctors)
app.use("/services", routeServices)
app.use("/users", routerLogin)

app.listen(process.env.PORT, () => console.log(`Berjalan pada port ${process.env.PORT}`))