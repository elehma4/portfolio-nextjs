import React from 'react'
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import pathwayPortal from '../../public/assets/projects/pathway-portal.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

function boxBuddy() {
  return (
    <div className='w-full'>
        <Navbar/>

      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />

        <Image className='absolute z-1' layout='fill' objectFit='cover' src={pathwayPortal} alt='/' />
        <div className='absolute top-[70%] max-w-[1400px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Pathway Finance (PATH)</h2>
            <h3>React / Redux / Tailwind CSS</h3>
        </div>
      </div>

      <div className='max-w-[1400px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>Pathway Finance (PATH) is an innovative front-end application for analyzing financial market data, constructed using JavaScript, React, Redux, Tailwind CSS, and Lightweight Charts by TradingView. This one-week project embodies the effective use of modern web technologies for building responsive, data-intensive applications.
<br /><br />
The entry point of the application, the 'Main.jsx' component, is built using React and demonstrates the conditional rendering aspect of this library, showcasing its ability to dynamically manage user interactions. The Trading Portals, a central component of the application, are designed to fetch real-time data from the Alphavantage API and display it using an interactive candlestick chart, offering users comprehensive and current trading data.
<br /><br />
A variety of additional components, including 'Charts.jsx', 'Indices.jsx', 'Stocks.jsx', and 'Crypto.jsx', are responsible for rendering market-specific assets and illustrating trading data. These components leverage React's hooks and state management capabilities to manipulate chart data and handle window resize events for a responsive design. The 'News.jsx' component fetches and displays latest financial market news using the Alphavantage API, while the 'NavBar' component provides smooth, scroll-based navigation, demonstrating React's versatility and efficiency in handling various user interfaces and interactions.
<br /><br />
State management is handled using Redux Toolkit's 'favSlice', providing an intuitive way of handling favorites state and showcasing the simplicity and efficiency of Redux for state management in large applications. Overall, Pathway Finance serves as a testament to the successful application of modern front-end technologies and libraries to create a complex, responsive, and data-driven application. </p>
          {/* <Link href='https://pathway-finance.netlify.app/'><button className='px-8 py-2 mt-4 mr-8'>Demo</button></Link> */}
          <Link href='https://github.com/ETH1Elohim/pathway-finance-reactjs'><button className='px-8 py-2 mt-4'>Read Me</button></Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 h-fit'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> JavaScript </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Redux (RTK) </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Tailwind CSS </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Lightweight Charts by TradingView </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> APIs: Alpha Vantage & Twelve Data </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'><p className='underline cursor-pointer'>Back</p></Link>
      </div>

    </div>
  )
}

export default boxBuddy