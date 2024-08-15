import React from 'react'
import profile from '../assets/self.png'
import { motion } from 'framer-motion'

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1 variants={container(0)} initial='hidden' animate='visible' className='pb-16 text-7xl font-semibold tracking-tight lg:mt-16 lg:text-8xl'>Hello, I'm Ritvik Sharma</motion.h1>
                        <motion.span variants={container(0.5)} initial='hidden' animate='visible' className='bg-gradient-to-r from-pink-400 via-slate-500 to-purple-600 bg-clip-text text-4xl tracking-tight text-transparent'>Computer Science Engineer</motion.span>
                        <motion.p variants={container(1)} initial='hidden' animate='visible' className='my-2 max-w-xl py-6 font-light tracking-tighter'>I am currently in my third year at Sardar Patel Institute of Technology, where I am not only excelling in my studies but also actively pursuing a deep interest in machine learning, aspiring to become an ML engineer.
                            <br />
                            As a dedicated MERN Stack Web Developer, I have a robust understanding of the MERN stack and a strong foundation in ReactJS. With over 200+ LeetCode problems solved, I demonstrate a keen aptitude for problem-solving and algorithmic thinking.
                            <br />
                            My academic journey and hands-on project experiences have equipped me with excellent time management skills and the ability to collaborate effectively within diverse teams. I am passionate about leveraging technology to solve real-world problems and am always eager to learn and apply new skills. My goal is to contribute to innovative projects that make a meaningful impact while continuously growing as a developer and engineer.
                        </motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className='mr-14 rounded-full bg-slate-800'>
                        <img src={profile} alt="" className='w-[800px] md:h-[600px] md:w-[500px]' />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero
