import { CrossIcon } from "../icons/Close";
import { Button } from "./Button";
import { Input } from "./Input";

//@ts-ignore
export function CreateContentModal({ open, onclose }) {
    return <div>
        {open && (
            <div
                className="h-screen w-screen fixed top-0 left-0 flex justify-center"
                onClick={onclose}
            >
                <div className="absolute inset-0 bg-slate-500 opacity-60 z-0" />
                <div className="flex flex-col justify-center w-full h-full z-10 relative">
                    <span
                        className="bg-white p-10 rounded-2xl mx-auto my-auto block"
                        onClick={e => e.stopPropagation()}
                    >
                        <span className="flex justify-end cursor-pointer" onClick={onclose}>
                            <div className="hover:bg-red-600 p-2 rounded transition duration-150"><CrossIcon /></div>
                        </span>
                        <div>
                            <Input onChange={() => { }} placeholder={"Title"}></Input>
                            <Input onChange={() => { }} placeholder={"Link"}></Input>
                        </div>
                        <div className="flex justify-center mt-2">
                            <Button variant="Primary" text="Submit" size="md" />
                        </div>
                    </span>
                </div>
            </div>
        )}
    </div>
}