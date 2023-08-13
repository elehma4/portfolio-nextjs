import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import pathwayImg from '../public/assets/projects/pathway-portal.png'
import hermesImg from '../public/assets/projects/hermesProj.png'
import ProjectItem from './ProjectItem'
import boxBuddyImg from '../public/assets/projects/boxBuddy-main.png'
import blackjackImg from '../public/assets/projects/blackjack1.png'
import odeszaImg from '../public/assets/projects/odesza-forum.png'
import portfolioImg from '../public/assets/projects/portfolio-home.png'
import simplifyImg from '../public/assets/projects/SimpFi-AI.png'
import arbImg from '../public/assets/projects/Arbitrum-Analytics.png'


export const Projects = () => {
  return (
    <div id='projects' className='w-full'>

        <div className='max-w-[1400px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
              <ProjectItem title="SimpFi.AI" description="SimpFi.AI is a product where users can automate operational workflows using AI (current)" backgroundImg={simplifyImg} projectUrl='/simplify' />
              <ProjectItem title="Arbitrum Analytics" description="Arbitrum Analytics is designed to provide users with comprehensive insights into various protocols built on the Arbitrum network." backgroundImg={arbImg} projectUrl='/arbitrumAnalytics' />
              <ProjectItem title="Pathway Finance (PATH)" description="Front-End Market Analysis Tool built with React" backgroundImg={pathwayImg} projectUrl='/pathwayFinance' />
              <ProjectItem title='Box Buddy' description='Full-Stack Mobile Fitness Application' backgroundImg={boxBuddyImg} projectUrl='/boxBuddy' className='w-64 h-32' />
              {/* <ProjectItem title='Hermes App' description='Front-End Crypto Application' backgroundImg={hermesImg} projectUrl='/hermesApp' /> */}
              {/* <ProjectItem title='My Portfolio Site' description='Front-End Next.js Portfolio Site' backgroundImg={portfolioImg} projectUrl='/myPortfolio' /> */}
              {/* <ProjectItem title='Odesza Forum' description='Odesza forums with Socket.io' backgroundImg={odeszaImg} projectUrl='/odeszaForum' /> */}
              {/* <ProjectItem title='Blackjack Game' description='Logic-based Blackjack Game' backgroundImg={blackjackImg} projectUrl='/blackjack' /> */}
              
            </div>
        </div>
    </div>
  )
}
