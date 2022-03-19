import React from 'react'

export default function Footer() {
    return (
        <div className='min-h-[80vh] relative flex flex-col gap-9 items-center justify-center w-full bg-black'>
            <h1 className="text-white uppercase text-3xl font-bold">Made with &#x1F498; By me &#x1F431; </h1>
            <div className="flex gap-5">
                <a href="">

                    <i class="fa-brands hover:scale-150 transition-all fa-twitter text-white text-3xl"></i>
                </a>
                <a href="">
                    <i class="fa-brands hover:scale-150 transition-all fa-discord text-white text-3xl"></i>
                </a>
            </div>
            <img src="/Rocket2.svg" className="absolute w-[40%] bottom-0 left-0" />
        </div>
    )
}
