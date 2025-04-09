import { Link } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

interface ProjectsCardProps {
    title: string;
    description: string;
    stack: string;
    image: string;
    liveLink: string;
    isOpenSource: boolean;
    githubLink?: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({
    title,
    description,
    stack,
    image,
    liveLink,
    isOpenSource = false,
    githubLink,
}) => {
    return (
        <>
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className='h-120 w-80 bg-white drop-shadow-2xl rounded-xl flex flex-col overflow-hidden'
            >
                <div style={{ backgroundImage: `url('${image}')` }} className='h-2/5 bg-center bg-cover rounded-t-xl' />

                <div className='flex flex-col justify-between p-4 h-3/5'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold text-2xl'>{title}</h1>
                        <p className='text-justify text-lg text-gray-500'>{description}</p>
                    </div>

                    <div className='flex flex-col'>
                        <span className='text-sm text-gray-600'>
                            <span className='font-extrabold'>Stack:</span> {stack}
                        </span>
                        <div className='flex justify-between items-center mt-4'>
                            <a href={liveLink} target='_blank' className='flex items-center gap-2'>
                                <Link size={24} /> <span className='underline text-sm'>Live Preview</span>
                            </a>
                            {isOpenSource && (
                                <a href={githubLink} target='_blank' className='flex items-center gap-2'>
                                    <img src='/icons/github.png' width={24} /> <span className='text-sm'>Código</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default ProjectsCard;
