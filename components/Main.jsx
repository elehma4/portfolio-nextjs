import React from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import headshot from '../public/assets/headshot_blue.jpg'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'


function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>

        <div className='max-w-[1400px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                {/* <p className='uppercase text-sm sm:text-base tracking-widest text-gray-600'>LET'S BUILD SOMETHING GREAT TOGETHER</p> */}
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Ethan Lehman</span></h1>
                <h1 className='py-4 text-gray-700'>A Junior Full-Stack Developer</h1>
                {/* <div className='h-auto m-auto rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' width={477} height={200} src={headshot} alt="/headshot" />
                </div> */}
                
                <p className='py-4 text-gray-600 max-w-[70%] m-auto sm:text-lg'>Building Positive & Impactful User Experiences.</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <Link href='https://www.linkedin.com/in/ethan-lehman-web3/'><FaLinkedinIn className='w-5 h-5'/></Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <Link href='https://github.com/ETH1Elohim'><FaGithub className='w-5 h-5'/></Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <Link href="mailto:elehman.development@gmail.com"><AiOutlineMail className='w-5 h-5'/></Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <Link href='/assets/Ethan_Lehman_Resume.pdf'><BsFillPersonLinesFill className='w-5 h-5'/></Link>
                    </div>

                </div>
                
                {/* <div className='mt-12'>
                    <Link 
                        href='/assets/Ethan_Lehman_Software_Engineer_Resume.pdf'
                        className='shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white p-4 cursor-pointer hover:scale-105 ease-in duration-300 m-auto mt-6'
                    >View My Resume</Link>
                </div> */}
                {/* <button className='p-4 text-gray-100 mt-7 mb-4 m-auto' type='button' href='/assets/Ethan_Lehman_Software_Engineer_Resume.pdf'>View My Resume</button> */}

                {/* <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <HiOutlineChevronDoubleDown className='text-[#5651e5]' size={30} />
                        </div>
                    </Link>
                </div> */}
                
            </div>
        </div>

    </div>
  )
}

export default Main