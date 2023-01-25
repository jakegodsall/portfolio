import React from 'react';

import Image from 'next/image';

const ProjectItem = (props) => {
    return (
        <div className='relative flex items-center justify-center h-[300px] w-full max-w-[500px] shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ease-in-out duration-500'>
            <Image className='rounded-xl group-hover:opacity-10' src={props.imageSrc} fill />
        </div>
    );
};

export default ProjectItem;
