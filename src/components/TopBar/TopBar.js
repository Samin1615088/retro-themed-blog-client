import React from 'react';
import './TopBar.css'

const TopBar = () => {
    return (
        <div className="h-12 bg-yellow-400 sticky top-0 flex">
            <div className="flex-1 flex justify-center cursor-pointer">
                <i className="fab fa-facebook-square inline-block px-5 text-4xl self-center "></i>
                <i className="fab fa-instagram-square inline-block px-5 text-4xl self-center "></i>
                <i className="fab fa-github-square inline-block px-5 text-4xl self-center "></i>
                <i className="fab fa-medium inline-block px-5 text-4xl self-center "></i>
            </div>

            <ul className="flex-1 flex text-lg font-light">
                <li className="flex-auto self-center cursor-pointer">HOME</li>
                <li className="flex-auto self-center cursor-pointer">ABOUT</li>
                <li className="flex-auto self-center cursor-pointer">CONTACT</li>
                <li className="flex-auto self-center cursor-pointer">WRITE</li>
                <li className="flex-auto self-center cursor-pointer">LOGOUT</li>
            </ul>

            <div className="flex-1 flex justify-center">
                <img className="object-contain h-full mr-5 pt-1 pb-1 rounded-full object-center cursor-pointer" src="https://image.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg" alt="profile icon thumbnail" />
                <span className="inline-block self-center ml-5 cursor-pointer">
                    <i className="fas fa-search text-lg  text-gray-600"></i>
                </span>
            </div>
        </div>
    );
};

export default TopBar;