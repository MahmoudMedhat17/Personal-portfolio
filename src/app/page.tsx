import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Skills from "../../components/Skills";
import Footer from "../../components/Footer";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import { FaCircleArrowUp } from "react-icons/fa6";
import { ScrollToTop } from "@/lib/ScrollToTop";
import ArrowToTop from "@/lib/ArrowToTop";

const page = () => {
  return (
    <div>
      <div className="dark:bg-darkModeColor bg-lightModeColor">
      <Navbar/>
      <div className="sm:px-6 lg:px-8">
        <Hero/>
        <Projects/>
        <Services/>
        <Skills/>
      </div>
        <Footer/>
        <ArrowToTop/>
        {/* <FaCircleArrowUp className="w-8 sm:w-10 h-8 sm:h-10 fixed right-10 bottom-10 text-white hover:text-primaryColor duration-200 cursor-pointer" onClick={ScrollToTop}/>         */}
    </div>
    </div>
  )
};

export default page;