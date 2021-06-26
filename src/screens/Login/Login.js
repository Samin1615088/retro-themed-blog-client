import axios from 'axios';
import React, { useContext, useRef } from 'react';
import UserContext from './../../App';

const Login = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [userStatus, setUserStatus] = useContext(UserContext);
    const emailRef = useRef()
    const passwordRef = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     const response = await axios.post(`https://radiant-shore-65689.herokuapp.com/api/auth/login`, {
        //         email: emailRef.current.value,
        //         password: passwordRef.current.value,
        //     });
        //     setUserStatus({
        //         email: response.email,
        //         isLoggedIn: true,
        //     })
        // } catch (err) {
        //     console.log(err);
        // }

    }
    return (
        <div className="flex flex-col w-full h-screen p-5 xl:w-1/2 xl:mx-auto">
            <span className="mt-64 text-center text-7xl font-lora">Admin Login</span>
            <form className="flex flex-col pt-16 lg:w-1/2 lg:mx-auto" onSubmit={handleSubmit}>
                <label className="mb-2 ml-2 font-bold tracking-wide text-gray-700 text-md">Email</label>
                <input className="w-full px-4 py-2 text-lg border-b border-gray-300 rounded-full focus:outline-none focus:border-indigo-500" type="text" placeholder="Enter your email..." ref={emailRef} />
                <label className="mt-5 mb-2 ml-2 font-bold tracking-wide text-gray-700 text-md">Password</label>
                <input className="w-full px-4 py-2 text-lg border-b border-gray-300 rounded-full focus:outline-none focus:border-indigo-500" type="password" placeholder="Enter your password..." ref={passwordRef} />
                <button className="w-full p-4 mt-10 font-semibold tracking-wide text-gray-100 bg-indigo-500 rounded-full shadow-lg font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600">Login</button>
            </form>

        </div>
    );
}

export default Login;