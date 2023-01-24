import React from 'react';

import Image from 'next/image';

import SkillItem from './SkillItem';

const Skills = () => {
    return (
        <div className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <h3 className='py-4 text-3xl tracking-widest text-[#5651e5]'>Skills</h3>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <SkillItem
                        width={64}
                        height={64}
                        alt='html5'
                        text='HTML5'
                        imgSrc='/assets/skills/html5.svg'
                    />
                    <SkillItem
                        width={64}
                        height={64}
                        alt='css3'
                        text='CSS3'
                        imgSrc='/assets/skills/css3.svg'
                    />
                    <SkillItem
                        width={64}
                        height={64}
                        alt='javascript'
                        text='JavaScript'
                        imgSrc='/assets/skills/js.svg'
                    />
                    <SkillItem
                        width={64}
                        height={64}
                        alt='react'
                        text='React.js'
                        imgSrc='/assets/skills/react.svg'
                    />
                    <SkillItem
                        width={64}
                        height={64}
                        alt='nextjs'
                        text='Next.js'
                        imgSrc='/assets/skills/nextjs.svg'
                    />
                    <SkillItem
                        width={64}
                        height={64}
                        alt='postgresql'
                        text='PostgreSQL'
                        imgSrc='/assets/skills/postgres.svg'
                    />
                    <SkillItem
                        width={64}
                        height={64}
                        alt='python'
                        text='Python'
                        imgSrc='/assets/skills/python.svg'
                    />
                    <SkillItem
                        width={50}
                        height={50}
                        alt='django'
                        text='Django'
                        imgSrc='/assets/skills/django.svg'
                    />
                    <SkillItem
                        width={50}
                        height={50}
                        alt='linux'
                        text='Linux'
                        imgSrc='/assets/skills/linux.svg'
                    />
                    <SkillItem
                        width={50}
                        height={50}
                        alt='docker'
                        text='Docker'
                        imgSrc='/assets/skills/docker.svg'
                    />
                </div>
            </div>
        </div>
    );
};

export default Skills;
