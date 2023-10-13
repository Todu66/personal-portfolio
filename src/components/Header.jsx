import React, { useState } from "react";
import Logo from "./assets/logo-d8b1678f-removebg-preview.png";
import { menuOutline } from "ionicons/icons";
import { closeOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
export const Header = () => {
  const [nav, setNav] = useState(false);
  // filter: blur(5px) brightness(0.7);
  return (
    <div className="flex justify-between items-center ">
      <div className="flex items-center w-16 h-16">
        <img src={Logo} />
      </div>
      {/* <div className=''>
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Projects</h2>
          <h2>Contact</h2>
        </div> */}
      <div onClick={() => setNav(!nav)} className="cursor-pointer">
        
        <IonIcon className="text-[#64ffda] text-[45px]" icon={menuOutline} />
      </div>
      {/* <i class="fa-solid fa-xmark"></i> */}
      {/* --------------------------------------- */}
      {/* Mobile Menu */}
      {nav ? (
        <div className=" filter-blur-brightness fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "flex flex-col gap-16 fixed top-0 right-0 w-[130px] h-screen bg-[#112240] z-10 duration-300 p-2"
            : "fixed top-0 right-[-200%] w-[300px] h-screen bg-[#112240] z-10 duration-300"
        }
      >
        <div className="flex items-center ">

            <IonIcon className="text-[#64ffda] cursor-pointer text-[45px]"  icon={closeOutline}  onClick={() => setNav(!nav)}/>   
        </div>

        <nav className="flex flex-col justify-center text-center gap-5 text-xl text-[#ccd6f6] ">
          <h2 className="hover:text-[#64ffda] cursor-pointer">Home</h2>
          <h2 className="hover:text-[#64ffda] cursor-pointer">About</h2>
          <h2 className="hover:text-[#64ffda] cursor-pointer">Projects</h2>
          <h2 className="hover:text-[#64ffda] cursor-pointer">Contact</h2>
          <button>Resume</button>
        </nav>
      </div>
    </div>
  );
};
