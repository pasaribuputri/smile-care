import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const middleware = (req,res,next) => {
    const token = req.cookies.jwt
    if(token){
        try{
            req.userLogin = jwt.verify(token, process.env.SECRET_KEY);
            if(req.method === "GET" || req.)
        }
    }
}