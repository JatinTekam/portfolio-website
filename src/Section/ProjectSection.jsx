
import html from "../utils/images/html-min.png";
import css from "../utils/images/css-min.png";
import js from "../utils/images/js-min.png";
import react from "../utils/images/React-icon.svg (1).png";
import redux from "../utils/images/Redux(1).png"
import java from "../utils/images/Java.png"
import tailwind from "../utils/images/tailwind.png";
import spring from "../utils/images/Spring.png";
import postgres from "../utils/images/PostgresSQL.png";
import github from "../utils/images/GitHub.png";
import { HiOutlineExternalLink } from "react-icons/hi";

import gsap from "../utils/images/gsap.png";
import { FaArrowRightLong } from "react-icons/fa6";

export const ProjectSection = () => {
  return (
    <section className="w-full  px-60 section-project">
      <h1 className="text-white ml-20 text-3xl pb-4 project-h1">Project</h1>
      <div className="w-full mobile">
        <div className="top-box-project w-full flex flex-wrap gap-5 mobile-responsive">
          <div className="flex">
            <div className=" w-[35vw] bg-gradient-to-b from-blue-500 text-white rounded-xl p-5 mobile-width">
              <h1 className=" text-3xl">
                Full-stack e-commerce application
              </h1>
              <p className="">
              This project is built with React for the frontend, Java Spring Boot for the backend, and Neon Postgres for the database.
              </p>
              <div className="techstack flex gap-2 mt-5 justify-between ">
                <div className="flex items-center rounded-xl">
                  <div className="w-7">
                    <img src={react} alt="" />
                  </div>
                  <div className="w-7">
                    <img src={redux} alt="" />
                  </div>
                  <div className="w-7">
                    <img src={java} alt="" />
                  </div>
                  <div className="w-7">
                    <img src={spring} alt="" />
                  </div>
                  <div className="w-7">
                    <img src={postgres} alt="" />
                  </div>
                </div>
                 <div className="flex items-center px-2 py-1 rounded-md bg-white">
                <a
                  href="https://github.com/JatinTekam/full-stack-e-commerce"
                  className=" cursor-pointer"
                  >
                  <div className="w-7 flex mr-2">
                    <img src={github} alt=""className="text-white"/>
                  </div>
                </a>
                <div className="text-2xl text-black">
                  <a href="https://riveshopping.netlify.app/"
                  className="cursor-pointer"
                  >
                      <HiOutlineExternalLink/>
                  </a>
                    </div>
              </div>
                  </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-[22vw] bg-[#181818] text-white rounded-xl p-5 hover:bg-white hover:text-[#181818] duration-1000 mobile-width">
              <h1 className=" text-2xl">
                Weather Website using OpenWeatherAPI
              </h1>
              <p className="">
                Current Weather Conditions: Displays the temperature, humidity,
                wind speed, air pressure, visibility.
              </p>
              <div className="techstack  flex gap-5 mt-5 justify-between">
              <div className="flex gap-2 items-center">
                <div className="w-8">
                  <img src={react} alt="" />
                </div>
                <div className="w-8 bg-transparent">
                  <img src={tailwind} alt="" />
                </div>
                <div className="w-7">
                  <img src={js} alt="" />
                </div>
                </div>
               <div className="flex items-center px-2 py-1 rounded-md bg-white">
                <a
                  href="https://github.com/JatinTekam/Weather-Website"
                  className=" cursor-pointer"
                  >
                  <div className="w-7 flex mr-2">
                    <img src={github} alt=""className="text-white"/>
                  </div>
                </a>
                <div className="text-2xl text-black">
                  <a href="https://weather9767.netlify.app/"
                  className="cursor-pointer"
                  >
                      <HiOutlineExternalLink/>
                  </a>
                    </div>
              </div>
              </div>
            </div>
            
          </div>

           <div className="flex">
            <div className=" w-[27vw]   bg-[#181818] text-white rounded-xl p-5 hover:bg-white hover:text-[#181818] duration-1000 mobile-width">
              <h1 className=" text-2xl">
                OneStop-Manage All Your Social Media Links
              </h1>
              <p className="">
                User can add and delete the links. Used localstorage for storing
                all user social media links
              </p>
              <div className="techstack flex gap-2 mt-5 justify-between ">
                <div className="flex items-center">
                  <div className="w-8">
                    <img src={html} alt="" />
                  </div>
                  <div className="w-8">
                    <img src={css} alt="" />
                  </div>
                  <div className="w-7">
                    <img src={js} alt="" />
                  </div>
                </div>
               <div className="flex items-center px-2 py-1 rounded-md bg-white">
                <a
                  href="https://github.com/JatinTekam/OneStop-Extension"
                  className=" cursor-pointer"
                  >
                  <div className="w-7 flex mr-2">
                    <img src={github} alt=""className="text-white"/>
                  </div>
                </a>
                <div className="text-2xl text-black">
                  <a href="https://addons.mozilla.org/en-US/firefox/addon/one-stop/"
                  className="cursor-pointer"
                  >
                      <HiOutlineExternalLink/>
                  </a>
                    </div>
              </div>
              </div>
            </div>
          </div>

      

          <div className="flex">
            <div className=" w-[30vw] bg-gradient-to-t from-blue-500 text-white rounded-xl p-5  mobile-width">
              <h1 className=" text-2xl">Portfolio</h1>
              <p className="">
                In my portfolio, you’ll find a showcase of my work that
                demonstrate my expertise in Front End Development & Java
                Development.
              </p>
              <div className="techstack  flex gap-2 mt-5 justify-between">
              <div className="flex gap-2 items-center">
                <div className="w-8">
                  <img src={react} alt="" />
                </div>
                <div className="w-8 bg-transparent">
                  <img src={tailwind} alt="" />
                </div>
                <div className="w-7">
                  <img src={js} alt="" />
                </div>
                <div className="w-7">
                  <img src={gsap} alt="" />
                </div>
                </div>
               <div className="flex items-center px-2 py-1 rounded-md bg-white">
                <a
                  href="https://github.com/JatinTekam/portfolio-website"
                  className=" cursor-pointer"
                  >
                  <div className="w-7 flex mr-2">
                    <img src={github} alt=""className="text-white"/>
                  </div>
                </a>
                <div className="text-2xl text-black">
                  <a href="https://jatin-tekam.netlify.app/"
                  className="cursor-pointer"
                  >
                      <HiOutlineExternalLink/>
                  </a>
                    </div>
              </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};
