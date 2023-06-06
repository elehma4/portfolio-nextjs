import React from 'react'
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import boxBuddyImg2 from '../../public/assets/projects/boxBuddy-profile1.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

function boxBuddy() {
  return (
    <div className='w-full'>
        <Navbar/>

      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />

        <Image className='absolute z-1' layout='fill' objectFit='cover' src={boxBuddyImg2} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Box Buddy</h2>
            <h3>Javascript / Tailwind CSS / PostgreSQL</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>Box Buddy is a dynamic full-stack fitness app that empowers users in their fitness journey. It offers a range of features and utilizes various programming languages and frameworks to deliver a comprehensive experience. The app's front-end is built with JavaScript and utilizes Tailwind CSS for styling, resulting in a visually appealing and responsive user interface. On the back-end, the app is powered by Node.js and Express.js, providing a robust and scalable server-side architecture.
<br /><br />
For data management, Box Buddy employs Sequelize.js as an ORM (Object-Relational Mapping) library to interact with the PostgreSQL database. This ensures efficient storage and retrieval of user information, posts, and personal records. The app leverages the Passport.js library for authentication and user management, enhancing security and providing a seamless login experience. 
<br /><br />
By incorporating these technologies, Box Buddy delivers a dynamic and interconnected experience for users to create accounts, personalize profiles, create posts, track personal records, connect with friends, and engage with friends in the community. In summary, Box Buddy is a comprehensive full-stack fitness app designed to enhance the fitness journey of its users. </p>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          <Link href='https://github.com/ETH1Elohim/boxBuddy-fullstack'><button className='px-8 py-2 mt-4'>Code</button></Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> JavaScript </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Tailwind CSS </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Node.js </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Express.js </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Sequelize.js </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> PostgreSQL </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Passport.js </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> bcryptjs </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Cookie Session </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Database GUI: Beekeeper </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Cloudinary </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Multer </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> API: API-Ninjas </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'><p className='underline cursor-pointer'>Back</p></Link>
      </div>

    </div>
  )
}

export default boxBuddy