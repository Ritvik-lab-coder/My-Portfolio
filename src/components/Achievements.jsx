import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode } from 'react-icons/fa';
import { SiCodechef, SiCodeforces } from 'react-icons/si';
import Navbar from './Navbar';
import Contact from './Contact';
import Victories from './Victories';

const profileData = [
    {
        icon: <FaGithub size={40} />,
        title: "GitHub",
        description: "Check out my repositories, contributions, and open source work.",
        link: "https://github.com/Ritvik-lab-coder",
    },
    {
        icon: <FaCode size={40} />,
        title: "LeetCode",
        description: "Solving DSA problems regularly to improve algorithmic thinking.",
        link: "https://leetcode.com/u/RitvikSharma2004/",
    },
    {
        icon: <SiCodeforces size={40} />,
        title: "Codeforces",
        description: "Certified in problem solving and regularly participate in contests.",
        link: "https://codeforces.com/profile/EngineerX7",
    },
    {
        icon: <SiCodechef size={40} />,
        title: "Codechef",
        description: "Practicing more to improve more in competitive programming",
        link: "https://www.codechef.com/users/ritviksharma82",
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    whileHover: { scale: 1.03 },
};

const Achievements = () => {
    return (
        <div className='min-h-screen min-w-screen bg-gradient-to-b from-gray-800 to-black overflow-x-hidden text-neutral-200 antialiased selection:bg-cyan-400 selection:text-cyan-600'>
            <Navbar />
            <div className='border-b border-neutral-900 pb-4'>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className='my-20 text-center text-4xl font-semibold text-[#BD8BDE]'
                >
                    Programming Profiles
                </motion.h2>
                <div className='flex flex-wrap justify-center gap-8 px-4'>
                    {profileData.map((profile, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="whileHover"
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className='flex flex-col items-center text-center bg-neutral-900 rounded-2xl shadow-lg p-6 w-72'
                        >
                            <div className='mb-4 text-purple-500'>{profile.icon}</div>
                            <h6 className='text-lg font-semibold text-white mb-2'>{profile.title}</h6>
                            <p className='text-sm text-neutral-400 mb-4'>{profile.description}</p>
                            <a
                                href={profile.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='rounded bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 text-sm font-semibold transition'
                            >
                                Visit Profile
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Victories />
            <Contact />
        </div>
    );
};

export default Achievements;
