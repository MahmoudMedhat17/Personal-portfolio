"use client";

import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Send } from 'lucide-react';
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";


const Hero = () => {
  return (
<section className="p-8 md:p-20 h-full" id="hero">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-xl space-y-2 order-2 lg:order-1">
          <p className="font-semibold text-lg md:text-xl dark:text-lightModeColor text-darkModeColor">Junior Front End developer</p>
          <p className="text-4xl md:text-5xl font-semibold">
          <span className="dark:text-lightModeColor text-darkModeColor">Hi, I am</span> <br className="sm:hidden"/>
          <span className="dark:text-lightModeColor text-darkModeColor">Mahmoud Medhat</span>
          </p>
          <p className="dark:text-lightModeColor text-darkModeColor text-sm md:text-lg">
          I'm a junior frontend developer who is passionate about creating visually appealing and user friendly interfaces websites and web apps. I have a strong foundation in frontend development technologies. Though i also enjoy exploring new challenges. I am currently open for Full time or remote role if i'm a good fit for the company.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 space-y-2 md:space-y-0">
            <div>
              <Link href="https://drive.google.com/uc?export=download&id=1vah70huoVIxoA-O_dWzLLVpBzITIRyUv" download>
                <Button className="rounded-sm dark:text-lightModeColor text-darkModeColor hover:dark:bg-lightModeColor hover:dark:text-darkModeColor hover:bg-darkModeColor hover:text-lightModeColor duration-200">Download My Resume <Download/></Button>
              </Link>
            </div>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/in/mahmoud-medhat-84166a205/">
                <Button className="rounded-sm dark:text-lightModeColor text-darkModeColor hover:dark:bg-lightModeColor hover:dark:text-darkModeColor hover:bg-darkModeColor hover:text-lightModeColor duration-200"><Linkedin/></Button>
              </Link>
              <Link href="https://github.com/MahmoudMedhat17">
                <Button className="rounded-sm dark:text-lightModeColor text-darkModeColor hover:dark:bg-lightModeColor hover:dark:text-darkModeColor hover:bg-darkModeColor hover:text-lightModeColor duration-200"><Github/></Button>
              </Link>
              <Link href="https://t.me/@MahmoudMedhat17">
                <Button className="rounded-sm dark:text-lightModeColor text-darkModeColor hover:dark:bg-lightModeColor hover:dark:text-darkModeColor hover:bg-darkModeColor hover:text-lightModeColor duration-200"><Send/></Button>
              </Link>
              <Link href="https://wa.me/+201012107269">
                <Button className="rounded-sm dark:text-lightModeColor text-darkModeColor hover:dark:bg-lightModeColor hover:dark:text-darkModeColor hover:bg-darkModeColor hover:text-lightModeColor duration-200"><IoLogoWhatsapp/></Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <img src="/My-Pic.jpg" alt="My-pic" className="w-60 md:w-64 xl:w-96 h-60 md:h-64 xl:h-96 rounded-full"/>
        </div>
      </div>
    </section>
  )
};

export default Hero;