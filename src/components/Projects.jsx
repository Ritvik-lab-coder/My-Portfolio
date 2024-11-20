import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.jpg'
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className='my-20 text-center text-4xl font-semibold'>Projects</motion.h2>
            <div>
                <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className='w-full lg:w-1/4 mr-2'>
                        <img src={project2} alt="" width={350} height={350} className='mb-6 rounded' />
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }} className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'> Full-Stack Job Search and Application Platform</h6>
                        <p className='mb-4 text-neutral-400'> Developed a full-stack job search and application platform enabling users to log in, create accounts as employees or recruiters, search and apply for jobs. Implemented recruiter functionalities to post jobs, manage applicants, and review resumes with options to accept or reject candidates. Utilized JWT and cookies for secure authentication, Redux for efficient state management, Shadcn UI and Framer Motion for responsive and animated frontend. Built the backend using Node.js and Express, with MongoDB as the database for scalable data management.</p>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>ReactJS</span>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Cloudinary</span>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>ExpressJS</span>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>NodeJS</span>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>MongoDB</span>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>ShadCN UI</span>
                        </div>
                    </motion.div>
                </div>
                <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className='w-full lg:w-1/4 mr-2'>
                        <img src={project3} alt="" width={350} height={350} className='mb-6 rounded' />
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }} className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>Personal Portfolio Website</h6>
                        <p className='mb-4 text-neutral-400'>Created a personal portfolio website to showcase my skills, projects, and professional journey. The website serves as a central hub where potential employers and collaborators can learn more about my work and get in touch with me. Added a detailed section highlighting my educational background and technical skills. Also added a dedicated section showcasing my key projects with descriptions, technologies used</p>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>ReactJS</span>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Tailwind CSS</span>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Framer Motion</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Projects
