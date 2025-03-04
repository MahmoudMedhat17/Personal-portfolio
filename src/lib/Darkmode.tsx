"use client";

import {useState, useEffect} from 'react';
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";


const Darkmode = () => {

  const [theme,setTheme] = useState(localStorage.getItem("theme") || "light");


  useEffect(()=>{
    localStorage.setItem("theme", theme);

    if(theme === "dark"){
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
    else{
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  },[theme]);


  const handleDarkMode = () =>{
    setTheme((prev)=> prev === "dark" ? "light" : "dark");
  }

  return (
    <div className='relative flex items-center'>
      <GoSun size={20} onClick={handleDarkMode} className={`dark:text-lightModeColor text-darkModeColor absolute cursor-pointer ${theme === "dark" ? "opacity-0" : "opacity-100"}`}/>
      <IoMoonOutline size={20} onClick={handleDarkMode} className={`dark:text-lightModeColor text-darkModeColor absolute cursor-pointer ${theme === "light" ? "opacity-0" : "opacity-100"}`}/>
    </div>
  )
}

export default Darkmode;