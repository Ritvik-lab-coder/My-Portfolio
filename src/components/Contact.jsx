import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className='my-10 text-center text-4xl font-semibold'>Get in touch</motion.h2>
            <div className='text-center tracking-tighter'>
                <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className='my-4'>+91-8097666446</motion.p>
                <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }} className='my-4'>ritviksharma822@gmail.com</motion.p>
            </div>
        </div>
    )
}

export default Contact
