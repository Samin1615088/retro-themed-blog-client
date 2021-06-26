import React from 'react';
import './TopBar.css'

const TopBar = () => {
    return (
        <div className="sticky top-0 flex h-12 bg-gray-200">
            <div className="flex justify-center flex-1 cursor-pointer">
                <i className="self-center inline-block px-5 text-4xl fab fa-facebook-square "></i>
                <i className="self-center inline-block px-5 text-4xl fab fa-instagram-square "></i>
                <i className="self-center inline-block px-5 text-4xl fab fa-github-square "></i>
                <i className="self-center inline-block px-5 text-4xl fab fa-medium "></i>
            </div>

            <ul className="flex flex-1 text-lg font-light font-medium font-josefin">
                <li className="self-center flex-auto cursor-pointer">HOME</li>
                <li className="self-center flex-auto cursor-pointer">ABOUT</li>
                <li className="self-center flex-auto cursor-pointer">CONTACT</li>
                <li className="self-center flex-auto cursor-pointer">WRITE</li>
                <li className="self-center flex-auto cursor-pointer">LOGOUT</li>
            </ul>

            <div className="flex justify-center flex-1">
                <img className="object-contain object-center h-full pt-1 pb-1 mr-5 rounded-full cursor-pointer" src="https://image.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg" alt="profile icon thumbnail" />
                <span className="self-center inline-block ml-5 cursor-pointer">
                    <i className="text-lg text-gray-600 fas fa-search"></i>
                </span>
            </div>
        </div>
    );
};

export default TopBar;