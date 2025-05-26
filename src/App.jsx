import React from 'react'
import { HeroSection } from './Section/HeroSection'

import { ProjectSection } from './Section/ProjectSection'
import { Learning } from './Section/Learning'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Contact from './Section/Contact'
import Footer from './Section/Footer'

function App() {
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
  <div className=''>
    <HeroSection/>
    <Learning/>
    <ProjectSection/>
    <Contact/>
    <Footer/>
  </div>
  </>
  )
}

export default App