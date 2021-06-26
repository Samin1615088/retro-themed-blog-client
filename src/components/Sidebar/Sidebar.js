import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="text-center">
            {/* sidebarItem */}
            <div className="sidebarItem font-varelaRound">
                <span className="inline-block w-full py-2 font-bold border-t-2 border-b-2 border-gray-400">ABOUT US</span>
                <img className="object-contain object-center w-full h-56 my-3"
                    src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                    alt=""
                />
                <p className="">
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                    amet ex esse.Sunt eu ut nostrud id quis proident.
                </p>
            </div>
            <div className="mt-3">
                <span className="inline-block w-2/3 py-2 font-medium border-t-2 border-b-2 border-gray-400">CATEGORIES</span>
                <ul className="grid grid-cols-2 py-3">
                    <li className="">
                        <Link to="/posts?cat=Life">
                            Life
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/posts?cat=Music">
                            Music
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/posts?cat=Sport">
                            Sport
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/posts?cat=Style">
                            Style
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/posts?cat=Tech">
                            Tech
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/posts?cat=Cinema">
                            Cinema
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mt-3 ">
                <span className="inline-block w-2/3 py-2 font-medium border-t-2 border-b-2 border-gray-400">FOLLOW US</span>
                <div className="grid w-2/3 grid-cols-4 py-3 mx-auto">
                    <i className="inline-block text-3xl fab fa-facebook-square"></i>
                    <i className="inline-block text-3xl fab fa-instagram-square"></i>
                    <i className="inline-block text-3xl fab fa-github-square"></i>
                    <i className="inline-block text-3xl fab fa-medium"></i>
                </div>
            </div>
        </div>

    );
};

export default Sidebar;