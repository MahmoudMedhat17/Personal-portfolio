"use client";

import {motion, useInView} from "motion/react";
import {  useRef } from "react";

const ScrollRevealAnimation = ({children}:{children:React.ReactNode}) => {

  const containerRef = useRef(null);
  const isInView = useInView(containerRef,{once:true});
  

  const containerVariants = {
    hidden:{
      opacity:0,
      y:75
    },
    visible:{
      opacity:1,
      y:0
    },
    transition:{
      duration:0.5,
      delay:0.25
    }
  };

  
  return (
    <motion.div ref={containerRef} variants={containerVariants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  )
}

export default ScrollRevealAnimation;