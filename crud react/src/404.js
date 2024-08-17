import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>404! page not found.</h1>
            <Link to = "/">home page</Link>
        </div>
    );
}
 
export default NotFound;