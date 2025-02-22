import { serviceLinks } from "@/lib";


const Services = () => {
  return (
    <section className="py-10">
      <h3 className="text-center pb-10 font-extrabold text-white hover:text-primaryColor duration-200 text-3xl">What I Do</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-8 md:px-0">
        {
          serviceLinks.map((service)=>(
            <div key={service.title} className="border-2 border-primaryColor p-8">
              <div className="flex flex-col justify-center items-center space-y-4">
                <div className="hover:bg-primaryColor duration-200 p-4 border-2 border-primaryColor rounded-md">
                  <img src={service.img} alt={`${service.title} logo`} className="w-20 h-20"/>
                </div>
                <p className="text-center font-semibold text-white">{service.title}</p>
                <p className="text-center text-white/60">{service.desc}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Services;