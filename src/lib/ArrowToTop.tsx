"use client";

import { useState, useEffect } from "react";
import { motion, useScroll  } from "motion/react";
import { FaArrowUp } from "react-icons/fa6";
import { ScrollToTop } from "./ScrollToTop";


const ArrowToTop = () => {
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll()

  useEffect(()=>{
    const handleScroll = () =>{
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / scrollHeight;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll",handleScroll);

    return ()=> window.removeEventListener("scroll",handleScroll);

  },[]);
  
  return (
    <motion.button onClick={()=>ScrollToTop()} className="fixed right-10 bottom-10 w-16 p-2 md:p-4 rounded-full flex justify-center items-center border-2 z-50">
      <motion.div>
        <FaArrowUp className="text-primaryColor"/>
      </motion.div>
    </motion.button>
  )
};

export default ArrowToTop;