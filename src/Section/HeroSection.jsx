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
        <section className="flex flex-end text-[#6D6D6E] pt-[50px] pb-[30px]  m-auto">
          <div className="w-screen  flex flex-col items-center pt-10 pb-10">
          <div className="w-100 h-90 rounded-xl  overflow-hidden  bg-black img ">
           <img src={img} alt="" className="w-full h-full object-cover opacity-65 "/>
           </div>
           <h1 className="relative right-70 bottom-20 text-4xl text name">Hello I am <span className="text-white">Jatin Tekam </span> </h1>
           <h2 className="relative right-53 bottom-20 text-2xl text name2">I Am <span className="text-white"> Front End Developer </span> And <span className="text-white"> Java Developer </span></h2>
           <h3 className=" text-md text1 text-center">I have a strong passion for IT and technology, and I enjoy learning new things in these fields. Currently Exploring <span className="text-white">  GenAI </span>, And <span className="text-white"> Web Performance.</span></h3>
           <h3 className=" text-md text-center text2">I'm Currently Pursuing <span className="text-white">MCA</span> from Shivaji Science College Nagpur. I'm excited to launch my career in <span className="text-white">Software Development.</span>
           </h3>
           <div className="mt-6 w-70 text-2xl flex justify-between ions">
            <a href="https://www.linkedin.com/in/jatin-tekam/" className="hover:text-white"><SiLinkedin/></a>
            <a href="https://github.com/jatinTekam" className="hover:text-white"><FaGithub/></a>
            <a href="mailto:tekamjatin@gmail.com" className="hover:text-white"><IoMdMail/></a>
            <a href="https://www.instagram.com/jatin.tekam18" className="hover:text-white"><FaInstagram/></a>
           </div>
          </div>
        </section>
        </>
    )
}