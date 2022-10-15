import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom"
import { fetchFromAPI } from "../../utils/fetchFormAPI";

export const VideoDetail = () => {
    const {id} = useParams();
    const [video, setVideo] = useState({});

    useEffect(() => {
        fetchFromAPI(`videos?id=${id}&part=contentDetails,snippet,statistics`)
            .then(res => {
                setVideo(res.items[0]);
            })
            .catch(err => alert(err))
    }, [])
    return (
        <>
        </>
    )
}