import { Link } from "react-router-dom";

import "./Navbar.css"

function Navbar(){
    return <>
        <div className="navbar">
            <div>BLOG WORLD</div>

            <div className="navbar-content">
                {/* <Link to="/createblog">Create Blog</Link> */}
                <p>Create Blog</p>
                <p>Recent Blogs</p>
                <p>My Blogs</p>
            </div>

        </div>
    </>
}

export default Navbar