import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Footer from "../../components/Footer";


const Home = () => {
  return (
    <>
      <div className="sm:px-6 lg:px-20">
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
      </div>
        <Footer/>
    </>
  )
}

export default Home