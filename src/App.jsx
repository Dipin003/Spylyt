import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import MessageSection from './components/MessageSection';
import FlavorSection from './components/FlavorSection';

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  return (
    <main>
      <Navbar />
      <HeroSection />
      <MessageSection />
      <FlavorSection />
    </main>
  )
}

export default App