import React from 'react';

import Image from 'next/image';

const About = () => {
    return (
        <div clvassName='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 items-center'>
                <div className='col-span-2'>
                    <h3 className='py-4 text-3xl tracking-widest text-[#5651e5]'>whoami</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis labore
                        dolorum consectetur voluptate vel repudiandae voluptas, consequatur unde
                        reiciendis numquam praesentium et id accusamus ab in a enim blanditiis, ad
                        porro nam veritatis? Sint magni est minima debitis id non. Tenetur
                        cupiditate, doloribus, fuga tempora earum ut odio quas eveniet ab a
                        similique voluptatibus quasi aut excepturi veritatis nisi error harum minus
                        quae dolor! Quasi, error. Nulla quos iste ex nobis perferendis ratione ab,
                        qui possimus aspernatur consectetur. Aut animi nam aperiam tempora amet,
                        eius nesciunt sint voluptate perspiciatis vel, deserunt doloremque. Quod
                        facere facilis, aut enim rerum iusto.
                    </p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-103 ease-in duration-300'>
                    <Image
                        className='rounded-xl'
                        src='/assets/code.avif'
                        width={300}
                        height={300}
                        alt='code'
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
