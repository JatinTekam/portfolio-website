import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import img from "../utils/images/img1.jpg"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const HeroSection=()=>{

    useGSAP(()=>{
        const timeline=gsap.timeline();
        timeline.from(".img",{
          x:400,
         duration:1,
          opacity:0
        })
        timeline.from(".text",{
          y:400,
         duration:1,
          opacity:0
        })
        timeline.from(".text1",{
          y:400,
         duration:1,
          opacity:0
        })
        timeline.from(".text2",{
          y:400,
         duration:1,
          opacity:0
        })
        timeline.from(".ions",{
          y:400,
         duration:1,
          opacity:0
        })
     });

    return(
        <>
        <section className="flex flex-end text-[#A0A0A2] pt-[80px] pb-[60px] m-auto min-h-[90vh] flex items-center">
          <div className="w-screen flex flex-col lg:flex-row items-center justify-center gap-16 pt-10 pb-10 px-4 lg:px-20">
          <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden img shadow-2xl flex-shrink-0">
           <img src={img} alt="Jatin Tekam" className="w-full h-full object-cover opacity-50 hover:opacity-70 transition-opacity duration-300"/>
           </div>
           <div className="flex flex-col items-start gap-8 max-w-2xl">
           <div>
             <h1 className="text-5xl lg:text-6xl font-bold text name mb-2">Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Jatin Tekam</span></h1>
             <h2 className="text-3xl lg:text-4xl font-semibold text name2 text-white">Full Stack & Java Developer</h2>
           </div>
           <h3 className="text-lg text1 leading-relaxed text-gray-300 max-w-lg">I have a strong passion for IT and technology, and I enjoy learning new things. Currently exploring <span className="text-blue-300 font-semibold">GenAI</span> and <span className="text-blue-300 font-semibold">Web Performance</span> optimization.</h3>
           <h3 className="text-base text2 text-gray-400 max-w-lg">Pursuing <span className="text-white font-semibold">MCA</span> from Shivaji Science College Nagpur. Excited to launch my career in <span className="text-white font-semibold">Software Development</span>.</h3>
           <div className="mt-4 flex gap-8 text-3xl ions">
            <a href="https://www.linkedin.com/in/jatin-tekam/" className="text-blue-400 hover:text-blue-300 hover:scale-110 transition-all duration-300" aria-label="LinkedIn"><SiLinkedin/></a>
            <a href="https://github.com/jatinTekam" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300" aria-label="GitHub"><FaGithub/></a>
            <a href="mailto:tekamjatin@gmail.com" className="text-red-400 hover:text-red-300 hover:scale-110 transition-all duration-300" aria-label="Email"><IoMdMail/></a>
            <a href="https://www.instagram.com/jatin.tekam18" className="text-pink-400 hover:text-pink-300 hover:scale-110 transition-all duration-300" aria-label="Instagram"><FaInstagram/></a>
           </div>
           </div>
          </div>
        </section>
        </>
    )
}