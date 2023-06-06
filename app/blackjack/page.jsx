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
          <p>I designed and developed an engaging Blackjack game using HTML, CSS, and JavaScript. The game features a responsive layout and an intuitive user interface, providing players with an immersive and enjoyable game experience. Leveraging the power of JavaScript, I implemented the game logic, including card dealing, player actions, and dealer AI.
<br /><br />
The game utilizes a standard deck of cards represented by an array of objects, each containing the card's name, value, and image file. Players can interact with the game by clicking on buttons such as "Deal," "Hit," and "Stand." Upon clicking "Deal," the game dynamically generates two random cards for both the player and the dealer, displaying them in their respective hand sections.
<br /><br />
The game employs real-time point tracking for both the player and the dealer, updating the point totals with each dealt card. The player can choose to "Hit" to receive an additional card or "Stand" to end their turn. The dealer follows an AI-controlled strategy to determine their moves. The game also includes special functionality to handle the value of Ace cards, allowing players to choose between a value of 1 or 11.
<br /><br />
This Blackjack game showcases my proficiency in front-end web development and JavaScript programming. It demonstrates my ability to create interactive and dynamic user experiences, implement game logic, and handle real-time data updates.</p>
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