import { Types,Schema,model } from "mongoose";


const userSchema=new Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

export const userModel=model("user",userSchema)

const ContentSchema=new Schema({
    title:String,
    link:String,
    tags:[{type:Types.ObjectId,ref:"tag"}],
    type:String,
    userId:{type:Types.ObjectId,ref:'user',required:true}
})

export const contentModel=model("content",ContentSchema)


const linkSchema=new Schema({
    hash:String,
    userId:{type:Types.ObjectId,ref:"user",required:true,unique:true}
})

export const linkModel=model('links',linkSchema)

