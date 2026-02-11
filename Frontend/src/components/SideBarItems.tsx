import type { ReactElement } from "react";

export function SidebarItem({text,icon,onClick}:{
    text:string;
    icon:ReactElement;
    onClick?:()=>void;
}){
    return <div onClick={onClick} className="flex text-gray-700 font-bold items-center cursor-pointer rounded max-w-60 transition-all duration-150 hover:bg-gray-300">
        <div className="p-2">{icon}</div>
        <div className="p-2">{text}</div>
    </div>
}