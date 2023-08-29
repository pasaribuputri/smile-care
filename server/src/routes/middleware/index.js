import jwt from "jsonwebtoken";
// import { client } from "../../driver/db";

function authMiddleware(req,res,next){
    const token = req.headers.authorization?.split(" ")[1];
    if(token){
        try{
            jwt.verify(token, process.env.SECRET_KEY);
            next()
        }catch{
            res.status(401).json({status: "Unauthorized", message: "Token Salah"})
        }
    }else{
        res.status(401).json({status: "Unauthorized", message: "Token Tidak ada"})
    }
}

export default authMiddleware