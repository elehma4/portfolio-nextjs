import Image from 'next/image';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <Skills/>

    </div>
  )
}
