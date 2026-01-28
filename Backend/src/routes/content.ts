import { Router } from "express";
import { contentModel } from "../db";
import { middleware } from "../middleware";
import { z } from "zod"
import { Types } from "mongoose";

export const contentRouter = Router()

contentRouter.post("/content", middleware, async (req, res) => {
    const required = z.object({
        link: z.string(),
        type: z.string(),
        title: z.string()
    })
    const parseData = required.safeParse(req.body)

    if (!parseData.success) {
        return res.send("Invalid Credentials")
    }

    const { link, title, type } = req.body
    
    await contentModel.create({
        link,
        type,
        title,
        tags: [],
        userId: new Types.ObjectId(req.userId!)
    })

    res.json({
        msg: "Content Added"
    })
})

contentRouter.get("/content",middleware,async (req,res)=>{
    const userId=new Types.ObjectId(req.userId!)
    const content=await contentModel.find({
        userId:userId
    }).populate("userId","username")
    res.json({
        content
    })
})

contentRouter.delete("/content",middleware,async (req,res)=>{
    const contentId=req.body.contentId;
    await contentModel.deleteMany({
        _id:contentId,
        userId:new Types.ObjectId(req.userId!) 
    })
    res.json({
        msg:"Successfully Deleted"
    })
})
