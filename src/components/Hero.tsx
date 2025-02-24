import { Button } from "@/app/components/ui/button";
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
          <p className="font-semibold text-lg md:text-xl text-primaryColor">Junior Front End developer</p>
          <p className="text-4xl md:text-5xl font-semibold">
          <span className="text-white">Hello, I am</span> <br />
          <span className="text-primaryColor">Mahmoud Medhat</span>
          </p>
          <p className="text-white text-sm md:text-lg">
          Driven and innovative Front-End Developer with expertise in crafting responsive and visually appealing web interfaces using React.js and Next.js. Skilled at translating complex technical requirements into engaging user experiences and known for a precise, detail-oriented approach to UI design. Consistently delivering scalable, high-quality solutions with modern tools and frameworks.
          I thrive in delivering high-quality results while fostering strong, cohesive teams.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 space-y-2 md:space-y-0">
            <div>
              <Link href="https://drive.google.com/uc?export=download&id=1vah70huoVIxoA-O_dWzLLVpBzITIRyUv" download>
                <Button className="rounded-sm bg-transparent hover:bg-primaryColor hover:text-black duration-200">Download My Resume <Download/></Button>
              </Link>
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
        </div>
        <div className="order-1 lg:order-2">
          <img src="/My-Pic.jpg" alt="My-pic" className="w-60 md:w-64 xl:w-96 h-60 md:h-64 xl:h-96 rounded-full"/>
        </div>
      </div>
    </section>
  )
};

export default Hero;