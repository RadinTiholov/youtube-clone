import { categories } from "../../utils/constants";
import { Button } from "./Button/Button";
import { Card } from "./Card/Card";

export const Feed = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2">
                    <div className="row">
                        <div className="col-10 mt-3 mx-2">
                            {categories.map((x, element) => <Button {...x} key={element} />)}
                        </div>
                        <div className="col text-light justify-content-start">
                            <div className="d-flex" style={{ height: '800px' }}>
                                <div className="vr"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h1 className="text-light m-3">New videos</h1>
                        <div className="row gy-4">
                            <div className="col">
                                <Card/>
                            </div>
                            <div className="col">
                                <Card/>
                            </div>
                            <div className="col">
                                <Card/>
                            </div>
                            <div className="col">
                                <Card/>
                            </div>
                            <div className="col">
                                <Card/>
                            </div>
                            <div className="col">
                                <Card/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}