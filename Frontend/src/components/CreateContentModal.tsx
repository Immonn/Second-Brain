import { useRef, useState } from "react";
import { CrossIcon } from "../icons/Close";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";


//@ts-ignore
enum ContentType {
    YouTube="youtube",
    X="x"
}


//@ts-ignore
export function CreateContentModal({ open, onclose }) {

    const titleref=useRef<HTMLInputElement>(null)
    const linkref=useRef<HTMLInputElement>(null)

    const [type,setType]=useState(ContentType.YouTube)

    async function addContent(){
        const title=titleref.current?.value.trim();
        const link=linkref.current?.value.trim();
        

        await axios.post(`${BACKEND_URL}/content`,{
            title,
            link,
            type
        },{
            headers:{
                "token":localStorage.getItem("token")
            }
        })

        onclose()

    }
    return <div>
        {open && (
            <div
                className="h-screen w-screen fixed top-0 left-0 flex justify-center"
                onClick={onclose}
            >
                <div className="absolute inset-0 bg-slate-500 opacity-60 z-0" />
                <div className="flex flex-col justify-center w-full h-full z-10 relative">
                    <span
                        className="bg-white p-10 rounded-2xl mx-auto my-auto block"
                        onClick={e => e.stopPropagation()}
                    >
                        <span className="flex justify-end cursor-pointer" onClick={onclose}>
                            <div className="hover:bg-red-600 p-2 rounded transition duration-150"><CrossIcon /></div>
                        </span>
                        <div>
                            <Input ref={titleref}  placeholder={"Title"}></Input>
                            <Input ref={linkref} placeholder={"Link"}></Input>
                        </div>
                        <div className="flex justify-center gap-2">
                            <Button size="md" text="YouTube" variant={type===ContentType.YouTube ? "Primary" : "Secondary"} 
                            onClick={()=>{setType(ContentType.YouTube)}}/>
                            <Button size="md" text="X" variant={type===ContentType.X ? "Primary" : "Secondary"}
                            onClick={()=>{setType(ContentType.X)}}/>
                        </div>
                        <div className="flex justify-center mt-2">
                            <Button onClick={addContent} variant="Primary" text="Submit" size="md" />
                        </div>
                    </span>
                </div>
            </div>
        )}
    </div>
}