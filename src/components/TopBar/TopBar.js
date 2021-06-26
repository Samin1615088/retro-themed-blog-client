import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';

const TopBar = () => {
    // const [userStatus, setUserStatus] = useContext(UserContext);
    
    return (
        <div className="top-0 z-50 flex flex-col flex-grow bg-gray-200 md:sticky md:h-12 md:flex-row h-96">
            <div className="flex justify-center flex-shrink cursor-pointer">
                <i className="self-center inline-block px-5 text-4xl fab fa-facebook-square "></i>
                <i className="self-center inline-block px-5 text-4xl fab fa-instagram-square "></i>
                <i className="self-center inline-block px-5 text-4xl fab fa-github-square "></i>
                <i className="self-center inline-block px-5 text-4xl fab fa-medium "></i>
            </div>

            <ul className="flex flex-col flex-shrink text-lg font-light font-medium md:flex-row font-josefin">
                <li className="self-center flex-auto px-2 cursor-pointer">
                    <Link to="/">HOME</Link>
                </li>
                <li className="self-center flex-auto px-2 cursor-pointer">
                    <Link to="/about">ABOUT</Link>
                </li>
                {/* <li className="self-center flex-auto px-2 cursor-pointer">
                    <Link to="/contact">CONTACT</Link>
                </li> */}
                <li className="self-center flex-auto px-2 cursor-pointer">
                    <Link to="/write">WRITE</Link>
                </li>

                <li className="self-center flex-auto px-2 cursor-pointer">
                    {/* <Link to="/logout">LOGOUT</Link> */}
                    {/* {
                        userStatus.isLoggedIn ? <Link to="/logout">LOGOUT</Link> : <Link to="/login">ADMIN LOGIN</Link>
                    } */}
                </li>
            </ul>

            <div className="flex justify-center flex-grow">
                <img className="object-contain object-center w-16 pt-1 pb-1 ml-auto mr-5 rounded-full cursor-pointer md:h-full" src="https://image.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg" alt="profile icon thumbnail" />
                <span className="self-center inline-block mr-5 cursor-pointer">
                    <i className="text-lg text-gray-600 fas fa-search"></i>
                </span>
            </div>
        </div>
    );
};

export default TopBar;