import React from 'react'
import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <motion.div className='min-h-full w-full bg-black flex relative flex-col items-center justify-center'>
            <motion.img src="/rocket.svg" alt="" initial={{ x: -550 }} transition={{ duration: 1, type: "spring" }} whileInView={{ x: 0 }} className="w-[500px] absolute top-[40px] left-[50px] animateRocket" />
            <motion.div initial={{ opacity: 0, scale: 0.7 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, scale: 1 }} className="flex flex-col gap-8 items-start justify-center">
                <h1 className='text-white font-bold uppercase text-xl underline underline-offset-8'>
                    About me :3
                </h1>
                <p className="text-white text-lg font-light max-w-[300px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident odio ducimus temporibus magni velit quidem ex ipsa vitae cupiditate blanditiis. Perferendis optio minima eos dolor quaerat odio odit necessitatibus voluptate, est perspiciatis, reiciendis voluptatum ea autem ipsa aspernatur aut beatae illum quisquam nemo quam quidem magnam. Quidem dolorum sint mollitia.
                </p>
            </motion.div>

            <motion.div className='absolute top-[30px] right-[0px]' onViewportEnter={(e) => {
                e.target.classList.add("animateMediaPlayer");
            }}>
                <motion.img src="/running.svg" alt="" transition={{ duration: 1 }} style={{ transform: 'rotate(-90deg);' }} className="w-[500px] " />
            </motion.div>
        </motion.div>
    )
}
