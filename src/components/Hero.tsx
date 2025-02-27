"use client";

import { Button } from "@/app/components/ui/button";
import { Download } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Send } from 'lucide-react';
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import {motion, useInView, useAnimate} from "motion/react";
import { useEffect, useRef } from "react";


const Hero = () => {

  // const containerRef = useRef(null);
  const[scope,animate] = useAnimate();

  const isInView = useInView(scope,{once:true});

  useEffect(()=>{
    if(isInView){
      animate(scope.current, {opacity:1, y:0})
    }
  },[isInView, animate]);

  return (
    <motion.section   className="p-8 md:p-20 h-full" id="hero">
      <motion.div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <motion.div className="max-w-xl space-y-2 order-2 lg:order-1">
          <motion.p className="font-semibold text-lg md:text-xl text-primaryColor">Junior Front End developer</motion.p>
          <motion.p className="text-4xl md:text-5xl font-semibold">
          <motion.span className="text-white">Hi, I am</motion.span> <br className="sm:hidden"/>
          <motion.span className="text-primaryColor">Mahmoud Medhat</motion.span>
          </motion.p>
          <motion.p className="text-white text-sm md:text-lg">
          I'm a junior frontend developer who is passionate about creating visually appealing and user friendly interfaces websites and web apps. I have a strong foundation in frontend development technologies. Though i also enjoy exploring new challenges. I am currently open for Full time or remote role if i'm a good fit for the company.
          </motion.p>
          <motion.div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 space-y-2 md:space-y-0">
            <motion.div>
              <Link href="https://drive.google.com/uc?export=download&id=1vah70huoVIxoA-O_dWzLLVpBzITIRyUv" download>
                <Button className="rounded-sm bg-transparent hover:bg-primaryColor hover:text-black duration-200">Download My Resume <Download/></Button>
              </Link>
            </motion.div>
            <motion.div className="flex gap-4">
              <Link href="https://www.linkedin.com/in/mahmoud-medhat-84166a205/">
                <Button className="rounded-sm bg-transparent hover:bg-primaryColor hover:text-black duration-200"><Linkedin/></Button>
              </Link>
              <Link href="https://github.com/MahmoudMedhat17">
                <Button className="rounded-sm bg-transparent hover:bg-primaryColor hover:text-black duration-200"><Github/></Button>
              </Link>
              <Link href="https://t.me/@MahmoudMedhat17">
                <Button className="rounded-sm bg-transparent hover:bg-primaryColor hover:text-black duration-200"><Send/></Button>
              </Link>
              <Link href="https://wa.me/+201012107269">
                <Button className="rounded-sm bg-transparent hover:bg-primaryColor hover:text-black duration-200"><IoLogoWhatsapp/></Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="order-1 lg:order-2">
          <img src="/My-Pic.jpg" alt="My-pic" className="w-60 md:w-64 xl:w-96 h-60 md:h-64 xl:h-96 rounded-full"/>
        </motion.div>
      </motion.div>
    </motion.section>
  )
};

export default Hero;