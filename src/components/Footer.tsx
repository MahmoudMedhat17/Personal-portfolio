"use client";

import { Button } from "@/components/ui/button";
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Send } from 'lucide-react';
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp, IoLogoWhatsapp } from "react-icons/io5";
import { ScrollToTop } from "@/lib/ScrollToTop";

const Footer = () => {
  return (
    <section className="border-t dark:border-lightModeColor border-darkModeColor" id="footer">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 md:space-y-0 p-4 md:p-8">
        <div className="flex flex-col space-y-4">
          <div className="dark:text-lightModeColor text-darkModeColor text-center sm:text-start cursor-pointer">
            <span className='font-extrabold text-2xl md:text-3xl' onClick={() => ScrollToTop()}>MM</span>
          </div>
          <p className="dark:text-lightModeColor text-darkModeColor text-xl font-semibold flex items-center gap-4"><MdEmail size={20} /> m7moooud.17@gmail.com</p>
          <p className="dark:text-lightModeColor text-darkModeColor text-xl font-semibold flex items-center gap-4"><FaPhoneAlt size={20} /> +201012107269</p>
          <p className="dark:text-lightModeColor text-darkModeColor text-xl font-semibold flex items-center gap-4"><IoLocationSharp size={20} /> <span>6th October, Giza EG</span></p>
        </div>
        <div className="flex gap-4">
          <Link href="https://www.linkedin.com/in/mahmoud-medhat-84166a205/">
            <Button className="rounded-sm bg-transparent dark:text-lightModeColor text-darkModeColor hover:text-lightModeColor hover:dark:text-darkModeColor hover:dark:bg-lightModeColor hover:bg-darkModeColor duration-200"><Linkedin /></Button>
          </Link>
          <Link href="https://github.com/MahmoudMedhat17">
            <Button className="rounded-sm bg-transparent dark:text-lightModeColor text-darkModeColor hover:text-lightModeColor hover:dark:text-darkModeColor hover:dark:bg-lightModeColor hover:bg-darkModeColor duration-200"><Github /></Button>
          </Link>
          <Link href="https://t.me/@MahmoudMedhat17">
            <Button className="rounded-sm bg-transparent dark:text-lightModeColor text-darkModeColor hover:text-lightModeColor hover:dark:text-darkModeColor hover:dark:bg-lightModeColor hover:bg-darkModeColor duration-200"><Send /></Button>
          </Link>
          <Link href="https://wa.me/+201012107269">
            <Button className="rounded-sm bg-transparent dark:text-lightModeColor text-darkModeColor hover:text-lightModeColor hover:dark:text-darkModeColor hover:dark:bg-lightModeColor hover:bg-darkModeColor duration-200"><IoLogoWhatsapp /></Button>
          </Link>
        </div>
      </div>
      <div className="py-4">
        <p className="text-center dark:text-lightModeColor text-darkModeColor">All Rights Reserved@Mahmoud Medhat</p>
      </div>
    </section>
  )
};

export default Footer;