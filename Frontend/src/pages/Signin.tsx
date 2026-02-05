import axios from "axios";
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin(){
    const usernameRef=useRef<HTMLInputElement>(null);
    const passwordRef=useRef<HTMLInputElement>(null);

    const navigate=useNavigate();

    async function signin(){
        const username=usernameRef.current?.value;
        const password=passwordRef.current?.value;
        const response=await axios.post(`${BACKEND_URL}/auth/in`,{
            username,
            password
        })

        const jwt=response.data.token;
        localStorage.setItem("token",jwt)
        navigate("/dashboard")

    }
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-50 p-15">
            <div className="font-bold text-3xl flex justify-center mb-2">Sign In</div>
            <Input ref={usernameRef}  placeholder="Enter Username"></Input>
            <Input ref={passwordRef}  placeholder="Enter Password"></Input>
            <div className="flex justify-center ">
                <Button onClick={signin}  variant="Primary" fullWidth={true} text="Sign In" size="md"/>
            </div>
        </div>
    </div>
}