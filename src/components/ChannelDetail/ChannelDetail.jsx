import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchFromAPI } from "../../utils/fetchFormAPI";
import { Card } from "../Feed/Card/Card";
import "./ChannelDetail.css"

export const ChannelDetail = () => {
    const { id } = useParams();
    const [channel, setChannel] = useState({});
    const [videos, setVideos] = useState([]);
    console.log(channel);
    console.log(videos);

    useEffect(() => {
        fetchFromAPI(`channels?id=${id}&part=snippet,statistics&id=${id}`)
            .then(res => {
                setChannel(res.items[0]);
            })
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date&maxResults=16`)
            .then(res => {
                setVideos(res.items);
            })
    }, [id])
    return (
        <>
            <img className={`bannerImg shadow-lg`} src={channel?.brandingSettings?.image.bannerExternalUrl} alt="Card img" />
            <div className="container my-3">
                <div className="row">
                    <div className="col mt-5">
                        <div className="card justify-content-center ml-5" style={{ width: "18rem", borderRadius: 0, backgroundColor: 'transparent', zIndex: 20 }}>
                            <img className="rounded-circle img-fluid" src={channel?.snippet?.thumbnails.high.url} alt="Card img cap" style={{ borderRadius: 0, width: '300px', height: "auto", margin: '0' }} />
                        </div>
                    </div>
                    <div className="text-light mx-5">
                        <h3>{channel?.brandingSettings?.channel?.title}</h3>
                        <p>{channel?.statistics?.subscriberCount} subscribers</p>
                    </div>
                </div>
                <div className="row">
                    {videos.map(x => <Card key={x.id.videoId} {...x} height="200px" width="18rem"/>)}
                </div>
            </div>
        </>
    )
}