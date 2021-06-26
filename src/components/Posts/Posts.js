import React from 'react';
import Post from './../Post/Post'
const Posts = () => {
    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 font-varelaRound">
            <Post img="https://www.wpbeginner.com/wp-content/uploads/2018/07/whatisblog.png" />
            <Post img="https://www.wpbeginner.com/wp-content/uploads/2018/07/whatisblog.png" />
            <Post img="https://www.wpbeginner.com/wp-content/uploads/2018/07/whatisblog.png" />
            <Post img="https://www.wpbeginner.com/wp-content/uploads/2018/07/whatisblog.png" />
            <Post img="https://www.wpbeginner.com/wp-content/uploads/2018/07/whatisblog.png" />
            <Post img="https://www.wpbeginner.com/wp-content/uploads/2018/07/whatisblog.png" />
        </div>
    );
};

export default Posts;