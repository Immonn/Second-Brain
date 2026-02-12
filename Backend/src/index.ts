import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import mongoose from "mongoose";
import { authRoute } from "./routes/auth";
import { contentRouter } from "./routes/content";
import { linkRouter } from "./routes/links";
import cors from "cors";

const app=express()


app.use(express.json());
app.use(cors({
  origin: "https://second-brain-alpha-ashen.vercel.app",
  credentials: true,
}));
app.use("/auth", authRoute);
app.use("/content", contentRouter);
app.use("/link", linkRouter);


const frontendBuildPath = path.join(__dirname, "../../Frontend/dist");
app.use(express.static(frontendBuildPath));


app.get(/^\/(?!api|auth|content|link).*/, (req, res) => {
  res.sendFile(path.join(frontendBuildPath, "index.html"));
});

async function main(){
    if (!process.env.MONGO_URL){
        throw new Error("MONGO_URL is not defined in environment variables")
    }
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000,()=>{console.log("App is running")})
}

main()
