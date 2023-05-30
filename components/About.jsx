import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>

        <div className='max-w-[1240px] m-auto md:grid gird-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>I am an enthusiastic full-stack software engineer with a passion for decentralized finance and the transformational potential of blockchain technology. I am looking to utilize my strengths in web development and deep understanding of blockchain technologies to contribute to the evolution of the decentralized digital economy and make a positive impact in a DeFi/Crypto organization.</p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' width={200} height={200} src="../assets/profpic.jpeg" alt="/"/>
            </div>
        </div>

    </div>
  )
}

export default About