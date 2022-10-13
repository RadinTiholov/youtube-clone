export const Card = (props) => {
    console.log(props?.snippet?.thumbnails?.high);
    return (
        <div className="col">
            <div className="card border-0" style={{ width: "18rem", borderRadius: 0 }}>
                <img className="card-img-top" style={{ borderRadius: 0, height: "200px", width: "18rem" }} src={props?.snippet?.thumbnails.high.url} alt="Card img cap" />
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
        </div >
    )
}