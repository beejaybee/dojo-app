import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="blog-details">
            <h2>Error 404 not found</h2>
            <Link to='/'>
                <p>go back to the home page</p>
            </Link>
        </div>
    );
}

export default NotFound ;