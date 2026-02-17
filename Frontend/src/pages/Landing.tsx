import { useNavigate } from "react-router-dom";
import { Logo } from "../icons/Logo";
import image from "../assets/image.png";
import { Button } from "../components/Button";
import how from "../assets/how.png"

export function Landing() {
    const navigate = useNavigate()
    return <>
        <div className="bg-[#1A233A] m-0 ">
            <div className="flex justify-between">
                <div className="flex items-center gap-2 p-4 mt-0">
                    <div className="text-blue-700"><Logo /></div>
                    <div className="text-white text-4xl font-bold">Brainly</div>
                </div>
                <div className="text-white flex items-center gap-8 mr-10 text-xl">
                    <span onClick={() => navigate("/signup")} className="cursor-pointer hover:text-gray-400 transition duration-150">Sign Up</span>
                    <span onClick={() => navigate("/signin")} className="cursor-pointer hover:text-gray-400 transition duration-150">Sign In</span>
                </div>
            </div>
        </div>  
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                    <div className="max-w-xl mt-8 font-bold text-center lg:text-left">
                        <p className="text-4xl">Brainly : Your hub for Links & Knowledge</p>
                        <p className="text-xl font-light mt-2">Store. Share. Learn. Connect</p>
                        <div className="mt-3">
                            <Button size="lg" onClick={()=>navigate("/signup")} variant="Primary" text="Start Sharing Now" />
                        </div>
                    </div>
                    <div className="w-full max-w-140">
                        <img className="w-full h-auto" src={image} alt="Description" />
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <img className="w-full h-auto max-w-200" src={how} />
                </div>
            </div>
        </div>
        </>
}