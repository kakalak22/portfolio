import React, { useEffect, useState } from "react";
import styles from "../constants/styles";
import SwiperCarousel from "./SwiperCarousel";

const Projects = () => {
  const [count, setCount] = useState(false);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <section
      className="w-full h-[858px] flex flex-col justify-center items-center gap-2 relative md:mt-0 mt-10"
      id="projects"
    >
      <button
        onClick={() => {
          setCount((count) => !count);
        }}
        className="bg-white z-10"
      >
        click me
      </button>
      <h2 className={`${styles.heading2} text-center`}>My Projects</h2>
      <h1 className={`${styles.heading1} text-center`}>Recent Projects</h1>
      <div className="w-[95vw] md:w-full h-[675px] z-[1]">
        <SwiperCarousel />
      </div>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
      <div className="absolute z-[0] w-[50%] h-[90%] bottom-70 left-50 white__gradient"></div>
      <div
        className={`absolute z-[0] ${
          count ? "w-[50%] h-[50%]" : "w-[80%] h-[80%]"
        } right-50 bottom-[-200px] blue__gradient`}
      ></div>
    </section>
  );
};

export default Projects;
