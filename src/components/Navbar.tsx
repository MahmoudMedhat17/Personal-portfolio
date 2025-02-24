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

  

const Navbar = () => {
  return (
    <header className="bg-gray-900 shadow-md sticky top-0 left-0 z-50" id='nav'>
    <div className="mx-auto flex h-16 w-full items-center justify-between gap-8 px-4">
      <span className='font-extrabold text-2xl md:text-3xl block text-primaryColor cursor-pointer' onClick={()=>ScrollToTop()}>MM</span>

    <div className="flex flex-1 items-center justify-end">
    <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li className="text-white transition hover:text-primaryColor cursor-pointer" onClick={()=>ScrollToSection("hero")}>
             Home
          </li>
          
          <li className="text-white transition hover:text-primaryColor cursor-pointer" onClick={()=>ScrollToSection("skills")}>
            Skills
          </li>

          <li className="text-white transition hover:text-primaryColor cursor-pointer" onClick={()=>ScrollToSection("projects")}>
             Projects 
          </li>

          <li className="text-white transition hover:text-primaryColor cursor-pointer" onClick={()=>ScrollToSection("footer")}>
             Contact Me
          </li>

        </ul>
      </nav>
    </div>
        <div
          className="block rounded-sm  text-white transition hover:text-primaryColor md:hidden"
        >
        <Sheet>
            <SheetTrigger>
              <Menu/>
            </SheetTrigger>
            <SheetContent>
            <SheetTitle className='hidden'>Are you absolutely sure?</SheetTitle>
              <SheetHeader>
                <SheetDescription className='flex flex-col items-center gap-6 justify-center h-screen'>
                  <span className='text-white transition hover:text-primaryColor text-3xl cursor-pointer' onClick={()=>ScrollToSection("hero")}>Home</span>
                  <span className='text-white transition hover:text-primaryColor text-3xl cursor-pointer' onClick={()=>ScrollToSection("skills")}>Skills</span>
                  <span className='text-white transition hover:text-primaryColor text-3xl cursor-pointer' onClick={()=>ScrollToSection("projects")}>Projects</span>
                  <span className='text-white transition hover:text-primaryColor text-3xl cursor-pointer' onClick={()=>ScrollToSection("footer")}>Contact Me</span>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
        </Sheet>
        </div>
  </div>
</header>
  )
};

export default Navbar;