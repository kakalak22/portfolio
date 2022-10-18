import React from "react";
import styles from "../constants/styles";
import SwiperCarousel from "./SwiperCarousel";

const Projects = () => {
  return (
    <section
      className="w-full h-[858px] flex flex-col justify-center items-center gap-2 relative"
      id="projects"
    >
      <h2 className={`${styles.heading2} text-center`}>My Projects</h2>
      <h1 className={`${styles.heading1} text-center`}>Recent Projects</h1>
      <div className="w-[95vw] md:w-full h-[675px] ">
        <SwiperCarousel />
      </div>
    </section>
  );
};

export default Projects;
