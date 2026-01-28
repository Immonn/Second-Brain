import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import { JWT_USER } from "./config";


export function middleware(req: Request, res: Response, next: NextFunction) {
    const token: any = req.headers.token
    
    if (!JWT_USER) {
        return res.send("Provide JWT")
    }
    if (!token) {
        return res.send("Token not found")
    }
    

    const decode = jwt.verify(token, JWT_USER)

    if (typeof decode === "object" && decode !== null && "id" in decode) {
        req.userId = (decode as any).id;
        next();
    } else {
        res.send("Pls signed in again");
    }
}