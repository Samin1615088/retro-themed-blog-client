import React from 'react';

const SinglePost = () => {
    return (
        <div className="md:pl-10">
            <img
                className="object-cover w-full rounded-lg max-h-96"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <div className="px-1 md:px-10">

                <div className="flex content-center justify-center font-lora ">
                    <h1 className="py-10 text-5xl font-bold capitalize">Lorem ipsum dolor</h1>
                    <div className="self-center ml-auto text-3xl">
                        <i className="p-2 mx-3 text-green-500 far fa-edit"></i>
                        <i className="p-2 ml-3 text-red-500 far fa-trash-alt"></i>
                    </div>
                </div>
                <div className="flex flex-row justify-between my-5 text-base font-bold text-indigo-600 font-josefin">
                    <span>
                        Author:
                        <b className="mx-2">
                            <a className="a" to="/posts?username=Safak">
                                Safak
                            </a>
                        </b>
                    </span>
                    <span>1 day ago</span>
                </div>
                <p className="text-3xl leading-10 font-josefin">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
                    quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
                    Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
                    eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                    error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
                    impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
                    odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos!
                    <br />
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
                    quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
                    Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
                    eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                    error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
                    impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
                    odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
                </p>
            </div>
        </div>
    );
};

export default SinglePost;