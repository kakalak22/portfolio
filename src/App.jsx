import Hero from "./components/Hero";
import NavigateDot from "./components/NavigateDot";
import SocialLinks from "./components/SocialLinks";
import styles from "./constants/styles";

function App() {
  return (
    <div className="bg-hero bg-contain w-full relative ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <NavigateDot />
      <SocialLinks />
    </div>
  );
}

export default App;
