import { CiDark, CiLight } from "react-icons/ci";
import { useEffect, useState } from "react";

const Darkmode = () => {

  const [theme,setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(()=>{
        localStorage.setItem("theme",theme);

        if(theme){
            document.documentElement.classList.toggle("dark", theme === "dark");
            document.documentElement.classList.toggle("light", theme === "light");
        }
    },[theme]);

    const handleDarkMode = () =>{
        setTheme(theme === "light" ? "dark" : "light");
    };

  return (
    <div className="flex items-center relative">
        <CiLight onClick={handleDarkMode} size={30} className={`absolute ${theme === "dark" ? "opacity-0" : "opacity-100"} cursor-pointer dark:text-lightModeColor text-darkModeColor`}/>
        <CiDark  onClick={handleDarkMode} size={30} className={`absolute ${theme === "light" ? "opacity-0" : "opacity-100"} cursor-pointer dark:text-lightModeColor text-darkModeColor`}/>
    </div>
  )
};

export default Darkmode;