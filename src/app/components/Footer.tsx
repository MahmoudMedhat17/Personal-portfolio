import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <section className="border-t">
        <div className="p-4">
            <Link className="block text-primaryColor" href="/">
                <span className='font-extrabold text-2xl md:text-3xl'>MM</span>
            </Link>
        </div>
        <div className="flex gap-4">
              <Link href="">
                <Button className="rounded-sm bg-transparent hover:bg-primaryColor hover:text-black duration-200"><Linkedin/></Button>
              </Link>
              <Link href="">
                <Button className="rounded-sm bg-transparent hover:bg-primaryColor hover:text-black duration-200"><Github/></Button>
              </Link>
              <Link href="">
                <Button className="rounded-sm bg-transparent hover:bg-primaryColor hover:text-black duration-200"><Send/></Button>
              </Link>
            </div>
    </section>
  )
}

export default Footer;