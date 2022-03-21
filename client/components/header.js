import React, { useState, useEffect } from "react";
import Link from "next/link";
import Cookie from "cookie-cutter";
import axios from "axios"
import useUser from "../helpers/useUser";
import fetchuser from "../helpers/fetchuser";

export default function Header({ rootLevelProps: { isAuth, user, _logout, setAuth, setUser } }) {
    useEffect(async () => {
    }, []);
    const sso = async () => {
        if(!isAuth) {
            const GOOGLE_AUTH_URI = "http://localhost:8000/auth/google"
            const newWindow = window.open(GOOGLE_AUTH_URI, "_blank", "width=500,height=600");
            const timer = null;
            if (newWindow) {
                timer = setInterval(async () => {
                    if (newWindow.closed) {
                        await fetchuser();
                        useUser()
                        clearInterval(timer);
                        setAuth(true);
                        setUser(await JSON.parse(Cookie.get("user")));
                    }
                }, 500);
            }

        } else {
            const LOGOUT_URI = "http://localhost:8000/auth/logout";
            try{
                const response = await axios.get(LOGOUT_URI, { withCredentials: true });
                _logout();
            } catch(error) {
                console.error(error.message);
            }
            
        }
    };

    return (
        <div className="p-9 relative h-full w-full overflow-hidden flex flex-col items-center justify-center">
            <nav className="flex items-center justify-between h-[10%] w-full">
                <h1 className="text-white text-2xl font-lighter uppercase block">Texture <span className="text-teal-400 tracking-[10px] block font-bold">Blog</span></h1>
                <ul className="flex items-center justify-center gap-3 lg:gap-6 p-3 text-white text-sm">
                    <li className="uppercase hover:underline hover:text-teal-400 transition-all"><a href="#">Home</a></li>
                    <li className="uppercase hover:underline  hover:text-teal-400 transition-all"><Link href="/blog">Blogs</Link></li>
                    <li className="uppercase hover:underline  hover:text-teal-400 transition-all"><a href="#about">About</a></li>
                    <li className="uppercase hover:underline  hover:text-teal-400 transition-all"><a href="#projects">Projects</a></li>
                    <li className="uppercase hover:underline  hover:text-teal-400 transition-all "><a href="#" onClick={sso}>{ isAuth ? "Logout" : "Sign in" }</a></li>
                </ul>
            </nav>
            <div className="flex items-center justify-center h-[90%] w-full mt-4">
                <div className="text-container flex flex-col justify-center uppercase items-center h-full w-1/2" style={{
                    transform: 'translateY(-50px)'
                }}>
                    <h1 className="text-white text-2xl font-lighter">Hi, I'm <span className="text-pink-500 underline 4 font-bold">Armaan Gupta.</span>
                    </h1>
                    <p className="text-teal-400 text-xl">A Web, Blockchain developer.</p>
                </div>
                <div className="flex flex-col h-full items-center justify-center w-1/2">
                    <img src="/computerguy.svg" className="h-full" alt="" />
                </div>
            </div>
            <img src="/spring.svg" alt="" className="absolute hidden md:inline animate-bounce top-[30%] left-[28%] h-[40%]" />
            <img src="/planet.svg" alt="" style={{
                animation: 'animatePlanet 10s infinite linear'
            }} className="absolute bottom-[3%] rotate-12 left-[5%] h-[40%]" />
            <div className="absolute bottom-[60px] text-white" >
                <i className="fa fa-arrow-down text-5xl animate-bounce"></i>
            </div>
        </div>
    )
}
