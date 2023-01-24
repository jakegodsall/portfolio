import React from 'react';

import Image from 'next/image';

const SkillItem = (props) => {
    return (
        <div className='p-6 shadow-xl rounded-xl hover:scale-15 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image
                        src={props.imgSrc}
                        width={props.width}
                        height={props.height}
                        alt={props.alt}
                    />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
};

export default SkillItem;
