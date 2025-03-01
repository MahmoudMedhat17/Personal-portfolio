import { projectLinks } from "@/lib";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";



const Projects = () => {
  return (
    <section className="py-10" id="projects">
        <h3 className="text-center pb-10 font-extrabold dark:text-lightModeColor text-darkModeColor hover:text-primaryColor duration-200 text-3xl">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-0">
            {
              projectLinks.map((project)=>(
                <div key={project.title} className="relative group flex flex-col justify-between space-y-2 border-2 border-gray-500">
                  <div className="relative h-fit">
                    <img src={project.img} alt={`${project.title} logo`}/>
                    <div className="absolute dark:bg-lightModeColor bg-darkModeColor opacity-0 group-hover:opacity-50 duration-200 inset-0"></div>
                    <div className="hidden absolute inset-0 group-hover:flex justify-center items-center gap-8 duration-200">
                      <Link href={project.live} className="dark:bg-lightModeColor bg-darkModeColor dark:text-darkModeColor text-lightModeColor font-semibold p-4 flex justify-center items-center gap-2 hover:bg-primaryColor/80 duration-200">Live <MdArrowOutward/></Link>
                      <Link href={project.repo} className="dark:bg-lightModeColor bg-darkModeColor dark:text-darkModeColor text-lightModeColor font-semibold p-4 flex justify-center items-center gap-2 hover:bg-primaryColor/80 duration-200">Repo <FaGithub/></Link>
                    </div>
                  </div>
                  <div className="px-2 space-y-2">
                    <p className="dark:text-lightModeColor text-darkModeColor font-bold text-xl">{project.title}</p>
                    <p className="dark:text-lightModeColor text-darkModeColor text-sm md:text-base h-fit">{project.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-8 p-2">
                  {
                    project.techStack.map((tech)=>(
                      <div key={tech.title} className="border-2 dark:border-lightModeColor border-darkModeColor p-2 hover:bg-primaryColor duration-200">
                      <HoverCard>
                        <HoverCardTrigger className="dark:text-lightModeColor text-darkModeColor">{tech.icon}</HoverCardTrigger>
                        <HoverCardContent className="dark:bg-lightModeColor bg-darkModeColor dark:text-darkModeColor text-lightModeColor  font-semibold flex justify-center items-center">
                          {tech.title}
                        </HoverCardContent>
                      </HoverCard>
                      </div>
                    ))
                  }
                  </div>
                </div>
              ))
            }
        </div>
    </section>
  )
}

export default Projects;