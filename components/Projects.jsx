import React from 'react';

import ProjectItem from './ProjectItem';

const Projects = (props) => {
    return (
        <div className='w-full'>
            <div className='max-w-[1240-px] mx-auto px-2 py-16'></div>
            <h3 className='py-4 text-3xl tracking-widest text-[#5651e5]'>Projects</h3>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8'>
                {props.projects.map((el, key) => {
                    return <ProjectItem project={el} key={key} />;
                })}
            </div>
        </div>
    );
};

export default Projects;
