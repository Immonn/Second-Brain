import { CrossIcon } from "../icons/Close";
import { Button } from "./Button";
import { Input } from "./Input";


//@ts-ignore
export function CreateContentModal({open,close}){

    return <div>
        {open && <div className="h-screen w-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
            <div className="flex flex-col  justify-center">
                <span className="bg-white opacity-100 p-10 rounded">
                    <span className="flex justify-end cursor-pointer">
                        <CrossIcon></CrossIcon>
                    </span>
                    <div>
                        <Input placeholder={"Title"}></Input>
                        <Input placeholder={"Link"}></Input>
                    </div>
                    <div className="flex justify-center">
                        <Button variant="Primary" text="submit" size="sm" />
                    </div>
                </span>
            </div>
        </div>}
    </div>
}