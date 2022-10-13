import { useEffect, useState } from "react";
import { categories } from "../../utils/constants";
import { fetchFromAPI } from "../../utils/fetchFormAPI";
import { Button } from "./Button/Button";
import { Card } from "./Card/Card";

export const Feed = () => {
    const [selectedGenre, setSelectedGenre] = useState("New");
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedGenre}`)
            .then(data => {
                setVideos(data.items);
            })
    }, [selectedGenre]);

    const selectGenre = (e) => {
        e.preventDefault();

        setSelectedGenre(e.target.name);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2">
                    <div className="row">
                        <div className="col-10 mt-3 mx-2">
                            {categories.map((x, element) => <Button {...x} key={element} selectGenre={selectGenre}/>)}
                        </div>
                        <div className="col text-light justify-content-start">
                            <div className="d-flex" style={{ height: '800px' }}>
                                <div className="vr"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h1 className="text-light m-3">{selectedGenre} <span style={{color: 'red'}}>video</span></h1>
                        <div className="row gy-4">
                            {videos.map(x => <Card key={x.id.videoId} {...x}/>)}
                                <Card/>
                        </div>
                </div>
            </div>
        </div>
    )
}