import Hero from "./components/Hero";
import styles from "./constants/styles";

function App() {
  return (
    <div className="bg-primary w-full">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
