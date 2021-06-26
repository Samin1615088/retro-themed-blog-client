import React from 'react';
import Header from './../../components/Header/Header'
import Posts from './../../components/Posts/Posts'
import Sidebar from './../../components/Sidebar/Sidebar'

const Home = () => {
    return (
        <>
            <Header />
            <div className="grid grid-cols-1 gap-5 py-4 m-4 lg:grid-cols-5">
                <div className="lg:col-span-4">
                    <Posts />
                </div>
                <div className="lg:col-span-1">
                    <Sidebar />
                </div>
            </div>
        </>

    );
};

export default Home;