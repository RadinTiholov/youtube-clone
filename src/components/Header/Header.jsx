import { Link } from "react-router-dom"
import logo from "../../images/logo.png"

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#202020"}}>
            <Link className="navbar-brand" to="/">
                <img className="mx-5" src={logo} alt="img" style={{ height: "40px", width: "40px" }} />
            </Link>
            <form className="d-flex" style={{marginLeft: 'auto'}}>
                <div className="input-group">
                    <div className="form-outline">
                        <input type="search" id="form1" className="form-control" placeholder="Search"/>
                    </div>
                    <button type="button" className="btn" style={{backgroundColor: "#313131"}}>
                        <i className="fas fa-search text-light"></i>
                    </button>
                </div>
            </form>
            <div className="mx-2"></div>
        </nav>
    )
}