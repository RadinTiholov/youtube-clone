import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom"
import { fetchFromAPI } from "../../utils/fetchFormAPI";
import { Card } from "../Feed/Card/Card";

export const VideoDetail = () => {
    const { id } = useParams();
    const [video, setVideo] = useState({});
    const [relatedVideos, setRelatedVideos] = useState([]);
    console.log(video);
    useEffect(() => {
        fetchFromAPI(`videos?id=${id}&part=contentDetails,snippet,statistics`)
            .then(res => {
                setVideo(res.items[0]);
            })
            .catch(err => alert(err))
        fetchFromAPI(`search?relatedToVideoId=${id}&part=id,snippet&maxResults=10`)
            .then(res => {
                setRelatedVideos(res.items.slice(0, 10));
            })
            .catch(err => alert(err))
    }, [id])

    return (
        <>
            <div className="container m-5">
                <div className="row">
                    <div className="col-9">
                        <iframe
                            style={{ height: '60vh', width: '100%' }}
                            src={`https://www.youtube.com/embed/${video?.id}`}
                            allowFullScreen
                        />
                        <div className="text-white" text-light>
                            <h5>{video?.snippet?.title}</h5>
                            <div className="row">
                                <div className="col-2">
                                    <p>{video?.statistics?.viewCount} views</p>
                                </div>
                                <div className="col-2">
                                    <p>{video?.statistics?.likeCount} likes</p>
                                </div>
                            </div>
                            <p>{video?.snippet?.description}</p>
                        </div>
                    </div>
                    <div className="col mx-4 justify-content-center">
                        <div className="row">
                            {relatedVideos?.map(x => <Card key={x.id.videoId} {...x} height="150px" width="15rem" />)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}