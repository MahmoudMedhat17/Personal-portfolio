import { Button } from "@/app/components/ui/button";
import { Download } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Send } from 'lucide-react';
import Link from "next/link";



const Hero = () => {
  return (
    <section className="p-8 md:p-20 h-full">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-xl space-y-2 order-2 lg:order-1">
          <p className="font-semibold text-lg md:text-xl text-primaryColor">Junior Front End developer</p>
          <p className="text-4xl md:text-5xl font-semibold">
          <span className="text-white">Hello, I am</span> <br />
          <span className="text-primaryColor">Mahmoud Medhat</span>
          </p>
          <p className="opacity-85 text-sm md:text-lg">
          Driven and innovative Front-End Developer with expertise in crafting responsive and visually appealing web interfaces using React.js and Next.js. Skilled at translating complex technical requirements into engaging user experiences and known for a precise, detail-oriented approach to UI design. Consistently delivering scalable, high-quality solutions with modern tools and frameworks.
          I thrive in delivering high-quality results while fostering strong, cohesive teams.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 space-y-2 md:space-y-0">
            <div>
              <Link href="">
                <Button className="rounded-sm bg-transparent hover:bg-primaryColor hover:text-black duration-200">Download My Resume <Download/></Button>
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