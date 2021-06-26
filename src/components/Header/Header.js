import React from 'react';

const Header = () => {
    return (
        <header className="relative">
            <div className="absolute z-50 text-7xl left-1/2 font-lora">
                {/* <span className="inline-block">Writing makes you a better version of yoy</span> */}
                <span className="inline-block text-white">Blogs</span>
            </div>
            <img className="object-cover w-full h-32 " src="https://image.freepik.com/free-vector/classic-retro-80s-style-tropical-sunset-with-palm-tree_1017-31136.jpg" alt="background image" srcset="" />
        </header>
    );
};

export default Header;