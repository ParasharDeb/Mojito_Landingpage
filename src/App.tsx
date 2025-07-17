
import gsap from 'gsap'
import './App.css'
import { ScrollTrigger,SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/hero'
gsap.registerPlugin(ScrollTrigger,SplitText)
function App() {
  return(
    <main>
      <Navbar/> 
      <Hero/>
      <div className='min-h-dvh bg-black'>haha</div>
    </main>
  )
}

export default App
