import img1 from "../utils/images/html-min.png"
import img2 from "../utils/images/css-min.png"
import img3 from "../utils/images/java-logo-1.png"
import img4 from "../utils/images/express.png"
import img5 from "../utils/images/js-min.png"
import img6 from "../utils/images/MySQL-min.png"
import img7 from "../utils/images/node-min.png"
import img8 from "../utils/images/mongodb-min.png"
import img9 from "../utils/images/github-min (1).png"
import img10 from "../utils/images/React-icon.svg (1).png"
import img11 from "../utils/images/tailwind.png"
import img12 from "../utils/images/redux.png"
import img13 from "../utils/images/figma-min.png"
import img14 from "../utils/images/postman.png"
import img15 from "../utils/images/gsap.png"
import img16 from "../utils/images/Spring.png";
import img17 from "../utils/images/Docker.png";

import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const Learning=()=>{
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        gsap.from(".section .skill-slide .imges",{
            y:200,
            scale:0,
            duration:1,
            opacity:0,
            scrollTrigger:{
                trigger:".section .skill-slide .imges",
                scroller:"body",
                start:"top 100%",
                end:"top 103%",
                // markers:true,
                scrub:2

            }
        })
    })


    const images=[img1,img2,img3,img4,,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17];
    


    return(
        <section className="w-full px-80 mb-6 section">
             <h1 className="text-white text-3xl pb-4">My Insights</h1>

             <div className="skill">
                <div className=" skill-slide  flex flex-wrap gap-2  ">
                    {
                        images.map((img,index)=>(
                            <div className="w-15 h-15 bg-white p-2  rounded-xl imges" key={index}>
                              <img src={img} alt="" className="object-contain w-full h-full"/>
                            </div>
                        ))
                    }
                   
                </div>
             </div>

           
          
          

        </section>
    )
}