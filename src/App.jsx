import React, { useState, useEffect } from 'react'
import { HeroSection } from './Section/HeroSection'

import { ProjectSection } from './Section/ProjectSection'
import { Learning } from './Section/Learning'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Contact from './Section/Contact'
import Footer from './Section/Footer'
import { Loading } from './Components/Loading'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

   useGSAP(()=>{
      gsap.from(".box",{
        y:300,
       duration:2,
       rotate:170,
        opacity:0
      })
   });

  return (
  <>
    {isLoading ? (
      <Loading />
    ) : (
      <div className=''>
        <HeroSection/>
        <Learning/>
        <ProjectSection/>
        <Contact/>
        <Footer/>
      </div>
    )}
  </>
  )
}

export default App