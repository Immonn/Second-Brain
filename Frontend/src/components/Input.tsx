interface InputProps{
    ref?:any;
    placeholder:string;
    onClick?:()=> void;
}
export function Input(props:InputProps) {
    return <div>
        <input ref={props.ref} placeholder={props.placeholder} onClick={props.onClick} type="text" className="px-4 py-2.5 border rounded m-2 text-left placeholder:text-left w-100 border-gray-100 " />
    </div>
}

