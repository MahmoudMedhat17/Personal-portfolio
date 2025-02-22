import { techLinks } from "@/lib";


const Skills = () => {
  return (
    <section className="py-10">
        <h3 className="text-center pb-10 font-extrabold text-white hover:text-primaryColor duration-200 text-3xl">Technologies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 md:px-0">
            {
                techLinks.map((tech)=>(
                    <div className=" text-white hover:bg-primaryColor hover:text-gray-900 duration-200 border rounded-md border-gray-800 shadow-lg p-8 space-y-4" key={tech.title}>
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <span className="flex justify-center items-center">{tech.icon}</span>
                            <p className="font-semibold">{tech.title}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Skills;