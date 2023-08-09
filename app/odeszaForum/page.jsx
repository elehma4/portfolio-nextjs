import React from 'react'
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import odeszaImg from '../../public/assets/projects/odesza-forum.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

function odeszaForum() {
  return (
    <div className='w-full'>
        <Navbar/>

      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />

        <Image className='absolute z-1' layout='fill' objectFit='cover' src={odeszaImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1400px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Odesza Forums</h2>
            <h3>JavaScript / Express.js / Socket.io</h3>
        </div>
      </div>

      <div className='max-w-[1400px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>Odesza Forums is a web application using Express.js and Socket.io. By leveraging Express.js, I implemented CRUD (Create, Read, Update, Delete) functionality, empowering users to interact with the platform. RESTful API endpoints managed data, enabling users to contribute to forums, share messages, and engage. The integration of Socket.io added a real-time communication layer, enabling instant updates and synchronization across connected users. 
<br /><br />
This project serves as a demonstration of my ability to build scalable web applications. The combination of Express.js, CRUD operations, and Socket.io highlights my understanding in creating dynamic functionality and smooth user experiences. The successful implementation of real-time communication features shows my proficiency in learning cutting-edge technologies to deliver interactive platforms.</p>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          <Link href='https://github.com/ETH1Elohim/band-website'><button className='px-8 py-2 mt-4'>Code</button></Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 h-fit'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> JavaScript </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> CSS (Flexbox) </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Express.js </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Socket.io </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'><p className='underline cursor-pointer'>Back</p></Link>
      </div>

    </div>
  )
}

export default odeszaForum