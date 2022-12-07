import {NavLink} from "react-router-dom";
import "./Navbar.css"

const NavBar = () => {
    return(
        <header className="header">
        <div className="logo">Blog post</div>
        <nav>
        <ul>
        <li>
       <NavLink to="/blogs" activeClassName="active">All Blogs</NavLink>
        </li>
        <li>
        <NavLink to="/new-blog" activeClassName="active">New Blog</NavLink>
        </li>
        </ul>
        </nav>
        
        </header>)
}

export default NavBar;