import React from 'react'
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import arbAnalytics from '../../public/assets/projects/arbChart.png'

function arbitrumAnalytics() {
  return (
    <div className='w-full'>
        <Navbar/>

      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />

        <Image className='absolute z-1' layout='fill' objectFit='cover' src={arbAnalytics} alt='/' />
        <div className='absolute top-[70%] max-w-[1400px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Arbitrum Analytics</h2>
            <h3>React / Next.js / PostgreSQL</h3>
        </div>
      </div>

      <div className='max-w-[1400px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>Arbitrum Analytics is a website designed to provide users with comprehensive insights into various protocols built on the Arbitrum network. The platform allows users to explore and analyze different Arbitrum protocols, offering valuable data such as Total Value Locked (TVL), token prices, trade volumes, and market capitalization (MCAP). By aggregating and presenting this information in an intuitive interface, Arbitrum Analytics enables users to gain a deeper understanding of the performance and trends within the Arbitrum ecosystem.
          </p>
          <Link href='https://www.loom.com/share/09f18a65b5f940c28035d3aec76c2786?sid=cd624968-a89f-4ed4-b4b2-9bf46dada7ec'><button className='px-8 py-2 mt-4 mr-8'>View Demo</button></Link>
          <Link href='https://github.com/ETH1Elohim/Arb-Analytics-NextJS'><button className='px-8 py-2 mt-4 mr-8'>Read Me</button></Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 h-fit'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />JavaScript</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />React</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Next.js</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Redux Toolkit </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Tailwind CSS </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Node.js </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Express.js </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Sequelize.js </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />PostgreSQL</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Passport.js</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Simple JWT</p>
            </div>
          </div>
        </div>
        <Link href='/#projects'><p className='underline cursor-pointer'>Back</p></Link>
      </div>

    </div>
  )
}

export default arbitrumAnalytics