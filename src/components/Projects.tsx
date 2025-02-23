import { projectLinks } from "@/lib";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"



const Projects = () => {
  return (
    <section className="py-10">
        <h3 className="text-center pb-10 font-extrabold text-white hover:text-primaryColor duration-200 text-3xl">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-0">
            {
              projectLinks.map((project)=>(
                <div key={project.title} className="relative group flex flex-col justify-between space-y-2 border-2 border-gray-500">
                    <img src={project.img} alt={`${project.title} logo`}/>
                  <div className="px-2 space-y-2">
                    <p className="text-primaryColor font-bold text-xl">{project.title}</p>
                    <p className="text-white/60 text-sm md:text-base h-fit">{project.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-8 p-2">
                  {
                    project.techStack.map((tech)=>(
                      <div key={tech.title} className="border-2 border-primaryColor p-2 hover:bg-primaryColor duration-200">
                      <HoverCard>
                        <HoverCardTrigger className="text-white">{tech.icon}</HoverCardTrigger>
                        <HoverCardContent className="bg-primaryColor text-black font-semibold flex justify-center items-center">
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