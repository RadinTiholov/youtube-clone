import { Link } from "react-router-dom"

export const Card = (props) => {
    return (
        <div className="col">
            <Link to= {`/video/${props?.id?.videoId}`} style= {{textDecoration: 'none'}}>
                <div className="card border-0" style={{ width: props.width, borderRadius: 0 }}>
                    <img className="card-img-top" style={{ borderRadius: 0, height: props.height, width: props.width }} src={props?.snippet?.thumbnails.high.url} alt="Video img" />
                    <div className="card-body" style={{ backgroundColor: "#202020" }}>
                        <h6 className="card-text text-light display-7">
                            {props?.snippet?.title}
                        </h6>
                        <p className="card-text text-secondary display-9">
                            <small>
                                {props?.snippet?.channelTitle}
                            </small>
                        </p>
                    </div>
                </div>
            </Link>
        </div >
    )
}