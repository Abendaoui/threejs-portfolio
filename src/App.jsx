/* eslint-disable no-unused-vars */
import { BrowserRouter } from 'react-router-dom'
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Tech,
  Works,
  Hero,
  Navbar,
  StarsCanvas,
} from './component'
const App = () => {
  return (
    <BrowserRouter>
      <main className='relative bg-primary z-0'>
        <article className=' bg-hero-pattern bg-center bg-cover bg-no-repeat'>
          <Navbar />
          <Hero />
        </article>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <article className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </article>
      </main>
    </BrowserRouter>
  )
}

export default App
