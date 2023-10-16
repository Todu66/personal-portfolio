import React from "react";
import spotifyApp from "../components/assets/spotifyApp.png";
import githubImg from "./assets/GitHub.png";
import reactFood from "./assets/react-food.png";
export const Projects = () => {
  return (
    <div>
      <div className="mt-8">
        <p className="text-[#E6E6E6] uppercase ">Projects</p>
      </div>

      {/* adding projects with icons and description */}
      <div className="flex flex-col gap-3 flex-coltext-[#AAAAAA] font-medium ">
        <div className="flex flex-row items-center gap-2 mt-4">
          <p className=" text-[#E6E6E6]">Spotify PlayList</p>
          <div className="flex flex-row gap-3">
            <a href="https://jamming-react-todu.surge.sh/" target="_blank">
              <i className="fa-solid fa-arrow-up-right-from-square text-[#c7cdd6] text-[15px] cursor-pointer hover:text-[#64ffda] "></i>
            </a>
            <a href="https://github.com/Todu66/jaming" target="_blank">
              <i className="fab fa-github text-[#c7cdd6] text-[18px] hover:text-[#64ffda] cursor-pointer duration-150 ease-in-out"></i>
            </a>
          </div>
        </div>
        <p className="text-[#AAAAAA]">
          Discover the power of Spotify API integration with this ReactJS
          project. This application allows you to seamlessly log in to your
          Spotify account, search for music, and add to your playlist!
        </p>
        <div className="w-50 border-solid border-2 border-[#64ffda] rounded opacity-50 ">
          <a href="https://github.com/Todu66/jaming" target="_blank">
            <img className="" src={spotifyApp} />
          </a>
        </div>
        {/* adding projects with icons and description */}
        <div className="flex flex-row items-center gap-2 mt-4">
          <p className=" text-[#E6E6E6]">GitHub User Search</p>
          <div className="flex flex-row gap-3">
            <a href="https://jamming-react-todu.surge.sh/" target="_blank">
              <i className="fa-solid fa-arrow-up-right-from-square text-[#c7cdd6] text-[15px] cursor-pointer hover:text-[#64ffda] "></i>
            </a>
            <a href="https://github.com/Todu66/Github_Search" target="_blank">
              <i className="fab fa-github text-[#c7cdd6] text-[18px] hover:text-[#64ffda] cursor-pointer duration-150 ease-in-out"></i>
            </a>
          </div>
        </div>
        <p className="text-[#AAAAAA]">
          Developed a robust and user-friendly web application leveraging
          GitHub's API to create a powerful user search tool. This project
          involved creating a seamless user interface where users can input a
          GitHub username and view the information of that user.
        </p>
        <div className="w-50 border-solid border-2 border-[#64ffda] rounded  opacity-50">
          <a href="https://github.com/Todu66/Github_Search" target="_blank">
            <img className="" src={githubImg} />
          </a>
        </div>

        {/* adding projects with icons and description */}
        <div className="flex flex-row items-center gap-2 mt-4">
          <p className=" text-[#E6E6E6]">React Food App</p>
          <div className="flex flex-row gap-3">
            <a href="https://react-food-app-ashy.vercel.app" target="_blank">
              <i className="fa-solid fa-arrow-up-right-from-square text-[#c7cdd6] text-[15px] cursor-pointer hover:text-[#64ffda] "></i>
            </a>
            <a href="https://github.com/Todu66/react-food-app" target="_blank">
              <i className="fab fa-github text-[#c7cdd6] text-[18px] hover:text-[#64ffda] cursor-pointer duration-150 ease-in-out"></i>
            </a>
          </div>
        </div>
        <p className="text-[#AAAAAA]">
          Developed a dynamic and user-friendly web application focused on
          simplifying food exploration. The app allows users to filter a diverse
          range of foods based on price and types, providing a tailored culinary
          experience.
        </p>
        <div className="w-50 border-solid border-2 border-[#64ffda] rounded  opacity-50">
          <a href="https://react-food-app-ashy.vercel.app/" target="_blank">
            <img className="" src={reactFood} />
          </a>
        </div>
      </div>
    </div>
  );
};
