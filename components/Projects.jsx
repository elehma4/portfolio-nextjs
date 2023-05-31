import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import hermesImg from '../public/assets/projects/hermesProj.png'
import ProjectItem from './ProjectItem'
import boxBuddyImg from '../public/assets/projects/hermesProj.png'
import blackjackImg from '../public/assets/projects/hermesProj.png'
import odeszaImg from '../public/assets/projects/hermesProj.png'


export const Projects = () => {
  return (
    <div id='projects' className='w-full'>

        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

            <ProjectItem title='Hermes App' description='Front-End Crypto Application' backgroundImg={hermesImg} projectUrl='/hermesApp' />
            <ProjectItem title='Box Buddy' description='Full-Stack Mobile Fitness Application' backgroundImg={hermesImg} projectUrl='/boxBuddy' />
            <ProjectItem title='Blackjack Game' description='Front-End Logic-based Blackjack Game' backgroundImg={hermesImg} projectUrl='/blackjack' />
            <ProjectItem title='Odesza Forum' description='Full-Stack Odesza Fan Forum' backgroundImg={hermesImg} projectUrl='/odeszaForum' />

            </div>
        </div>
    </div>
  )
}
