import Image from 'next/image';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import { Projects } from '../components/Projects';
import Contact from '../components/Contact';
import './globals.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}
