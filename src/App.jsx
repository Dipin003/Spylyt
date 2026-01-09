import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className='h-dvh border-red-900'>

      </div>
    </main>
  )
}

export default App