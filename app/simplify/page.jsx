import React from 'react'
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import simplifyImg from '../../public/assets/projects/SimpFi-AI.png'

function boxBuddy() {
  return (
    <div className='w-full'>
        <Navbar/>

      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />

        <Image className='absolute z-1' layout='fill' objectFit='cover' src={simplifyImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1400px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>SimpFi.AI</h2>
            <h3>TypeScript / Next.js / React</h3>
        </div>
      </div>

      <div className='max-w-[1400px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>I am currently working alongside a senior engineer at DecOps developing a product called SimpFi.Ai where users can automate operational workflows using AI. I am doing a lot of client-side development with the UI and UX for this project. The core technologies of this application are Typescript, Next.js, React, and Tailwind. If you have any questions about this position, please send me an inquiry in the contact form. 
          </p>
          <Link href='https://simply-fi-alpha.vercel.app/'><button className='px-8 py-2 mt-4 mr-8'>View Site</button></Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 h-fit'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> TypeScript </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Tailwind CSS </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React Flow </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> shadcn/ui </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> S3 Buckets (AWS) </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> PostgreSQL (Prisma) </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'><p className='underline cursor-pointer'>Back</p></Link>
      </div>

    </div>
  )
}

export default boxBuddy