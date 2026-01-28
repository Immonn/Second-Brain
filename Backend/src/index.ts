import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import { authRoute } from "./routes/auth";
import { contentRouter } from "./routes/content";
import { linkRouter } from "./routes/links";

const app=express()

app.use(express.json());
app.use("/auth",authRoute)
app.use(contentRouter)
app.use("/link",linkRouter)

async function main(){
    if (!process.env.MONGO_URL){
        throw new Error("MONGO_URL is not defined in environment variables")
    }
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000,()=>{console.log("App is running")})
}

main()
