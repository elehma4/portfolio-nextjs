import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Link from 'next/link'


function Contact() {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
        
        <div className='grid lg:grid-cols-5 gap-8'>
            {/* Left */}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='lg:p-4 h-full'>
                    <div>
                        <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://educor-course-engine.storage.googleapis.com/dam/Short-Programme-in-Information-Processing-and-Touch-Typing-25-wpm.jpg" alt="" />
                    </div>
                    <div>
                        <h2 className='py-2'>Ethan Lehman</h2>
                        <p>Full-Stack Engineer</p>
                        <p className='py-4'>I am available for a full-time position. Contact me and let's talk.</p>
                    </div>

                <div>
                    <p className='uppercase pt-8'>Connect With Me</p>
                    <div className='flex items-center justify-between py-4'>
                        
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <Link href='https://www.linkedin.com/in/ethan-lehman-web3/'><FaLinkedinIn /></Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <Link href='https://github.com/ETH1Elohim'><FaGithub/></Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <Link href="mailto:elehman.development@gmail.com"><AiOutlineMail/></Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <Link href='/assets/Ethan_Lehman_Resume2.pdf'><BsFillPersonLinesFill/></Link>
                    </div>
                    </div>
                </div>

                </div>

                

            </div>

            {/* Right */}

            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                <div className='p-4'>

                    <form action='https://formspree.io/f/xrgvwrly' method='post'>
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Name</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="Name" />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Phone Number</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="Phone Number" />
                            </div>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Email</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name="Email" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Subject</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="Subject" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Message</label>
                            <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' name="Message"></textarea>
                        </div>
                        <button className='w-full p-4 text-gray-100 mt-4' type='submit'>Send Message</button>
                    </form>

                </div>
            </div>

        </div>
        <div className='flex justify-center py-12'>
            <Link href='/'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                </div>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Contact
