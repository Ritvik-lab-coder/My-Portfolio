import React from 'react'
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiMongodb, SiExpress, SiCplusplus, SiC, SiJavascript, SiPython, SiTypescript, SiNumpy, SiPandas, SiJupyter } from 'react-icons/si'
import { FaNodeJs, FaCss3Alt } from 'react-icons/fa'
import { FaJava } from "react-icons/fa6"
import { TiHtml5 } from "react-icons/ti"
import { GrMysql } from "react-icons/gr"
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className='my-20 text-center text-4xl font-semibold'>Programming Languages</motion.h2>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className='flex flex-wrap items-center justify-center gap-4 mb-4'>
                <motion.div variants={iconVariants(2.4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiC className='text-7xl text-cyan-600' />
                </motion.div>
                <motion.div variants={iconVariants(2.6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaJava className='text-7xl text-[#da7532]' />
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiCplusplus className='text-7xl text-cyan-600' />
                </motion.div>
                <motion.div variants={iconVariants(2.4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiJavascript className='text-7xl text-[#FFD43B]' />
                </motion.div>
                <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPython className='text-7xl text-[#3776AB]' />
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTypescript className='text-7xl text-cyan-600' />
                </motion.div>
            </motion.div>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className='my-20 text-center text-4xl font-semibold'>Web Development Tools and Frameworks</motion.h2>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className='flex flex-wrap items-center justify-center gap-4 mb-4'>
                <motion.div variants={iconVariants(2.4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <TiHtml5 className='text-7xl text-[#F06529]' />
                </motion.div>
                <motion.div variants={iconVariants(2.6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaCss3Alt className='text-7xl text-[#264de4]' />
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-7xl text-green-500' />
                </motion.div>
                <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiExpress className='text-7xl' />
                </motion.div>
                <motion.div variants={iconVariants(2.4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div variants={iconVariants(2.6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className='text-7xl text-green-800' />
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiTailwindCssFill className='text-7xl text-[#4f6be8]' />
                </motion.div>
            </motion.div>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className='my-20 text-center text-4xl font-semibold'>Data Science Tools</motion.h2>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className='flex flex-wrap items-center justify-center gap-4 mb-4'>
                <motion.div variants={iconVariants(2.4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiNumpy className='text-7xl text-cyan-600' />
                </motion.div>
                <motion.div variants={iconVariants(2.6)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPandas className='text-7xl' />
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <GrMysql className='text-7xl text-cyan-800' />
                </motion.div>
                <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiJupyter className='text-7xl text-[#F06529]' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies
