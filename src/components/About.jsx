import React, { useState, useEffect } from "react";
import ReactTyped from "react-typed";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import the Font Awesome CSS
import Slider from "./Slider";

// --lightest-slate: #ccd6f6;
// green: [#64ffda]

export const About = () => {
  // for animation
  // const [isVisible, setIsVisible] = useState(false);
  // useEffect(() => {

  //   const timer = setTimeout(() => {
  //     setIsVisible(true);
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, []);
  // className={`text-smooth-appear ${isVisible ? 'active' : ''}`}
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen">
      <div className="h-screen flex flex-col w-full justify-center gap-1">
        <h2 className="text-[#ccd6f6] font-bold text-4xl">
          
      <ReactTyped
            strings={[
              "Giga Todua"
            ]}
            typeSpeed={90}
            loop
            backSpeed={50}
            cursorChar="|"
            showCursor={true}
          />
        </h2>
        <h2 className="text-[#ccd6f6] font-medium text-3xl ">
          Front End React Developer
        </h2>
        {/* auto typer */}
        <h2 className="text-[#ccd6f6] text-[17px] mt-3">

        </h2>
        {/* social icobns */}
        <div className="flex flex-row gap-4 mt-4 ">
          <i className="fab fa-github text-[#c7cdd6] text-[25px] hover:text-[#64ffda] cursor-pointer duration-150 ease-in-out"></i>
          <i className="fa-brands fa-x-twitter  text-[#c7cdd6] text-[25px] hover:text-[#64ffda] cursor-pointer duration-150 ease-in-out"></i>
          <i className="fa-brands fa-linkedin text-[#c7cdd6] text-[25px] hover:text-[#64ffda] cursor-pointer duration-150 ease-in-out"></i>
        </div>
        <div className="text-[#64ffda] mt-2">
          <button
            onClick={handleScroll}
            className={`px-8 py-2 mt-2 border-solid border border-[#64ffda] rounded absolute transition-all duration-250 ease-cubic hover:shadow-hover hover:translate-x-[-5px] hover:translate-y-[-5px]`}
          >
            Scroll
            <span className="ml-2">
              <i className="fa-solid fa-arrow-down fa-bounce"></i>
            </span>
          </button>

          <div className="bg-white relative z-[-10] w-32">G</div>
        </div>
      </div>
      {/* about me */}
      <div
        id="about"
        className="flex flex-col text-[#AAAAAA] font-medium mt-10 gap-5"
      >
        <p className="text-[#E6E6E6] uppercase ">About</p>
        <h3>
          {" "}
          Hey there! 👋 I'm Giga Todua, a web enthusiast who caught the coding
          bug at 15. I started my journey with HTML, CSS, and JavaScript through{" "}
          <a
            className=" text-[#E6E6E6] hover:text-[#64ffda] font-bold duration-150 ease-in-out"
            href="https://www.udemy.com/?matchtype=e"
            target="_blank"
          >
            Udemy
          </a>
          . After countless hours of practice, I leaped into React and Tailwind
          CSS, mastering them on{" "}
          <a
            className="text-[#E6E6E6] hover:text-[#64ffda] font-bold duration-150 ease-in-out"
            href="https://www.codecademy.com/learn"
            target="_blank"
          >
            Codecademy
          </a>{" "}
          . Now, at 17, I'm passionate about crafting seamless web experiences.
          Join me in exploring the endless possibilities of the digital world!
        </h3>
      </div>
      <Slider />
      {/* <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quas architecto repellat culpa! Facere nisi nobis ex eius voluptas quas dignissimos numquam, ullam alias? Beatae adipisci maiores ratione quo earum!
          </p>
        </div> */}
    </div>
  );
};
