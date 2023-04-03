import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Welcome To My blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create a blog</Link>
            </div>
        </nav>
    )
}

export default Navbar;