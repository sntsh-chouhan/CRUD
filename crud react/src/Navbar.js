import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>User Blog</h1>
            <div className="links">
                <Link to="/">HOME</Link>
                <Link to="/create">NEW Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;