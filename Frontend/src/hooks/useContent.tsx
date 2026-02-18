import axios from "axios";
import {  useEffect, useState } from "react";
import { BACKEND_URL } from "../config";


export function useContent(){
    const [contents,setcontents]=useState([]);

    function refresh(){
        axios.get(`${BACKEND_URL}/content`,{
            headers:{
                token:localStorage.getItem("token")
            }
        })
            .then((response)=>{
                setcontents(response.data.content)
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


    return { contents, refresh };
}