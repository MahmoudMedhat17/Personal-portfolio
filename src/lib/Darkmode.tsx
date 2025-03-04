"use client";

import {useState, useEffect} from 'react';
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";


const Darkmode = () => {

  const [theme,setTheme] = useState<string | null>(null);


  useEffect(()=>{
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
  },[]);


  useEffect(()=>{
    if(theme){
      localStorage.setItem("theme", theme);
      document.documentElement.classList.toggle("dark", theme === "dark");
      document.documentElement.classList.toggle("light", theme === "light");
    }
  },[theme]);


  const handleDarkMode = () =>{
    setTheme((prev)=> prev === "dark" ? "light" : "dark");
  };

  if(theme === null) return null;

  return (
    <div className='relative flex items-center'>
      <GoSun size={20} onClick={handleDarkMode} className={`dark:text-lightModeColor text-darkModeColor absolute cursor-pointer ${theme === "dark" ? "opacity-0" : "opacity-100"}`}/>
      <IoMoonOutline size={20} onClick={handleDarkMode} className={`dark:text-lightModeColor text-darkModeColor absolute cursor-pointer ${theme === "light" ? "opacity-0" : "opacity-100"}`}/>
    </div>
  )
}

export default Darkmode;