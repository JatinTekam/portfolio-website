
import html from "../utils/images/html-min.png";
import css from "../utils/images/css-min.png";
import js from "../utils/images/js-min.png";
import react from "../utils/images/React-icon.svg (1).png";
import tailwind from "../utils/images/tailwind.png";

import gsap from "../utils/images/gsap.png";
import { FaArrowRightLong } from "react-icons/fa6";

export const ProjectSection = () => {
  return (
    <section className="w-full  px-60 section-project">
      <h1 className="text-white ml-20 text-2xl pb-4 project-h1">Project</h1>
      <div className="w-full pl-50 mobile">
        <div className="top-box-project w-full pl-10 flex flex-col gap-5 mobile-responsive">
          <div className="flex">
            <div className=" w-[50vw]  bg-[#181818] text-white rounded-xl p-5 hover:bg-white hover:text-[#181818] duration-1000 mobile-width">
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
                <a
                  href="https://github.com/JatinTekam/OneStop-Extension"
                  className=" border rounded-3xl cursor-pointer p-4"
                >
                  <div className="arrow ">
                    <FaArrowRightLong className=" " />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-[50vw] bg-[#181818] text-white rounded-xl p-5 hover:bg-white hover:text-[#181818] duration-1000 mobile-width">
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
              <a
                href="https://github.com/JatinTekam/Weather-Website"
                className=" border rounded-3xl cursor-pointer p-4"
              >
                <div className="arrow ">
                  <FaArrowRightLong className=" " />
                </div>
              </a>
              </div>
            </div>
            
          </div>

          <div className="flex">
            <div className=" w-[50vw] bg-[#181818] text-white rounded-xl p-5 hover:bg-white hover:text-[#181818] duration-1000 mobile-width">
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
              <a
                href="https://github.com/JatinTekam/portfolio-website"
                className=" border rounded-3xl cursor-pointer p-4"
              >
                <div className="arrow ">
                  <FaArrowRightLong className=" " />
                </div>
              </a>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};
