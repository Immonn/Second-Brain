import { ShareIcon } from "../icons/Share";


interface Cardprops {
    title: string;
    type: "x" | "youtube";
    link: string;
}

export function Card(props: Cardprops) {
    return <div>
        <div className="border-gray-200 border max-w-76 p-4 bg-white rounded-md  outline-slate-200">
            <div className="flex justify-between ">
                <div className="flex items-center">
                    <div className="text-gray-500 pr-2 text-sm"><ShareIcon /></div>
                    Project Ideas
                </div>
                <div className="flex text-gray-500">
                    <div className="pr-2">
                        <a href={props.link} target="_blank">
                            <ShareIcon />
                        </a>
                    </div>
                    <div>
                        <a href={props.link} target="_blank">
                            <ShareIcon />
                        </a>
                    </div>
                </div>
            </div>
            <div className="pt-3">
                {props.type === "youtube" && (
                    <iframe
                        className="w-full"
                        src={props.link}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
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
