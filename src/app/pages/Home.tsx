import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Skills from "../../components/Skills";
import Footer from "../../components/Footer";
import Services from "@/components/Services";
import Projects from "@/components/Projects";


const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="sm:px-6 lg:px-8">
        <Hero/>
        <Skills/>
        <Services/>
        <Projects/>
      </div>
        <Footer/>
    </>
  )
}

export default Home