import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const {photo, title, desc, _id} = post;
    return (
        <Link to={`/post/${_id}`}>
            <div className="overflow-hidden bg-blue-500 border-4 border-red-500 rounded-md shadow-md">
                <img
                    className="object-cover object-center border-b-2 border-red-500"
                    src={photo}
                    alt=""
                />
                <div className="flex flex-col content-center justify-center p-5">
                    <div className="flex flex-row justify-center font-semibold text-indigo-600 font-varelaRound">
                        <span className="px-2">
                            Music

                            {/* <Link to="/posts?cat=Music">
                                Music
                            </Link> */}
                        </span>
                        <span className="px-2">
                            Life
                            {/* <Link to="/posts?cat=Life">
                                Life
                            </Link> */}
                        </span>
                    </div>
                    <span className="mt-5 font-bold font-josefin">
                        <h1 className="text-2xl uppercase">{title}</h1>
                        {/* <Link to="/post/abc" className="text-2xl uppercase">
                            this is title
                        </Link> */}
                    </span>
                    <hr />
                    <span className="text-gray-200 font-lora">1 hour ago</span>
                </div>
                <p className="p-5 pt-0 overflow-hidden overflow-clip">
                    {desc}
                </p>
            </div>
        </Link>
    );
};

export default Post;