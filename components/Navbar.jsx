import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav((prevValue) => !prevValue);
    };

    return (
        <div className='fixed w-full h-20 shadow-xl z-50 opacity-100'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image src='../assets/jg.svg' alt='Logo' height={50} width={50} />
                <div>
                    <ul className='hidden md:flex'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>About</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>Skills</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>Projects</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>Contact</Link>
                        </li>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={30} />
                    </div>
                </div>
            </div>
            <div
                className={
                    nav
                        ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in-out duration-500'
                        : ''
                }
            >
                <div
                    className={
                        nav
                            ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] m:w-[%45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-1000'
                            : 'fixed left-[-150%] top-0 ease-in p-10 duration-700'
                    }
                >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src='../assets/jg.svg' height={80} width={80} alt='logo' />
                            <div
                                onClick={handleNav}
                                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                            >
                                <AiOutlineClose size={20} />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>
                                Let's build something legendary together.
                            </p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <li className='py-4 text-sm'>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className='py-4 text-sm'>
                                <Link href='/'>About</Link>
                            </li>
                            <li className='py-4 text-sm'>
                                <Link href='/'>Skills</Link>
                            </li>
                            <li className='py-4 text-sm'>
                                <Link href='/'>Projects</Link>
                            </li>
                            <li className='py-4 text-sm'>
                                <Link href='/'>Contact</Link>
                            </li>
                        </ul>
                        <div className='pt-40 '>
                            <p className='uppercase tracking-widest text-[#5651e5]'>
                                Let's Connect
                            </p>
                            <div className='flex item-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
