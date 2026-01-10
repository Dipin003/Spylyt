import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import MessageSection from './components/MessageSection';
import FlavorSection from './components/FlavorSection';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    })
  })

  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id='smooth-content'>
          <HeroSection />
          <MessageSection />
          <FlavorSection />
        </div>
      </div> 
    </main>
  )
}

export default App