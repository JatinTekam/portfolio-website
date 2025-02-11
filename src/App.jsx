import React from 'react'
import { HeroSection } from './Section/HeroSection'
import { Information } from './Section/Information'
import { ProjectSection } from './Section/ProjectSection'
import { Learning } from './Section/Learning'

function App() {
  return (
    <main className='bg-[#030712] h-[100%] m-auto border-white font-[MonaSans] px-[30px] pt-7 md:px-[150px] sm:px-[90px]'>
      <HeroSection/>
      <Information/>
      <ProjectSection/>
      <Learning/>
    </main>
  )
}

export default App