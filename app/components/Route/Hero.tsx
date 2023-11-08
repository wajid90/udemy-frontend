import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import image1 from "../../../assets/pexels-photo-164595.jpeg";
import image2 from "../../../assets/pexels-photo-265004.jpeg";

import image3 from "../../../assets/pexels-photo-271655.jpeg";



type Props = {}

const Hero: React.FC<Props> = (props) => {
  return (
    <div className='w-full 800px:flex items-center dark:bg-black bg-white'>
      <div className="800px:w-[700px] 1000px:w-[850px] 1100px:w-[900px] 1500px:w-[900px] bg-white dark:bg-slate-900 w-full h-[552px] 1500px:h-[650px] relative mx-auto">
        <div className="absolute top-[20px] left-[80px] 800px:left-[30px]  w-[70%] 800px:w-[90%] h-[85%]  z-[80000] rounded-full hero_animation">
          <Image
            src={require("../../../assets/heroImages.png")}
            alt="hero images"
            className="object-contain w-full h-full 800px:w-[75%]  1100px:max-w-[80%] 1500px:max-w-[80%] mx-auto z-[10]"
          />
        </div>
      </div>
      <div className="w-full h-[552px] bg-white dark:bg-slate-900 1500px:h-[600px] relative">
        <div className="absolute top-[100px] left-[100px] w-[60%] 800px:w-[75%] h-[85%]  mx-auto ">
          <h3 className='text-[28px] font-bold text-black dark:text-white'>Improve Your Online Learing Experience Better Instantly</h3>
          <p className="text-[12px] dark:text-white text-black my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quasi, voluptatum possimus atque ea illum, assumenda quidem harum culpa dolorum repellendus aperiam tempora quia tenetur fuga maxime cum quos voluptas?
          </p>
          <div className="w-full flex h-[50px]">
            <input type="text" className="w-[90%] p-4 bg-gray-600 dark:bg-white dark:text-black  outline-none rounded-l-lg text-white" />
            <BiSearch size={20} className="text-white dark:bg-white dark:text-gray-600 bg-gray-600 h-full w-[40px] text-center pt-3 rounded-r-lg" />
          </div>
          <div className='w-full flex my-4 items-center'>
          <AvatarGroup max={2}>
          <Avatar alt="Remy Sharp" />
          <Avatar alt="Travis Howard" />
          <Avatar alt="Cindy Baker"/>
        </AvatarGroup>
        <p className='text-[12px] font-semibold mx-2 dark:text-white text-black '>400K+ People already trusted Us <span className='text-green-500'>Your Courses</span></p>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Hero