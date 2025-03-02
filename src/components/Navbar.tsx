"use client";
import Link from 'next/link';
import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/app/components/ui/sheet";
import { Menu } from 'lucide-react';
import { ScrollToSection } from '@/lib/ScrollToSection';
import { ScrollToTop } from '@/lib/ScrollToTop';
import {navLinks} from "@/lib/index";
import Darkmode from '@/lib/Darkmode';
import { Button } from '@/app/components/ui/button';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Send } from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="dark:bg-darkModeColor bg-lightModeColor shadow-md sticky top-0 left-0 z-50" id='nav'>
    <div className="mx-auto flex h-16 w-full items-center justify-between gap-8 px-4">
      <span className='font-extrabold text-2xl md:text-3xl block text-darkModeColor dark:text-lightModeColor cursor-pointer' onClick={()=>ScrollToTop()}>MM</span>

    <div className='hidden sm:block'>
      <Darkmode/>
    </div>

    <div className="flex flex-1 items-center justify-end">
      <nav aria-label="Global" className="hidden md:block">
        <div className='flex items-center gap-6 text-sm'>
          {
            navLinks.map((link)=>(
              <ul key={link.title} onClick={()=>ScrollToSection(link.section)}>
                <li className='text-darkModeColor dark:text-lightModeColor cursor-pointer font-semibold'>{link.title}</li>
              </ul>
            ))
          }
        </div>
      </nav>
    </div>
    
    <div className='sm:hidden'>
      <Darkmode/>
    </div>

    <div
      className="block rounded-sm  dark:text-lightModeColor text-darkModeColor md:hidden"
    >
    <Sheet>
        <SheetTrigger>
          <Menu/>
        </SheetTrigger>
        <SheetContent>
        <SheetTitle className='hidden'>Are you absolutely sure?</SheetTitle>
          <SheetHeader>
            <>
            <SheetDescription className='flex flex-col items-center gap-6 justify-center h-screen'>
              <span className='dark:text-lightModeColor text-darkModeColor text-3xl cursor-pointer' onClick={()=>ScrollToSection("hero")}>Home</span>
              <span className='dark:text-lightModeColor text-darkModeColor text-3xl cursor-pointer' onClick={()=>ScrollToSection("skills")}>Skills</span>
              <span className='dark:text-lightModeColor text-darkModeColor text-3xl cursor-pointer' onClick={()=>ScrollToSection("projects")}>Projects</span>
              <span className='dark:text-lightModeColor text-darkModeColor text-3xl cursor-pointer' onClick={()=>ScrollToSection("footer")}>Contact Me</span>
              <SheetDescription className="flex gap-4 mt-20">
              <Link href="https://www.linkedin.com/in/mahmoud-medhat-84166a205/">
                <Button className="rounded-sm bg-transparent dark:text-lightModeColor text-darkModeColor hover:dark:bg-darkModeColor hover:bg-lightModeColor duration-200"><Linkedin/></Button>
              </Link>
              <Link href="https://github.com/MahmoudMedhat17">
                <Button className="rounded-sm bg-transparent dark:text-lightModeColor text-darkModeColor hover:dark:bg-darkModeColor hover:bg-lightModeColor duration-200"><Github/></Button>
              </Link>
              <Link href="https://t.me/@MahmoudMedhat17">
                <Button className="rounded-sm bg-transparent dark:text-lightModeColor text-darkModeColor hover:dark:bg-darkModeColor hover:bg-lightModeColor duration-200"><Send/></Button>
              </Link>
              <Link href="https://wa.me/+201012107269">
                <Button className="rounded-sm bg-transparent dark:text-lightModeColor text-darkModeColor hover:dark:bg-darkModeColor hover:bg-lightModeColor duration-200"><IoLogoWhatsapp/></Button>
              </Link>
            </SheetDescription>
            </SheetDescription>
            </>
          </SheetHeader>
        </SheetContent>
    </Sheet>
    </div>
  </div>
</header>
  )
};

export default Navbar;