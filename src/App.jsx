import React from 'react'
import { HeroSection } from './Section/HeroSection'
import { Information } from './Section/Information'
import { ProjectSection } from './Section/ProjectSection'
import { Learning } from './Section/Learning'

function App() {
  return (
    <main className='bg-[#030712] h-[800px] m-auto border-white font-[MonaSans] px-[180px] pt-7'>
      <HeroSection/>
      <Information/>
      <ProjectSection/>
      <Learning/>
    </main>
  )
}

export default App