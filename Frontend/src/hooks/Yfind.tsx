import axios from "axios";
import {  useEffect, useState } from "react";
import { BACKEND_URL } from "../config";



export function Yfind(){
    const [contents,setcontents]=useState([]);
    const [username,setname]=useState("")

    

    function refresh(){
        const hash=localStorage.getItem("hash")
        axios.get(`${BACKEND_URL}/link/brain/${hash}`,{
            headers:{
                token:localStorage.getItem("token")
            }
        })
            .then((response)=>{
                setname(response.data.username)
                //@ts-ignore
                const ycontent=response.data.content.filter(item => item.type=="youtube")
                setcontents(ycontent)
            })             
    }

    useEffect(()=>{
        refresh()
        let interval=setInterval(()=>{
            refresh()
        },5*1000)

        return ()=>{
            clearInterval(interval)
        }
    },[])


    return [username, contents];
}