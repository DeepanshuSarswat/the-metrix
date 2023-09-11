import "./404.css"
import { Link } from "react-router-dom";

const Error = () =>{
    return(
        <div className="error-page">
        <div className="error-container">
        <h1 className="page-404">Uh Oh! 404</h1>

        <h1 className="not-found">Page Not Found</h1>

        <Link to="/">Go to Home Page</Link>
        </div>
        </div>
    )
}

export default Error;