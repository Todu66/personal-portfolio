import React from 'react'
import ReactTyped from "react-typed";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import the Font Awesome CSS
// --lightest-slate: #ccd6f6;
// green: [#64ffda]

export const About = () => {
  return (
    <div>
        <h2 className='text-[#ccd6f6] font-bold text-4xl'>Giga Todua</h2>
        <h2 className='text-[#ccd6f6] font-medium text-3xl'>Front End React Developer</h2>
        <h2 className='text-[#ccd6f6] text-[17px]'>
          <ReactTyped
          strings={["Im Front End ReactJS Developer", "Experienced in Tailwind Css and APIs", "Im exited to work on your project"]}
          typeSpeed={50}
          loop
          backSpeed={30}
          cursorChar="|"
          showCursor={true}
        />
        </h2>
        <div>
          <i className="fab fa-github text-[#c7cdd6] text-[30px] hover:text-[#64ffda] cursor-pointer"></i>
          <i class="fa-brands fa-x-twitter  text-[#c7cdd6] text-[30px] hover:text-[#64ffda] cursor-pointer"></i>
          <i class="fa-brands fa-linkedin text-[#c7cdd6] text-[30px] hover:text-[#64ffda] cursor-pointer"></i>

        </div>
    </div>
  )
}
