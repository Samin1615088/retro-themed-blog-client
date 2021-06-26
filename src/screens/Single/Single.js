import React from 'react';
import Sidebar from './../../components/Sidebar/Sidebar'
import SinglePost from './../../components/SinglePost/SinglePost'

const Single = () => {
    return (
        <div className="grid grid-cols-1 gap-5 m-4 md:py-4 lg:grid-cols-5">
            <div className="lg:col-span-4">
                <SinglePost />
            </div>
            <div className="lg:col-span-1">
                <Sidebar />
            </div>
        </div>
    );
};

export default Single;