import axios from "axios";
import {  useEffect, useState } from "react";
import { BACKEND_URL } from "../config";



export function useFind(){
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
                setcontents(response.data.content)
                console.log("Username from API:", response.data.username);
            })             
    }

    useEffect(()=>{
        refresh()
        let interval=setInterval(()=>{
            refresh()
        },10*1000)

        return ()=>{
            clearInterval(interval)
        }
    },[])


    return [username, contents];
}