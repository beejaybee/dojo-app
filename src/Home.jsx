import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetchHook from "./hooks/useFetchHook";

const url = 'http://localhost:3000/blogs';

const Home = () => {
    const { data: blogs, isLoading, error } = useFetchHook(url);

    return (
        <div className="home">
            { error && <h2>{error}</h2> }
            { isLoading && <h1>Loading......</h1>}
            { blogs && <BlogList blogs={blogs} title={"All Blogs!"} /> }
        </div>
    )
}

export default Home;