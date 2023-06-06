import React from 'react'
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import hermesImg from '../../public/assets/projects/hermesProj.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

function hermesApp() {
  return (
    <div className='w-full'>
        <Navbar/>

      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10' />

        <Image className='absolute z-1' layout='fill' objectFit='cover' src={hermesImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Hermes Crypto App</h2>
            <h3>Javascript / APIs</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>Hermes App is a front-end crypto application designed to facilitate the swapping of cryptocurrencies. With a simplistic and user-friendly interface, users can track, manage, and stay updated on a variety of supported assets. The app consists of several key pages, including a swap page for real-time conversions, a tokens page displaying prices and charts, an insights page fetching news articles, and a portfolio page for asset management. Implemented with JavaScript, HTML, and CSS, the application integrates with CoinGecko and News APIs to provide accurate data. Currently in the beta stage, Hermes App offers a beginner-friendly platform for simulated trading and asset management.
<br /><br />
Hermes App combines my personal passion for decentralized finance and our commitment to creating a user-friendly experience for beginners. With a focus on consistency and attention to detail, the project ensures a seamless and visually appealing interface across all pages. The collaboration between Hunter and I resulted in efficient task allocation, smooth development, and a mutual leveraging of each other's strengths. The application offers accurate trading conversions, price charts, news articles, and a portfolio tracker, providing users with a realistic and engaging cryptocurrency experience.</p>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          <Link href='https://github.com/ETH1Elohim/front-end-project'><button className='px-8 py-2 mt-4'>Code</button></Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 h-fit'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> JavaScript </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> HTML </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> CSS (FlexBox) </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Chart.js </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Coingecko API </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Google News API </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'><p className='underline cursor-pointer'>Back</p></Link>
      </div>

    </div>
  )
}

export default hermesApp