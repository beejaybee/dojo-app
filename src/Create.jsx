import { useState } from "react";
import { useHistory } from "react-router-dom";

import { url } from "./BlogDetails";

const Create = () => {
    const [title, setTitle] = useState('');
    const [ content, setContent ] = useState('');    
    const [ author, setAuthor ] = useState('Yoshi');
    const [ loading, setLoading ] = useState(false);

    const redirect = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        const blog = {title, body: content, author}
        
        setLoading(true);

        fetch(url, {
            method: 'POST',
            headers: {"Content-type": "Application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("Added data successfully");
            setLoading(false);
            redirect.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a Blog</h2>
            <form
            onSubmit={handleSubmit}
            >
                <label>Blog Title:</label>
                <input 
                type="text"
                required
                value={ title }
                onChange={ (e) => setTitle(e.target.value) }
                />
                <label>Blog Content</label>
                <textarea
                required
                value={content}
                onChange={ e => setContent(e.target.value) }
                >
                    
                </textarea>
                <label>Blog Author</label>
                <select
                value={ author }
                onChange={ e => setAuthor(e.target.value) }
                >
                    <option value="Mario ">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                { !loading && <button>Add Blog</button> }
                { loading && <button disabled>Adding Blog...</button>}              
            </form>
        </div>
    );
}

export default Create;