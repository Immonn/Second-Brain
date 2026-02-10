import type { ReactElement } from "react";


interface ButtonProps {
    variant: "Primary" | "Secondary" | "logout";
    text: string;
    size:"md" | "sm" | "lg"
    startIcon?: ReactElement;
    onClick?:()=> void;
    fullWidth?:Boolean;
    loading?:Boolean;
}

const sizeStyles={
    sm: "py-1 px-2",
    md : "py-2 px-3",
    lg : "py-2 px-3"
}

const variantClasses = {
    "Primary": "bg-purple-1 text-white hover:bg-blue-900 transition duration-150",
    "Secondary": "bg-purple-2 hover:bg-gray-300 text-purple-1 transition duration-150",
    "logout": "bg-red-500 hover:bg-red-700 text-white transition duration-150"
}

const defaultStyles="rounded-md px-4 py-2 flex font-light items-center cursor-pointer"

export function Button(props: ButtonProps) {
    return <button onClick={props.onClick} className={`${variantClasses[props.variant]} ${defaultStyles} ${props.fullWidth ? "w-100 flex mt-5 justify-center":""} ${sizeStyles[props.size]}
    ${props.loading ? "opacity-45" : ""}`}>
        <div className="pr-2">{props.startIcon}</div>
        {props.text}</button >
}
