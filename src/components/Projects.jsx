import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className='my-20 text-center text-4xl font-semibold'>Projects</motion.h2>
            <div>
                <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className='w-full lg:w-1/4 mr-2'>
                        <img src={project1} alt="" width={350} height={350} className='mb-6 rounded' />
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }} className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>Farm Fresh Products E-Commerce Platform - AgriBoost</h6>
                        <p className='mb-4 text-neutral-400'>Developed a dynamic e-commerce website for selling and showcasing farm fresh products with tailored farmer and admin dashboards. Implemented user authentication and authorization using JSON Web Tokens (JWT). Integrated Cloudinary for product image uploads and bcrypt for secure storage of user credentials. Utilized Axios package for seamless frontend-backend communication, updates and reviews. Designed a responsive interface with Bootstrap and React Icons, and managed data using MongoDB and ExpressJS.</p>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>MongoDB</span>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>ExpressJS</span>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>ReactJS</span>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>NodeJS</span>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Bootstrap</span>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Cloudinary</span>
                        </div>
                    </motion.div>
                </div>
                <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className='w-full lg:w-1/4 mr-2'>
                        <img src={project2} alt="" width={350} height={350} className='mb-6 rounded' />
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }} className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>Hospital Management System - HealthCheckmate</h6>
                        <p className='mb-4 text-neutral-400'>Developed a comprehensive Hospital Management System which is designed to streamline hospital operations by providing an intuitive interface for managing patient records, appointments, doctor schedules, and more. Included schedules and information management for doctors, including specialty, availability, and patient assignments. Used JWT for authentication and authorization, bcrypt for secure hashing of user credentials and cloudinary for handling and uploading images for user and doctor profiles.</p>
                        <div className='flex flex-wrap'>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>ReactJS</span>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>Cloudinary</span>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>ExpressJS</span>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>NodeJS</span>
                            <span className='mr-2 my-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>MongoDB</span>
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
