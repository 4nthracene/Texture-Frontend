import React, {useState} from 'react'
import Image from 'next/image';

export default function Projects() {
    const [ projects, setProjects ] = useState([
        { title: "Animatrix", description: `I thought of making a discord server but on stereotypes, I thought it's kinda cool so I tried making the backend for a discord server but for nerds and on stereotypes, It has a lot of functionalities for example, Realtime chat functionality, OAuth, Authorization, Moderation, Posting Matrices, Updating statuses, adding accounts as friends and many more I've currently stopped working on this project because of schools :/`, link: "https://github.com/whyarmaan/Animatrix-v1", image: "/Animatrix Preview.png" },
        { title: "F-Society", description: `One of my favorite TV Show Mr. Robot has this really cool group of hackers, the "F Society" and they can hack whatever they want. So inspired by them i made this framework kind of thing to hack different kind of devices, F-Society consists of a Reverse Shell maker (for both linux and windows), a one liner Reverse Shell generator using different languages (Python, PHP etc), a network pentesting tool (An IP Scanner, Banner grabber, Mac Changer), web hacking suite (in-progress) the Idea felt pretty cool so i thought why not make it :D`, link: "https://github.com/whyarmaan/FSociety", image: "/FSociety Preview.png" },
        { title: "NNFS", description: `Neural Network From Scratch, Yeah nerd Armaan smh :/ Idk why I'll even think about making a neural network from scratch, But anyways i made this Neural network which includes a custom matrix framework It's written in javascript and after than i made a realtime in-browser generational neural net It trains the sheep to find the shortest path between them and the food (which is straight line duhh) but yeah and I haven't modified it since ages :')`, link: "https://github.com/whyarmaan/NeuralNetworkScratchJs", image: "/NNFS Preview.png" },
    ]);
  return (
    <div id='projects' className='min-h-screen h-full w-full bg-black relative'>
        <img src="/phone-min.png" alt="" className="absolute hidden lg:inline -top-40 right-40 z-50 -rotate-45 w-96" />
        <h1 className="text-white text-4xl top-[60px] right-0 font-bold z-50 bg-pink-600 p-5  uppercase absolute -rotate-90">projects</h1>
        <div className="lg:grid lg:grid-cols-3 flex flex-col gap-6 place-items-center h-screen">
            { projects.map((project, i) => {
                return (

                    <a href={project.link} target="_blank" style={{
                        // transform: `translateY(${i == 1 ? "-100px" : i == 2 ? "120px" : "0px"})`
                    }} className='z-40 bg-white hover:bg-teal-900 text-black hover:text-white transition-all w-[70%] h-[80%] rounded-xl flex flex-col px-7 justify-center' key={i}>
                        <img src={project.image} className="hidden lg:inline mx-auto p-5 rounded-4xl" />

                        <h1 className='uppercase font-bold mt-5 underline pb-5'>{ project.title }</h1>
                        <p className="font-light mb-4 text-sm">
                            { project.description.substring(0, 300) + "..." }
                        </p>
                    </a>
                )
            }) }
        </div>
    </div>
  )
}
