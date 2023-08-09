import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>

        <div className='max-w-[1400px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>I am a full-stack software engineer with a passion for leveraging technology to create positive impacts and prioritize security for web users. I am seeking opportunities to utilize my strengths and expertise in web development to contribute to innovative projects that enhance user experience, privacy, real-world interoperability, and digital freedom.</p>
                <Link href='/#projects'><p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p></Link>
            </div>
            
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' width={200} height={200} src="../assets/headshot_blue2.jpg" alt="/headshot"/>
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