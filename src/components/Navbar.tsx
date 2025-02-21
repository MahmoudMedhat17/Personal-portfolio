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

  

const Navbar = () => {
  return (
    <header className="bg-gray-900 shadow-md sticky top-0 left-0 z-50">
  <div className="mx-auto flex h-16 w-full items-center justify-between gap-8 px-4">
    <Link className="block text-primaryColor" href="/">
      <span className='font-extrabold text-2xl md:text-3xl'>MM</span>
    </Link>

    <div className="flex flex-1 items-center justify-end">
    <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link className="text-gray-500 transition hover:text-primaryColor" href="/"> Home</Link>
          </li>
          <li>
            <Link className="text-gray-500 transition hover:text-primaryColor" href="/about"> About Me</Link>
          </li>

          <li>
            <Link className="text-gray-500 transition hover:text-primaryColor" href="/projects"> Projects </Link>
          </li>

          <li>
            <Link className="text-gray-500 transition hover:text-primaryColor" href="/contactMe"> Contact Me </Link>
          </li>

          <li>
            <Link className="text-gray-500 transition hover:text-primaryColor" href="/hireMe"> Hire Me </Link>
          </li>
        </ul>
      </nav>
    </div>
        <div
          className="block rounded-sm  text-gray-600 transition hover:text-primaryColor md:hidden"
        >
        <Sheet>
            <SheetTrigger>
              <Menu/>
            </SheetTrigger>
            <SheetContent>
            <SheetTitle className='hidden'>Are you absolutely sure?</SheetTitle>
              <SheetHeader>
                <SheetDescription className='flex flex-col items-center gap-6 justify-center h-screen'>
                    <Link className="text-gray-500 transition hover:text-primaryColor text-3xl" href="/about"> About Me</Link>
                    <Link className="text-gray-500 transition hover:text-primaryColor text-3xl" href="/projects"> Projects </Link>
                    <Link className="text-gray-500 transition hover:text-primaryColor text-3xl" href="/contactMe"> Contact Me </Link>
                    <Link className="text-gray-500 transition hover:text-primaryColor text-3xl" href="/hireMe"> Hire Me </Link>
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