import { FaGithub } from "react-icons/fa";
export const ProjectSection = () => {
  return (
    <section className="pb-[30px]">
      <h1 className="text-white text-2xl pb-4 md:text-3xl">Project</h1>

        <div className="mb-2">
      <h4 className="text-white text-lg flex items-center gap-2 md:text-xl">
        OneStop <a href="https://github.com/JatinTekam/OneStop-Extension"><span className="cursor-pointer"><FaGithub/></span></a>
      </h4>
      <span className="text-sm text-[#6D6D6E] "> OneStop Is <span className="text-white"> Extension</span> Used For
          Managing All Your
          <span className="text-white"> Social Media Links.</span>
        </span>
        </div>

        <div className="mb-2">
      <h4 className="text-white text-lg flex items-center gap-2 md:text-xl">
        Weather-Web <a href="https://github.com/JatinTekam/Weather-Website"><span className="cursor-pointer"><FaGithub/></span></a>
      </h4>
      <span className="text-sm text-[#6D6D6E] "> Current Weather Conditions: Displays the <span className="text-white">temperature, humidity, wind speed, air pressure, visibility,</span> and other relevant metrics in <span className="text-white">real time.</span> Users can access this information for their specific location or any place around the world.
        </span>
        </div>

        <div className="mb-2">
      <h4 className="text-white text-lg flex items-center gap-2 md:text-xl">
        Portfolio<a href="https://github.com/JatinTekam/portfolio-website"><span className="cursor-pointer"><FaGithub/></span></a>
      </h4>
      <span className="text-sm text-[#6D6D6E] "> In this portfolio, you’ll find a showcase of my work that demonstrate my expertise in <span className="text-white">Front End Development & Java Development.</span> 
        </span>
        </div>
    </section>
  );
};
