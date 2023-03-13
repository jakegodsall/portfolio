import React from 'react';

import Image from 'next/image';

import { FaGithub, FaDesktop } from 'react-icons/fa';

const ProjectItem = (props) => {
    console.log(props.project);
    return (
        <div className='relative'>
            <div className='relative flex items-center justify-center h-[300px] w-full max-w-[500px] mx-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ease-in-out duration-500'>
                <Image
                    className='rounded-xl group-hover:opacity-10'
                    src={props.project.screenshot}
                    alt={props.project.name}
                    fill
                />
            </div>
            <div className='flex justify-center gap-8 absolute bottom-2 right-2 bg-[#fff] rounded-full p-2'>
                <a href={props.project.githubURL}>
                    <FaGithub className='w-[30px] h-[30px]' />
                </a>
                <a href={props.project.liveURL}>
                    <FaDesktop className='w-[30px] h-[30px] cursor-pointer' />
                </a>
            </div>
        </div>
    );
};

export default ProjectItem;
