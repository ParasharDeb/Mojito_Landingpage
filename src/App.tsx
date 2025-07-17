
import gsap from 'gsap'
import './App.css'
import { ScrollTrigger,SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger,SplitText)
function App() {
  return(
    <div className='text-3xl text-indigo-300 flex-center h-[100vh]'>
      Hi There
    </div>
  )
}

export default App
