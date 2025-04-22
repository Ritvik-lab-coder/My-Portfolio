import React from 'react';
import { motion } from 'framer-motion';
import victory1 from '../assets/victory1.png';
import victory2 from '../assets/victory2.png';
import victory3 from '../assets/victory3.png';

const hackathonData = [
    {
        img: victory1,
        title: "HackXplore 2025",
        description: "Secured 1st place in HackXplore 2024 for building an AI-powered education platform.",
        certificateLink: "https://drive.google.com/file/d/1bqdhHAvhd70X_6BfR8z6W1K9Od98OqaS/view?usp=drive_link",
    },
    {
        img: victory2,
        title: "NIT Hacks 7.0",
        description: "Won the competition among 300+ participants in the open innovation category",
        certificateLink: "https://drive.google.com/file/d/1AzlJAmcJOwx4VCXTQC3nJRu9ogltg0fv/view?usp=drive_link",
    },
    {
        img: victory3,
        title: "EduHacks 1.0",
        description: "Secured 3rd place among 100+ participants by developing an innovative learning app",
        certificateLink: "https://drive.google.com/file/d/1BrwREOTEYVS5PfxrRkJLinmi5b9-ftjF/view?usp=drive_link",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    whileHover: { scale: 1.03 },
};

const Victories = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl font-semibold text-[#BD8BDE]'
            >
                Hackathon Victories
            </motion.h2>
            <div className='flex flex-wrap justify-center gap-8 px-4'>
                {hackathonData.map((hackathon, idx) => (
                    <motion.div
                        key={idx}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="whileHover"
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className='max-w-md bg-neutral-900 rounded-2xl overflow-hidden shadow-lg p-4'
                    >
                        <img src={hackathon.img} alt={hackathon.title} className='mb-4 w-full rounded-md' />
                        <h6 className='mb-2 text-lg font-semibold text-white'>{hackathon.title}</h6>
                        <p className='mb-4 text-neutral-400 text-sm'>{hackathon.description}</p>
                        <a
                            href={hackathon.certificateLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block rounded bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 text-sm font-semibold transition'
                        >
                            View Certificate
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Victories;
