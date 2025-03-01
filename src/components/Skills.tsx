import { techLinks } from "@/lib";


const Skills = () => {
  return (
    <section className="py-10" id="skills">
        <h3 className="text-center pb-10 font-extrabold dark:text-lightModeColor text-darkModeColor text-3xl">
            My Skills
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 md:px-0">
            {
                techLinks.map((tech)=>(
                    <div className=" dark:text-lightModeColor text-darkModeColor border rounded-md dark:border-lightModeColor border-darkModeColor shadow-lg p-8 space-y-4" key={tech.title}>
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