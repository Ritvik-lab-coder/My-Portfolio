import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Contact from './Contact'

const Education = () => {
    return (
        <div className='min-h-screen min-w-screen bg-gradient-to-b from-gray-800 to-black overflow-x-hidden text-neutral-200 antialiased selection:bg-cyan-400 selection:text-cyan-600'>
            <Navbar />
            <div className='border-b border-neutral-900 pb-4'>
                <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className='my-20 text-center text-4xl font-semibold text-[#BD8BDE]'>Education</motion.h2>
                <div>
                    <div className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-400'>2022 - Present</p>
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className='w-full max-w-xl lg:w-3/4'>
                            <h5 className='mb-2 font-semibold'>Bhartiya Vidya Bhavan's Sardar Patel Institute of Technology, Mumbai</h5>
                            <h6 className='mb-2'>B.Tech in Computer Science and Engineering (Data Science)</h6>
                            <p className='mb-4 text-neutral-400'>Aggregate CGPA - 9.54/10.</p>
                        </motion.div>
                    </div>
                    <div className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-400'>2020 - 2022</p>
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className='w-full max-w-xl lg:w-3/4'>
                            <h5 className='mb-2 font-semibold'>Mithibai College of Arts Chauhan Institute of Science and A.J. College of Commerce and Economics, Mumbai</h5>
                            <h6 className='mb-2'>Higher Secondary Education</h6>
                            <p className='mb-4 text-neutral-400'>Final Grade - 92.5%.</p>
                        </motion.div>
                    </div>
                    <div className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-400'>2013 - 2020</p>
                        </motion.div>
                        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className='w-full max-w-xl lg:w-3/4'>
                            <h5 className='mb-2 font-semibold'>Shri N.P.K.(T.) Vidya Mandir, Mumbai</h5>
                            <h6 className='mb-2'>Schooling and Secondary Education</h6>
                            <p className='mb-4 text-neutral-400'>Final Grade - 94%.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default Education
