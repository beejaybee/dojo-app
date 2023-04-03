import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import useFetchHook from "./hooks/useFetchHook";

export const url = 'http://localhost:3000/blogs/';

const BlogDetails = () => {    
    const { id } = useParams()
    const { data: blog, error, isLoading } = useFetchHook(url + id)
    const redirect = useHistory()

    const handleDelete = () => {
        fetch(url+id, {
            method: 'DELETE',
        }).then(() => {
            redirect.push('/');
        })
    }

    return (  
        <div className="blog-details">
            { isLoading && <div>Loading ...</div> }
            { error && <h2> { error } </h2>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;