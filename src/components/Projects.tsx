import { projectLinks } from "@/lib";



const Projects = () => {
  return (
    <section className="py-10">
        <h3 className="text-center pb-10 font-extrabold text-white hover:text-primaryColor duration-200 text-3xl">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {
              projectLinks.map((project)=>(
                <div key={project.title} className="flex flex-col justify-between space-y-2 border-2 border-gray-500">
                  <img src={project.img} alt={`${project.title} logo`}/>
                  <div className="px-4 space-y-2">
                    <p className="text-primaryColor font-bold text-xl">{project.title}</p>
                    <p className="text-white/60">{project.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-8 p-2">
                  {
                    project.techStack.map((tech)=>(
                      <div key={tech.type} className="border-2 border-primaryColor p-2 hover:bg-primaryColor duration-200">
                        <span className="text-white">
                        {tech}
                        </span>
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