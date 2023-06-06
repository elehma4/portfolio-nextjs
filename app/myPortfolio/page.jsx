import React from 'react'
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import portfolioImg2 from '../../public/assets/projects/portfolio-skills.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

function myPortfolio() {
  return (
    <div className='w-full'>
        <Navbar/>

      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />

        <Image className='absolute z-1' layout='fill' objectFit='cover' src={portfolioImg2} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>My Portfolio</h2>
            <h3>React / Next.js / Tailwind CSS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>My portfolio is a dynamic and visually appealing website built using React, Next.js, and Tailwind CSS. It showcases my skills, projects, and contact information in an organized and user-friendly manner. With a focus on responsive design, the portfolio ensures a seamless experience across different devices.
<br /><br />
The portfolio utilizes React as the foundation, providing a component-based architecture for efficient development and easy maintenance. Next.js enhances the performance and SEO capabilities of the website, making it fast and search engine friendly. Tailwind CSS offers a comprehensive set of utility classes, enabling rapid styling and customization.
<br /><br />
The portfolio consists of several sections, including a main section that introduces me and highlights my expertise, a projects section that showcases my latest projects with images and descriptions, a skills section that highlights the technologies and tools I'm proficient in, and a contact section where visitors can easily get in touch with me. The website incorporates smooth transitions, interactive elements, and a cohesive color scheme to create an engaging and memorable experience.
<br /><br />
Overall, my portfolio built with React, Next.js, and Tailwind CSS serves as a comprehensive showcase of my skills, projects, and contact information. It represents my proficiency in front-end development and demonstrates my ability to create visually appealing and responsive websites.</p>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          <Link href='https://github.com/ETH1Elohim/portfolio-nextjs'><button className='px-8 py-2 mt-4'>Code</button></Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Next.js </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Tailwind CSS </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Yarn </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'><p className='underline cursor-pointer'>Back</p></Link>
      </div>

    </div>
  )
}

export default myPortfolio