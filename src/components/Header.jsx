import React, { useState } from "react";
import Logo from "./assets/logo-d8b1678f-removebg-preview.png";
import { menuOutline } from "ionicons/icons";
import { closeOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

export const Header = () => {
  const [nav, setNav] = useState(false);
  const [rotateMenuIcon, setRotateMenuIcon] = useState(false);

  const handleNavToggle = () => {
    setNav(!nav);
    setRotateMenuIcon(!rotateMenuIcon);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center w-16 h-16 ">
        <img src={Logo} alt="Logo" />
      </div>

      <div onClick={handleNavToggle} className="cursor-pointer z-20">
        <IonIcon
          className={`text-[#64ffda] text-[45px] rotate-icon ${
            rotateMenuIcon ? "rotate-reverse" : ""
          }`}
          icon={nav ? closeOutline : menuOutline}
        />
      </div>

      {nav && (
        <div className="fixed w-full h-screen z-[2] top-0 left-0  bg-[#0a192f] bg-opacity-50"></div>
      )}

      <div
        className={
          nav
            ? "flex flex-col justify-center gap-16 fixed top-0 right-0 w-[200px] h-screen bg-[#112240] z-10 duration-300 p-2 "
            : "flex flex-col justify-center gap-16 fixed  top-0 right-[-200%] w-[300px] h-screen bg-[#112240]  duration-1000"
        }
      >
        {/* <div className="flex justify-end">
          <IonIcon
            className={`text-[#64ffda] cursor-pointer text-[45px] ${
              rotateMenuIcon ? "rotate-icon" : ""
            }`}
            icon={closeOutline}
            onClick={handleNavToggle}
          />
        </div> */}

        <nav className="flex flex-col mb-12 justify-center text-center gap-5 text-xl text-[#ccd6f6]">
          <h2 className="hover:text-[#64ffda] cursor-pointer">Home</h2>
          <h2 className="hover:text-[#64ffda] cursor-pointer">About</h2>
          <h2 className="hover:text-[#64ffda] cursor-pointer">Projects</h2>
          <h2 className="hover:text-[#64ffda] cursor-pointer">Contact</h2>
          {/* {`px-4 py-2 border-solid border border-[#64ffda] rounded transition-all duration-250 ease-cubic hover:shadow-hover hover:translate-x-[-5px] hover:translate-y-[-5px]`} */}
          <button className=" px-4 py-2 w-[80%] mx-auto border-solid border border-[#64ffda] text-[#64ffda] rounded transition-all duration-250 ease-cubic hover:shadow-hover hover:translate-x-[-5px] hover:translate-y-[-5px]">
            Resume
            <span className="ml-2">
              <i className="fa-solid fa-download text-[18px]"></i>
            </span>
          </button>
        </nav>
      </div>
    </div>
  );
};
