import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function Xcontent() {
    const [contents, setcontents] = useState([]);

    function refresh() {
        axios.get(`${BACKEND_URL}/content`, {
            headers: {
                token: localStorage.getItem("token")
            }
        })
        .then((response) => {
            // @ts-ignore
            const xContents = response.data.content.filter(item => item.type === "x");
            setcontents(xContents);
        });
    }

    useEffect(() => {
        refresh();
        let interval = setInterval(() => {
            refresh();
        }, 5 * 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return contents;
}