import React from 'react';
import Header from './../../components/Header/Header'
import Post from './../../components/Post/Post'
import Sidebar from './../../components/Sidebar/Sidebar'

const Home = () => {
    return (
        <>
            <Header />
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <Post />
                </div>
                <div className="col-span-1">
                    <Sidebar/>
                </div>
            </div>
        </>

    );
};

export default Home;