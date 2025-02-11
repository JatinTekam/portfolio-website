import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


export const HeroSection=()=>{


    return(
        <>
        <section className="flex flex-end text-[#6D6D6E] pt-[100px] pb-[30px]  m-auto">
            <div className=" w-full flex items-center justify-between">
            <div>  
           <h1 className="text-xl pb-1 text-white md:text-3xl">
            Jatin Tekam
           </h1>
           </div>
           <div>
           <figure className="flex gap-5 text-xl  md:text-2xl">
            <a href="https://www.linkedin.com/in/jatin-tekam/" className="hover:text-white" target="_blank" rel="noopener noreferrer"><SiLinkedin className="cursor-pointer"/></a>
            <a href="https://github.com/jatinTekam" className="hover:text-white"  > <FaGithub className="cursor-pointer"/></a>
            <a href="mailto:tekamjatin@gmail.com" className="hover:text-white" ><IoMdMail className="cursor-pointer"/></a>
            <a href="https://www.instagram.com/jatin.tekam18/?igsh=MTQwMHhxaTd4Y2NkZg%3D%3D#" className="hover:text-white" ><FaInstagram className="cursor-pointer"/></a>
           </figure>
            </div>
            </div>
        </section>
        </>
    )
}