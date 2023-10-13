import React from 'react'
import spotifyApp from "../components/assets/spotifyApp.png"
export const Projects = () => {
  return (
    <div>
        <div className='mt-8'>
            <p className="text-[#E6E6E6] uppercase ">Projects</p>   

        </div>

        <div className='flex flex-col gap-3 flex-coltext-[#AAAAAA] font-medium'>
            <div className='flex flex-row items-center gap-2 mt-4'>
                

                <p className=' text-[#E6E6E6]'>Spotify PlayList</p>
                <a href='https://jamming-react-todu.surge.sh/' target='_blank'>
                 <i className="fa-solid fa-arrow-up-right-from-square text-[#c7cdd6] text-[15px] cursor-pointer hover:text-[#64ffda] "></i>
                </a>
                
    
            </div>
            <p className='text-[#AAAAAA]'>Discover the power of Spotify API integration with this ReactJS project. This application allows you to seamlessly log in to your Spotify account, search for music, and add to your playlist!</p>
            <div className='w-50 border-solid border-2 border-[#64ffda] rounded'>
                <a href='https://jamming-react-todu.surge.sh/' target='_blank'>
                <img className='' src={spotifyApp}/>
                </a>
                
            </div>
        </div>
    </div>
  )
}