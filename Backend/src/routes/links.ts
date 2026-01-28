import { Router } from "express";
export const linkRouter = Router()
import { contentModel, linkModel, userModel } from "../db";
import { middleware } from "../middleware";
import { z} from "zod"
import { Types } from "mongoose";
import { random } from "../utils";


linkRouter.post("/share", middleware, async (req, res) => {
    const required=z.object({
        share:z.string()
    })   
    const parseData=required.safeParse(req.body)
    if(!parseData.success){
        return res.send("Invalid Credentials")
    }
    const share = req.body.share;
    if (share){
        const existLink=await linkModel.findOne({
            userId:new Types.ObjectId(req.userId)
        })
        if (existLink){
            res.json({
                hash:existLink.hash
            })
            return;
        }
        const hash=random(10)
        await linkModel.create({
            userId:new Types.ObjectId(req.userId),
            hash:hash
        })
        res.json({
            hash
        })
    }else{
        await linkModel.deleteOne({
            userId:new Types.ObjectId(req.body)
        })
        res.json({
            msg:"Removed Link"
        })
    }
})


linkRouter.get("/brain/:sharelink",async (req,res)=>{
    const hash=req.params.sharelink;
    const link=await linkModel.findOne({
        hash 
    })
    if (!link){
        return res.status(411).json({
            msg:"Incorrect Link"
        })
    }
    const content=await contentModel.find({
        userId:new Types.ObjectId(link.userId)
    })
    const user=await userModel.findOne({
        _id:link.userId
    })
    if (!user){
        return res.status(411).json({
            msg:"User not found"
        })
    }
    res.json({
        username:user.username,
        content:content
    })
})