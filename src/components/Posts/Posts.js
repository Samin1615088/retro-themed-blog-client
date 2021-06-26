import React, { useEffect, useState } from 'react';
import Post from './../Post/Post'
const axios = require('axios');

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getPosts() {
            try {
                const response = await axios.get('https://radiant-shore-65689.herokuapp.com/api/posts/');
                setPosts(response.data)
            } catch (error) {
                console.error(error);
            }
        }
        getPosts();
    }, [])
    console.log(posts);

    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 font-varelaRound">
            {
                posts?.map( post => <Post key={post._id} post={post}/>)
            }
        </div>
    );
};

export default Posts;