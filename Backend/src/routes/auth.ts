import jwt from "jsonwebtoken";
import { Router } from "express";
export const authRoute=Router();
import {z} from "zod";
import bcrypt from "bcrypt"
import { userModel } from "../db";
import { JWT_USER } from "../config";

authRoute.post("/up",async (req,res)=>{
    const required=z.object({
        username:z.string().min(3),
        password:z.string().min(2) 
    })
    const parseData=required.safeParse(req.body)
    if(!parseData.success){
        return res.send("Invalid Credentials")
    }
    const {username,password}=req.body

    const user=await userModel.findOne({
        username 
    })
    if (user){
        return res.send("You already signed up please login")
    }
    const hashpassword=await bcrypt.hash(password,5)
    await userModel.create({
        username:username,
        password:hashpassword
    })
    res.json({
        msg:"Congrats, Account Created successfully"
    })
})
authRoute.post("/in",async (req,res)=>{
    const required=z.object({
        username:z.string().min(3),
        password:z.string().min(2) 
    })
    const parseData=required.safeParse(req.body)
    if(!parseData.success){
        return res.send("Invalid Credentials")
    }
    const {username,password}=req.body

    const user=await userModel.findOne({
        username 
    })
    if (!user){
        return res.send("Not Found")
    }
    const compared=await bcrypt.compare(password,user.password)
    if (!compared){
        return res.send("Incorrect Password")
    }
    if(!JWT_USER){
        return res.send("Enter JWT")
    }
    const token=jwt.sign({
        id:user._id
    },JWT_USER)
    res.json({
        token:token
    })
})



