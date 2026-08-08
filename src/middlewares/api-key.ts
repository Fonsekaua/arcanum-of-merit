import { RequestHandler } from "express";
import dotenv from 'dotenv'
dotenv.config();
const ApiKeyMiddleware:RequestHandler = (req,res,next) => {
    const apiKey = req.headers['x-api-key'];
    const KEY = process.env.API_KEY
    if(!apiKey || apiKey !== KEY){
        return res.status(401).json({
            success: false,
            message: "API Key inválida."
        });
    }

    next();
}

export default ApiKeyMiddleware