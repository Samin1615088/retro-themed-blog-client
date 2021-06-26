import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const SinglePost = ({ post }) => {
    const { photo, title, desc, _id, username } = post;
    let history = useHistory();

    const handleDelete = async () => {
        try {
            await axios.delete(`https://radiant-shore-65689.herokuapp.com/api/posts/${_id}`,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("your_token")}` 
                  }
            });
            history.push('/')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="md:pl-10">
            <img
                className="object-cover w-full rounded-lg max-h-96"
                src={photo}
                alt=""
            />
            <div className="px-1 md:px-10">

                <div className="flex content-center justify-center font-lora ">
                    <h1 className="py-10 text-5xl font-bold capitalize">{title}</h1>
                    <div className="self-center ml-auto text-3xl">
                        <i className="p-2 mx-3 text-green-500 cursor-pointer far fa-edit"></i>
                        <i className="p-2 ml-3 text-red-500 cursor-pointer far fa-trash-alt" onClick={handleDelete}></i>
                    </div>
                </div>
                <div className="flex flex-row justify-between my-5 text-base font-bold text-indigo-600 font-josefin">
                    <span>
                        Author:
                        <b className="mx-2">
                            <Link to="/posts?username=Safak">
                                {username}
                            </Link>
                        </b>
                    </span>
                    <span>1 day ago</span>
                </div>
                <p className="text-3xl leading-10 font-josefin">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default SinglePost;