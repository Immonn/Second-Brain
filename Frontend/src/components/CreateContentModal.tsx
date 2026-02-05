import { CrossIcon } from "../icons/Close";
import { Button } from "./Button";
import { Input } from "./Input";

//@ts-ignore
export function CreateContentModal({ open, onclose }) {
    return <div>
        {open && (
            <div
                className="h-screen w-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center"
                onClick={onclose} 
            >
                <div className="flex flex-col justify-center w-full h-full">
                    <span
                        className="bg-white opacity-100 p-10 rounded mx-auto my-auto block"
                        //Due to this event handler no click in this span will propogate
                        onClick={e => e.stopPropagation()}
                    >
                        <span className="flex justify-end cursor-pointer" onClick={onclose}>
                            <CrossIcon />
                        </span>
                        <div>
                            <Input onChange={() => { }} placeholder={"Title"}></Input>
                            <Input onChange={() => { }} placeholder={"Link"}></Input>
                        </div>
                        <div className="flex justify-center">
                            <Button variant="Primary" text="submit" size="sm" />
                        </div>
                    </span>
                </div>
            </div>
        )}
    </div>
}