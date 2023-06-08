import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>

        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>Full-stack software engineer with a passion for decentralized finance and the transformational potential of blockchain technology. I am looking to utilize my strengths in web development and understanding of blockchain technologies to contribute to a protocol or company that is looking to make a positive impact in Crypto.</p>
                <Link href='/#projects'><p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p></Link>
            </div>
            
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' width={200} height={200} src="../assets/headshot1.jpg" alt="/headshot"/>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' width={237} height={237} src="../assets/profpic.jpeg" alt="/"/>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' width={200} height={200} src="../assets/wedding-pic.jpg" alt="/"/>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' width={300} height={300} src="../assets/hiking.jpg" alt="/"/>
            </div>
            
        </div>

    </div>
  )
}

export default About