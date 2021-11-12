import { Link } from "react-router-dom";

function Header() {
    
    return(
        <nav className="navbar">
            <Link to="/">
                <div className="nav-header">
                    <img src="/apple-touch-icon.png" alt="" srcset="" />
                </div>
            </Link>
            <ul className="nav-list">
                <Link to="/movie">
                    <li className="nav-item">Movies</li>
                </Link>
                <Link to="/tv">
                    <li className="nav-item">TV Shows</li>
                </Link>
                <Link to="/search">
                    <li className="nav-item">
                        <i className="fas fa-search"></i>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Header