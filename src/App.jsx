import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NavigateDot from "./components/NavigateDot";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import TechStack from "./components/TechStack";
import styles from "./constants/styles";

function App() {
  return (
    <div>
      <div className="bg-hero bg-cover w-full relative ">
        <Navbar />
        <NavigateDot />

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <SocialLinks />
            <Hero />
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <About />
            <Projects />
            <TechStack />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
