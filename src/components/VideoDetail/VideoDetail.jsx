import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom"
import { fetchFromAPI } from "../../utils/fetchFormAPI";
import { Card } from "../Feed/Card/Card";

export const VideoDetail = () => {
    const { id } = useParams();
    const [video, setVideo] = useState({});
    const [relatedVideos, setRelatedVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`videos?id=${id}&part=contentDetails,snippet,statistics`)
            .then(res => {
                setVideo(res.items[0]);
            })
            .catch(err => alert(err))
        fetchFromAPI(`search?relatedToVideoId=${id}&part=id,snippet&maxResults=10`)
            .then(res => {
                setRelatedVideos(res.items.slice(0,10));
            })
            .catch(err => alert(err))
    }, [id])
    
    return (
        <>
            <div className="container m-5">
                <div className="row">
                    <div className="col-9">
                        <iframe
                            style={{height: '60vh', width: '100%' }}
                            src={`https://www.youtube.com/embed/${video?.id}`}
                            allowFullScreen
                        />                
                        <h5 className="text-light">{video?.snippet?.title}</h5>
                    </div>
                    <div className="col mx-4 justify-content-center">
                        <div className="row">
                            {relatedVideos?.map(x => <Card key={x.id.videoId} {...x} height="150px" width="15rem"/>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}