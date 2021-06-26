import React, { useEffect, useState } from 'react';
import Sidebar from './../../components/Sidebar/Sidebar'
import SinglePost from './../../components/SinglePost/SinglePost'
import {useParams} from "react-router-dom";
import axios from 'axios';

const Single = () => {
    let {postId} = useParams();

    const [post, setPost] = useState([])

    useEffect(() => {
        async function getPost() {
            try {
                const response = await axios.get(`https://radiant-shore-65689.herokuapp.com/api/posts/${postId}`);
                setPost(response.data)
            } catch (error) {
                console.error(error);
            }
        }
        getPost();
    }, [post.length]);
    console.log(post);

    return (
        <div className="grid grid-cols-1 gap-5 m-4 md:py-4 lg:grid-cols-5">
            <div className="lg:col-span-4">
                <SinglePost post={post} />
            </div>
            <div className="lg:col-span-1">
                <Sidebar />
            </div>
        </div>
    );
};

export default Single;