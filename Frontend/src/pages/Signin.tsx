import axios from "axios";
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { Logo } from "../icons/Logo";

export function Signin(){
    const usernameRef=useRef<HTMLInputElement>(null);
    const passwordRef=useRef<HTMLInputElement>(null);

    const navigate=useNavigate();

    async function signin(){
        const username = usernameRef.current?.value?.trim();
        const password = passwordRef.current?.value?.trim();
        const response = await axios.post(`${BACKEND_URL}/auth/in`, {
            username,
            password
        });
        const jwt = response.data.token;
        if (!jwt){
            return alert("Invalid Credential")
        }
        localStorage.setItem("token", jwt);
        navigate("/dashboard");
    }
    return <>
    <div className="bg-[#1A233A] m-0 ">
            <div className="flex justify-between">
                <div className="flex items-center gap-2 p-4 mt-0">
                    <div className="text-blue-700"><Logo /></div>
                    <div className="text-white text-4xl font-bold">Brainly</div>
                </div>
                <div className="text-white flex items-center gap-8 mr-10 text-xl">
                    <span onClick={() => navigate("/")} className="cursor-pointer hover:text-gray-400 transition duration-150">Home</span>
                    <span onClick={() => navigate("/signup")} className="cursor-pointer hover:text-gray-400 transition duration-150">Sign Up</span>
                </div>
            </div>
        </div>  
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-50 p-15">
            <div className="font-bold text-3xl flex justify-center mb-2">Sign In</div>
            <Input ref={usernameRef}  placeholder="Enter Username"></Input>
            <Input ref={passwordRef}  placeholder="Enter Password"></Input>
            <div className="flex justify-center ">
                <Button onClick={signin}  variant="Primary" fullWidth={true} text="Sign In" size="md"/>
            </div>
        </div>
    </div>
    </>
}