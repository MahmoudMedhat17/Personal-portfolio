import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <section className="border-t">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 md:space-y-0">
      <div className="p-4 md:p-8">
            <Link className="text-primaryColor" href="/">
                <span className='font-extrabold text-2xl md:text-3xl'>MM</span>
            </Link>
        </div>
        <div className="">
          <p className="text-center text-gray-200 hover:text-primaryColor duration-200">All Rights Reserved@Mahmoud Medhat</p>
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
        </div>
      </div>
    </section>
  )
}

export default Footer;