import { projectLinks } from "@/lib";


const Projects = () => {
  return (
    <section className="py-10">
        <h3 className="text-center pb-10 font-extrabold text-white hover:text-primaryColor duration-200 text-3xl">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
              projectLinks.map((project)=>(
                <div key={project.title}>
                  <img src={project.img} alt={`${project.title} logo`} className=""/>
                  <div>
                    <p className="text-primaryColor">{project.title}</p>
                    <p className="text-white/60">{project.desc}</p>
                  </div>
                  <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              ))
            }
        </div>
    </section>
  )
}

export default Projects;