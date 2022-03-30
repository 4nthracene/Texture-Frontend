import React, { useState } from 'react'

export default function Checkbox({ id, text }) {
    const [ticked, setTicked] = useState(false)
    return (
        <div onClick={() => {setTicked(!ticked)}} className="flex items-center">
            <div className={`w-10 h-10 p-3 border-2 ${ticked ? "border-pink-500" : "border-white"} rounded-lg flex flex-col items-center justify-center`}>
                <i className={`fa-solid fa-face-grin-tongue text-3xl text-${ticked ? "pink-500" : "white" }`}></i>
            </div>
            <h1 className={`text-white bg-${ticked ? "bg-pink-50 text-pink-500" : "slate-500" }  px-4 py-1 rounded-xl`}>{text}</h1>
        </div>
    )
}
