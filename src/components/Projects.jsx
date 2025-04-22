import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Contact from './Contact'

const projectData = [
    {
        img: project4,
        title: "LearniFy",
        description:
            "Developed an interactive learning platform enhanced by AI and gamification.",
        tech: ["NextJS", "OLLama2.1", "NodeJS", "MongoDB"],
        link: "https://learnify-frontend-three.vercel.app/",
    },
    {
        img: project2,
        title: "JobZzy",
        description:
            "Developed a full-stack job search and application platform enabling users to log in, create accounts as employees or recruiters, search and apply for jobs.",
        tech: ["ReactJS", "Cloudinary", "ExpressJS", "NodeJS", "MongoDB", "ShadCN UI"],
        link: "https://jobz-zy-frontend.vercel.app/",
    },
    {
        img: project1,
        title: "AgriBoost",
        description:
            "Developed a dynamic e-commerce website for selling and showcasing farm fresh products with tailored farmer and admin dashboards.",
        tech: ["ReactJS", "Cloudinary", "ExpressJS", "NodeJS", "MongoDB", "Bootstrap", "JWT"],
        link: "https://agri-boost-frontend.vercel.app/",
    },
    {
        img: project3,
        title: "CandidAI",
        description:
            "Developed an AI agent to practice mock interviews with the help of Whisper and OpenAI voice agents.",
        tech: ["NextJS", "Tailwind CSS", "Framer Motion", "VapiAI", "Supabase"],
        link: "https://candida-ai-demo.com",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    whileHover: { scale: 1.03 },
};

const Projects = () => {
    return (
        <div className='min-h-screen min-w-screen bg-gradient-to-b from-gray-800 to-black overflow-x-hidden text-neutral-200 antialiased selection:bg-cyan-400 selection:text-cyan-600'>
            <Navbar />
            <div className='border-b border-neutral-900 pb-4'>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className='my-20 text-center text-4xl font-semibold'
                >
                    A Small Selection of my <span className='my-20 text-center text-4xl font-semibold text-[#BD8BDE]'>Recent Projects</span>
                </motion.h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 px-4'>
                    {projectData.map((project, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="whileHover"
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className='bg-neutral-900 rounded-2xl overflow-hidden shadow-lg p-4'
                        >
                            <img src={project.img} alt={project.title} className='mb-4 w-full h-80 rounded-md' />
                            <h6 className='mb-2 text-lg font-semibold text-white'>{project.title}</h6>
                            <p className='mb-4 text-neutral-400 text-sm'>{project.description}</p>
                            <div className='flex flex-wrap mb-4'>
                                {project.tech.map((tech, i) => (
                                    <span key={i} className='mr-2 my-1 rounded bg-neutral-800 px-2 py-1 text-xs font-medium text-purple-400'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-block rounded bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 text-sm font-semibold transition'
                            >
                                Visit Site
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default Projects;
