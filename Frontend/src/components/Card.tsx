import { ShareIcon } from "../icons/Share";
import { Goto } from "../icons/Goto";
import { useEffect, useRef, useState } from "react";
import { Trash } from "../icons/trash";
import axios from "axios";
import { BACKEND_URL } from "../config";

function getYouTubeEmbedUrl(url: string): string {
    let videoId = "";
    
    // Handle youtu.be short URLs: https://youtu.be/wdQ7gJKmb9I?si=...
    if (url.includes("youtu.be")) {
        const match = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
        if (match) {
            videoId = match[1];
        }
    }
    // Handle youtube.com watch URLs: https://www.youtube.com/watch?v=wdQ7gJKmb9I
    else if (url.includes("youtube.com") || url.includes("youtube-nocookie.com")) {
        const match = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
        if (match) {
            videoId = match[1];
        }
    }
    
    return `https://www.youtube.com/embed/${videoId}`;
}

interface Cardprops {
    id: string;
    title: string;
    type: "x" | "youtube";
    link: string;
    showDelete?: boolean; // optional, default true
}

export function Card(props: Cardprops) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [deleted, setDeleted] = useState(false);

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

    if (deleted) {
        return null;
    }

    return (
        <div>
            <div ref={containerRef} className="border border-gray-200 bg-white rounded-md outline-slate-200 p-4 w-full max-w-md">
                <div className="flex justify-between ">
                    <div className="flex items-center font-semibold">
                        {props.title}
                    </div>
                    <div className="flex text-gray-500">
                        <div className="pr-2 hover:text-gray-800">
                            <a href={props.link} target="_blank">
                                <Goto />
                            </a>
                        </div>
                        <div className="cursor-pointer hover:text-gray-800 pr-3" onClick={() => alert(props.link)}>
                            <ShareIcon />
                        </div>
                        {props.showDelete !== false && (
                            <div className="cursor-pointer hover:text-gray-800" onClick={async () => {
                                try {
                                    await axios.delete(`${BACKEND_URL}/content`, {
                                        data: { contentId: props.id },
                                        headers: {
                                            token: localStorage.getItem("token")
                                        }
                                    })
                                    setDeleted(true);
                                } catch (e) {
                                    alert("Failed to delete. Please try again.");
                                }
                            }}>
                                <Trash />
                            </div>
                        )}
                    </div>
                </div>
                <div className="pt-3">
                    {props.type === "youtube" && (
                        <iframe
                            className="w-full aspect-video"
                            src={getYouTubeEmbedUrl(props.link)}
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
    );
}
