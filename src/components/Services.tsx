"use client";

import { useState, useEffect } from "react";
import { serviceLinks } from "@/lib";


const Services = () => {

  const [theme,setTheme] = useState("");


  useEffect(()=>{
    const storedTheme = localStorage.getItem("theme");
    if(storedTheme){
      setTheme(storedTheme);
    }
  },[]);

  return (
    <section className="py-10" id="services">
      <h3 className="text-center pb-10 font-extrabold dark:text-lightModeColor text-darkModeColor text-3xl">What I Do</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-8 md:px-0">
        {
          serviceLinks.map((service)=>(
            <div key={service.title} className="border-2 dark:border-lightModeColor border-darkModeColor p-8">
              <div className="flex flex-col justify-center items-center space-y-4">
                <div className="p-4 border-2 dark:border-lightModeColor border-darkModeColor rounded-md">
                  <img src={theme === "dark" ? service.darkImg : service.lightImg} alt={`${service.title} logo`} className="w-20 h-20"/>
                </div>
                <p className="text-center font-semibold dark:text-lightModeColor text-darkModeColor">{service.title}</p>
                <p className="text-center dark:text-lightModeColor text-darkModeColor">{service.desc}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
};

export default Services;