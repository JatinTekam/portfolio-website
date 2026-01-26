
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
    <section className="w-full px-4 lg:px-40 section-project py-20">
      <h1 className="text-white ml-4 lg:ml-20 text-4xl font-bold pb-12 project-h1">Featured Projects</h1>
      <div className="w-full mobile">
        <div className="top-box-project w-full flex flex-wrap gap-8 mobile-responsive justify-center">
          <div className="flex w-full lg:w-auto justify-center">
            <div className=" w-full lg:w-[35vw] bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white rounded-2xl p-6 mobile-width shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <h1 className=" text-3xl font-bold mb-3">
                Full-stack E-commerce
              </h1>
              <p className="text-gray-100 text-base leading-relaxed mb-4">
              Built with React, Java Spring Boot, and Neon Postgres for a complete e-commerce solution.
              </p>
              <div className="techstack flex gap-3 mt-6 justify-between items-center">
                <div className="flex items-center gap-2 bg-white bg-opacity-20 rounded-xl p-2">
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
                 <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors">
                <a
                  href="https://github.com/JatinTekam/full-stack-e-commerce"
                  className=" cursor-pointer flex items-center gap-1"
                  >
                  <div className="w-5">
                    <img src={github} alt=""className="text-white"/>
                  </div>
                  Code
                </a>
                <div className="text-2xl">
                  <a href="https://riveshopping.netlify.app/"
                  className="cursor-pointer hover:rotate-45 transition-transform"
                  >
                      <HiOutlineExternalLink/>
                  </a>
                    </div>
              </div>
                  </div>
            </div>
          </div>

          <div className="flex w-full lg:w-auto justify-center">
            <div className="w-full lg:w-[22vw] bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-2xl p-6 mobile-width shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:from-white hover:to-gray-100 hover:text-gray-900">
              <h1 className=" text-2xl font-bold mb-3">
                Weather Website
              </h1>
              <p className="text-gray-100 hover:text-gray-700 text-base leading-relaxed mb-4">
                Real-time weather data with temperature, humidity, wind speed, and air pressure using OpenWeatherAPI.
              </p>
              <div className="techstack  flex gap-5 mt-6 justify-between items-center">
              <div className="flex gap-2 items-center bg-white bg-opacity-20 rounded-xl p-2">
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
               <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors">
                <a
                  href="https://github.com/JatinTekam/Weather-Website"
                  className=" cursor-pointer flex items-center gap-1"
                  >
                  <div className="w-5">
                    <img src={github} alt=""className="text-white"/>
                  </div>
                  Code
                </a>
                <div className="text-2xl">
                  <a href="https://weather9767.netlify.app/"
                  className="cursor-pointer hover:rotate-45 transition-transform"
                  >
                      <HiOutlineExternalLink/>
                  </a>
                    </div>
              </div>
              </div>
            </div>
            
          </div>

           <div className="flex w-full lg:w-auto justify-center">
            <div className=" w-full lg:w-[27vw] bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-2xl p-6 mobile-width shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:from-white hover:to-gray-100 hover:text-gray-900">
              <h1 className=" text-2xl font-bold mb-3">
                OneStop - Social Links Manager
              </h1>
              <p className="text-gray-100 hover:text-gray-700 text-base leading-relaxed mb-4">
                Manage all your social media links in one place with localStorage for persistence.
              </p>
              <div className="techstack flex gap-2 mt-6 justify-between items-center">
                <div className="flex items-center bg-white bg-opacity-20 rounded-xl p-2">
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
               <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors">
                <a
                  href="https://github.com/JatinTekam/OneStop-Extension"
                  className=" cursor-pointer flex items-center gap-1"
                  >
                  <div className="w-5">
                    <img src={github} alt=""className="text-white"/>
                  </div>
                  Code
                </a>
                <div className="text-2xl">
                  <a href="https://addons.mozilla.org/en-US/firefox/addon/one-stop/"
                  className="cursor-pointer hover:rotate-45 transition-transform"
                  >
                      <HiOutlineExternalLink/>
                  </a>
                    </div>
              </div>
              </div>
            </div>
          </div>

      

          <div className="flex w-full lg:w-auto justify-center">
            <div className=" w-full lg:w-[30vw] bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white rounded-2xl p-6 mobile-width shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <h1 className=" text-2xl font-bold mb-3">Portfolio Website</h1>
              <p className="text-gray-100 text-base leading-relaxed mb-4">
                My personal portfolio showcasing expertise in Front End and Java Development with smooth animations.
              </p>
              <div className="techstack  flex gap-2 mt-6 justify-between items-center">
              <div className="flex gap-2 items-center bg-white bg-opacity-20 rounded-xl p-2">
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
               <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors">
                <a
                  href="https://github.com/JatinTekam/portfolio-website"
                  className=" cursor-pointer flex items-center gap-1"
                  >
                  <div className="w-5">
                    <img src={github} alt=""className="text-white"/>
                  </div>
                  Code
                </a>
                <div className="text-2xl">
                  <a href="https://jatin-tekam.netlify.app/"
                  className="cursor-pointer hover:rotate-45 transition-transform"
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
