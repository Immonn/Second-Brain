import { ShareIcon } from "../icons/Share";
import { Goto } from "../icons/Goto";
import { useEffect, useRef } from "react";
import { Trash } from "../icons/trash";


interface Cardprops {
    title: string;
    type: "x" | "youtube";
    link: string;
}

export function Card(props: Cardprops) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (props.type !== "x") return;
        const loadWidgets = () => {
            const twttr = (window as any).twttr;
            if (twttr && twttr.widgets) {
                twttr.widgets.load(containerRef.current);
                return;
            }
            const existing = document.querySelector<HTMLScriptElement>("script[src='https://platform.twitter.com/widgets.js']");
            if (!existing) {
                const s = document.createElement("script");
                s.src = "https://platform.twitter.com/widgets.js";
                s.async = true;
                document.body.appendChild(s);
                s.onload = () => (window as any).twttr?.widgets?.load(containerRef.current);
            }
        };
        loadWidgets();
    }, [props.type, props.link]);

    return <div>
        <div ref={containerRef} className="border border-gray-200 bg-white rounded-md outline-slate-200 p-4 w-full max-w-md">
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
                    <div className="cursor-pointer hover:text-gray-800" onClick={()=> alert(props.link)}>
                        < Trash/>
                    </div>
                </div>
            </div>
            <div className="pt-3">
                    {props.type === "youtube" && (
                        <iframe
                            className="w-full aspect-video"
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
