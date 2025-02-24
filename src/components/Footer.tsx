"use client";

import { Button } from "@/app/components/ui/button";
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
    <section className="border-t" id="footer">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 md:space-y-0 p-4 md:p-8">
        <div className="flex flex-col space-y-4">
          <div className="text-primaryColor text-center sm:text-start cursor-pointer">
              <span className='font-extrabold text-2xl md:text-3xl' onClick={()=>ScrollToTop()}>MM</span>
          </div>
            <p className="text-primaryColor text-xl font-semibold flex items-center gap-4"><MdEmail size={20}/> m7moooud.17@gmail.com</p>
            <p className="text-primaryColor text-xl font-semibold flex items-center gap-4"><FaPhoneAlt size={20}/> +201012107269</p>
            <p className="text-primaryColor text-xl font-semibold flex items-center gap-4"><IoLocationSharp size={20}/> <span>6th October, Giza EG</span></p>
        </div>
        <div className="flex gap-4">
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
        </div>
      </div>
      <div className="py-4">
          <p className="text-center text-gray-200 hover:text-primaryColor duration-200">All Rights Reserved@Mahmoud Medhat</p>
      </div>
    </section>
  )
};

export default Footer;