import React from 'react'
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import blackjackImg from '../../public/assets/projects/blackjack1.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

function blackjack() {
  return (
    <div className='w-full'>
        <Navbar/>

      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />

        <Image className='absolute z-1' layout='fill' objectFit='cover' src={blackjackImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Blackjack Game</h2>
            <h3>Javascript</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>This Blackjack Game is a front-end project that replicates the popular casino game. This project employs HTML, CSS, and JavaScript to create an interactive and visually appealing user experience. Users can deal, hit, or stand with the same rules as a traditional blackjack game, utilizing a deck of cards represented by an array of objects in the JavaScript code. Each card object features a name, value, and associated image file. Users can even decide the value of an Ace in real-time. The application handles different game scenarios such as blackjack, bust, and push outcomes, showcasing my proficiency in JavaScript logic and DOM manipulation.</p>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          <Link href='https://github.com/ETH1Elohim/blackjack-game'><button className='px-8 py-2 mt-4'>Code</button></Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> JavaScript </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> HTML </p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> CSS (Flexbox) </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'><p className='underline cursor-pointer'>Back</p></Link>
      </div>

    </div>
  )
}

export default blackjack