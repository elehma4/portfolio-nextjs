import React from 'react'
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import hermesImg from '../../public/assets/projects/hermesProj.png'

function hermesApp() {
  return (
    <div className='w-full'>
        <Navbar/>

      <div className='w-screen h-[30vh] lg:w-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />

        <Image src={hermesImg} alt='/' />
        
      </div>

    </div>
  )
}

export default hermesApp