import React from "react";

export default function Header() {
    return (
        <div className="p-9 relative h-full w-full overflow-hidden flex flex-col items-center justify-center">
            <nav className="flex items-center justify-between h-[10%] w-full">
                <h1 className="text-white text-2xl font-lighter uppercase block">Texture <span className="text-teal-400 tracking-[10px] block font-bold">Blog</span></h1>
                <ul className="flex items-center justify-center gap-6 p-3 text-white text-sm">
                    <li className="uppercase hover:underline hover:text-teal-400 transition-all"><a href="#">Home</a></li>
                    <li className="uppercase hover:underline  hover:text-teal-400 transition-all"><a href="#">Blogs</a></li>
                    <li className="uppercase hover:underline  hover:text-teal-400 transition-all "><a href="#">Sign In</a></li>
                </ul>
            </nav>
            <div className="flex items-center justify-center h-[90%] w-full mt-4">
                <div className="text-container flex flex-col justify-center uppercase items-center h-full w-1/2">
                    <h1 className="text-white text-2xl font-lighter">Hi, I'm <span className="text-pink-500 underline 4 font-bold">Armaan Gupta.</span>
                    </h1>
                    <p className="text-teal-400 text-xl">A Web, Blockchain developer.</p>
                </div>
                <div className="flex flex-col h-full items-center justify-center w-1/2">
                    <img src="/computerguy.svg" className="h-full" alt="" />
                </div>
            </div>
            <img src="/spring.svg" alt="" className="absolute top-[30%] left-[28%] h-[40%]" />
            <img src="/planet.svg" alt="" style={{
                animation: 'animatePlanet 10s infinite linear'
            }} className="absolute bottom-[3%] rotate-12 left-[5%] h-[40%]" />
            <div className="absolute bottom-[60px] text-white" >
                <i className="fa fa-arrow-down text-5xl animate-bounce"></i>
            </div>
        </div>
    )
}
