'use client';
import React,{useState,useEffect} from 'react'
import {useTheme} from "next-themes";
import {BiMoon,BiSun} from "react-icons/bi";



const ThemeSwitcher = () => {
    const [mounted,setMounted]=useState(false);
    const {theme ,setTheme} = useTheme();

    useEffect(()=>{
      setMounted(true);
    },[])

    if(!mounted){
        return null;
    }

  return (
    <div className="flex items-center justify-center mx-4">
        {
            theme === 'dark'?
            <BiSun className="w-7 h-7 text-white dark:text-gray-400 cursor-pointer" onClick={()=>setTheme('light')}/>
            :
            <BiMoon className="w-7 h-7 text-gray-400 dark:text-white cursor-pointer" onClick={()=>setTheme('dark')}/>
        }
    </div>
  )
}

export default ThemeSwitcher