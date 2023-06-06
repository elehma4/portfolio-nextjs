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
          <p>Box Buddy is a dynamic full-stack fitness app that encompasses a range of features to empower users in their fitness endeavors. Individuals can create an account and personalize their profile by adding a profile picture and bio. The app's core functionality revolves around post creation, where users can share their fitness achievements, challenges, and thoughts. These posts are analyzed to identify personal records, enabling users to track their progress and celebrate milestones. The app's PostgreSQL database supports data management, ensuring efficient storage and retrieval of user information, posts, and personal records.
<br /> <br />
Users can connect with others by adding them as friends and engage with their posts by liking and commenting. This social interaction encourages support within the fitness community. The app also includes a notifications page that alerts users about activities related to their posts as well as friend requests. This feature ensures that users stay engaged and informed about the impact of their posts.
<br /> <br />
In summary, Box Buddy is a comprehensive full-stack fitness app designed to enhance the fitness journey of its users. From creating accounts and personalizing profiles to tracking personal records and engaging with the community, the app provides a rich and interactive experience with its interconnected PostgreSQL database and social features. </p>
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