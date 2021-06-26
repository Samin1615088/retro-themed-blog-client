import React from 'react';

const Write = () => {
    return (
        <div className="mx-4 mt-5 md:mx-auto md:w-3/4">
            <img
                className="object-cover w-full rounded-lg max-h-96"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />

            <form className="grid grid-cols-1 mt-16 md:grid-cols-5 ">
                <div className="col-span-4">
                    <div className="flex">
                        <label htmlFor="fileInput" className="flex items-center self-center justify-center w-8 h-8 p-1 mr-10 text-2xl border-2 border-gray-400 rounded-full cursor-pointer">
                            <i className="fas fa-plus"></i>
                        </label>
                        <input className="hidden" id="fileInput" type="file" />
                        <input
                            className="self-center w-full px-3 py-2 border-b-2 border-indigo-400"
                            placeholder="Title"
                            type="text"
                            autoFocus={true}
                        />
                    </div>
                    <div className="w-full mt-7">
                        <textarea
                            className="w-full px-3 py-2 border-b-2 border-indigo-400 "
                            placeholder="Tell your story..."
                            type="text"
                            autoFocus={true}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center col-span-1">
                    <button className="px-6 py-4 mt-5 text-white bg-green-500 rounded-md md:mt-0" type="submit">
                        Publish
                    </button>
                </div>
            </form>

            {/* <form className="flex content-center justify-between mt-16 bg-green-300">
                <div className="flex self-center justify-between bg-black">
                    <label htmlFor="fileInput" className="flex items-center justify-center w-8 h-8 p-1 text-2xl border-2 border-gray-400 rounded-full">
                        <i className="fas fa-plus"></i>
                    </label>
                    <input className="hidden" id="fileInput" type="file" />
                    <input
                        className=""
                        placeholder="Title"
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <div className="self-center">
                    <textarea
                        className="writeInput writeText"
                        placeholder="Tell your story..."
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <button className="self-center" type="submit">
                    Publish
                </button>
            </form> */}
        </div>
    );
};

export default Write;