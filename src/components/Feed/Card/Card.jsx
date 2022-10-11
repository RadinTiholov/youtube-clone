export const Card = (props) => {
    return (
        <div className="col">
            <div className="card border-0" style={{ width: "18rem", borderRadius: 0 }}>
                <img className="card-img-top" style={{ borderRadius: 0, height: "200px", width: "18rem" }} src="https://w0.peakpx.com/wallpaper/7/108/HD-wallpaper-eren-yeager-aot-aot-eren-aot-season-4-attack-on-titan-season-4-eren.jpg" alt="Card img cap" />
                <div className="card-body" style={{ backgroundColor: "#202020" }}>
                    <h6 className="card-text text-light display-7">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </h6>
                    <p className="card-text text-secondary display-9">
                        <small>
                            Radin Tiholov
                        </small>
                    </p>
                </div>
            </div>
        </div >
    )
}