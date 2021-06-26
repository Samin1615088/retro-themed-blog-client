import React from 'react';

const Login = () => {
    return (
        <div className="flex flex-col w-full h-screen p-5 xl:w-1/2 xl:mx-auto">
            <span className="mt-64 text-center text-7xl font-lora">Login</span>
            <form className="flex flex-col pt-16 lg:w-1/2 lg:mx-auto">
                <label className="mb-2 ml-2 font-bold tracking-wide text-gray-700 text-md">Email</label>
                <input className="w-full px-4 py-2 text-lg border-b border-gray-300 rounded-full focus:outline-none focus:border-indigo-500" type="text" placeholder="Enter your email..." />
                <label className="mt-5 mb-2 ml-2 font-bold tracking-wide text-gray-700 text-md">Password</label>
                <input className="w-full px-4 py-2 text-lg border-b border-gray-300 rounded-full focus:outline-none focus:border-indigo-500" type="password" placeholder="Enter your password..." />
                <button className="w-full p-4 mt-10 font-semibold tracking-wide text-gray-100 bg-indigo-500 rounded-full shadow-lg font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600">Login</button>
            </form>

        </div>
    );
}

export default Login;