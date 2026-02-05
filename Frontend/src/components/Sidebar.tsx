import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/Twitter";
import { Yotube } from "../icons/Youtube";
import { SidebarItem } from "./SideBarItems";

export function Sidebar(){
    return <div className="h-screen bg-white  w-72 fixed left-0 right-0">
        <div className="flex items-center gap-2 p-4 mt-5">
            <div className="text-blue-700"><Logo/></div>
            <div className="text-blue-900 text-4xl font-bold">Brainly</div>
        </div>
        <div className="pl-5 mt-10 ">
            <SidebarItem text="X" icon={<TwitterIcon />}/>
            <SidebarItem text="YouTube" icon={<Yotube />}/>
        </div>
    </div>
}