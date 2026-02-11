import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/Twitter";
import { Yotube } from "../icons/Youtube";
import { SidebarItem } from "./SideBarItems";
import { All } from "../icons/All";
import { useNavigate } from "react-router-dom";


export function ShareSidebar(){
    const navigate=useNavigate()
    return <div className="h-screen bg-white  w-72 fixed left-0 right-0">
        <div onClick={()=>navigate("/dashboard")} className="flex items-center gap-2 p-4 mt-5">
            <div className="text-blue-700 cursor-pointer"><Logo/></div>
            <div className="text-blue-900 cursor-pointer text-4xl font-bold">Brainly</div>
        </div>
        <div className="pl-5 mt-10 ">
            <SidebarItem onClick={()=>navigate("/share")} text="All" icon={<All></All>}/>
            <SidebarItem onClick={()=>navigate("/xshare")} text="X" icon={<TwitterIcon />}/>
            <SidebarItem onClick={()=>navigate("/yshare")} text="YouTube" icon={<Yotube />}/>
        </div>
    </div>
}