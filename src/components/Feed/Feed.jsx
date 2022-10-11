import {categories} from "../../utils/constants";
import { Button } from "./Button/Button";

export const Feed = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <div className="row">
                        <div className="col-7 mt-3 mx-2">
                            {categories.map((x, element) => <Button {...x} key = {element}/>)}
                        </div>
                        <div className="col text-light justify-content-start">
                            <div className="d-flex" style={{ height: '800px' }}>
                                <div className="vr"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    {/* ToDo */}
                </div>
            </div>
        </div>
    )
}