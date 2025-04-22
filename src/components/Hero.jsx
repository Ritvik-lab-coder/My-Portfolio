import React from 'react'
import profile from '../assets/self.png'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Contact from './Contact'
import Technologies from './Technologies'

const container = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Hero = () => {
    return (
        <div className='min-h-screen min-w-screen bg-gradient-to-b from-gray-800 to-black overflow-x-hidden text-neutral-200 antialiased selection:bg-cyan-400 selection:text-cyan-600'>
            <Navbar />
            <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
                <div className="flex flex-wrap">
                    <div className='w-full lg:w-1/2 lg:p-8'>
                        <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className='mr-14 rounded-full bg-cyan-400'>
                            <img src={profile} alt="" className='w-[800px] md:h-[600px] md:w-[500px]' />
                        </motion.div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className='flex flex-col items-center lg:items-start'>
                            <motion.h1 variants={container(0)} initial='hidden' animate='visible' className='pb-16 text-7xl font-semibold tracking-tight lg:mt-16 lg:text-8xl'>Hello, I'm <span className='text-[#BD8BDE] pb-16 text-7xl font-semibold tracking-tight lg:mt-16 lg:text-8xl'>Ritvik Sharma</span></motion.h1>
                            <motion.span variants={container(0.5)} initial='hidden' animate='visible' className='bg-gradient-to-r from-pink-400 via-slate-500 to-purple-600 bg-clip-text text-4xl tracking-tight text-transparent mb-4'>Computer Science Engineer, based in Mumbai, India</motion.span>
                            <motion.p variants={container(1)} initial='hidden' animate='visible' className='my-2 max-w-xl py-6 font-semibold text-2xl tracking-tighter'>Software Engineer passionate about building clean, scalable solutions. Experienced in full-stack development,problem-solving, and turning complex ideas into elegant code. Always learning, always shipping.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
            <Technologies />
            <Contact />
        </div>
    )
}

export default Hero
