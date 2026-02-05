import type { ReactElement } from "react";

export function SidebarItem({text,icon}:{
    text:string;
    icon:ReactElement;
}){
    return <div className="flex text-gray-700 font-bold items-center cursor-pointer rounded max-w-60 transition-all duration-150 hover:bg-gray-300">
        <div className="p-2">{icon}</div>
        <div className="p-2">{text}</div>
    </div>
}