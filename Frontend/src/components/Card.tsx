import { ShareIcon } from "../icons/Share";
import { Goto } from "../icons/Goto";


interface Cardprops {
    title: string;
    type: "x" | "youtube";
    link: string;
}

export function Card(props: Cardprops) {
    return <div>
        <div className="border-gray-200 border max-w-76 p-4 bg-white rounded-md  outline-slate-200">
            <div className="flex justify-between ">
                <div className="flex items-center font-semibold">
                    {props.title}
                </div>
                <div className="flex text-gray-500">
                    <div className="pr-2 hover:text-gray-800">
                        <a href={props.link} target="_blank">
                            <Goto/>
                        </a>
                    </div>
                    <div className="cursor-pointer hover:text-gray-800" onClick={()=> alert(props.link)}>
                        <ShareIcon />
                    </div>
                </div>
            </div>
            <div className="pt-3">
                    {props.type === "youtube" && (
                        <iframe
                            className="w-full"
                            src={props.link.replace("watch?v=", "embed/")}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    )}
                {props.type === "x" && (
                    <blockquote className="twitter-tweet">
                        <a href={props.link.replace("x.com", "twitter.com")}></a>
                    </blockquote>
                )}
            </div>
        </div>
    </div>
}
