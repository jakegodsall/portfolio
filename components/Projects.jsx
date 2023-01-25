import React from 'react';

import ProjectItem from './ProjectItem';

import expenseChart from '../public/assets/projects/expense-chart.png';
import socialMediaDashboard from '../public/assets/projects/social-media-dashboard.png';
import calculator from '../public/assets/projects/calculator.png';
import multiStepForm from '../public/assets/projects/multistep-form.png';

const Projects = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1240-px] mx-auto px-2 py-16'></div>
            <h3 className='py-4 text-3xl tracking-widest text-[#5651e5]'>Projects</h3>
            <div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8'>
                <ProjectItem imageSrc={expenseChart} />
                <ProjectItem imageSrc={socialMediaDashboard} />
                <ProjectItem imageSrc={calculator} />
                <ProjectItem imageSrc={multiStepForm} />
            </div>
        </div>
    );
};

export default Projects;
