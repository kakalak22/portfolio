import React from "react";
import styles from "../constants/styles";

const About = () => {
  return (
    <div className="md:h-[752px] h-[800px] flex md:flex-row flex-col md:justify-between justify-center  md:items-center items-start relative ">
      <div className=" lg:w-[910px] md:w-[480px] w-full xs:h-[40vh] h-[60vh] flex justify-center flex-col items-center md:items-start mt-2 md:mt-0 ">
        <h2 className={`${styles.heading2}  `}>About Me</h2>
        <h1 className={`${styles.heading1}  md:text-start text-center `}>
          My personal Experience
        </h1>
        <p className=" w-full md:text-start text-center font-arial font-normal xs:leading-[34.5px] leading-[30px] md:text-[30px] text-[22px] text-paragraph md:mt-[36px] mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.{" "}
        </p>
      </div>
      <div className="xs:h-[50vh] md:w-[455px] w-full md:h-[322px] h-[50vh] xs:mx-[-1rem] mx-3 flex xs:items-center items-start xs:justify-center justify-start  ">
        <div className=" md:w-[309px] xs:w-[280px] w-[240px] md:h-[403px] xs:h-[350px] h-[290px]  border-2 border-white relative ">
          <div className=" bg-portrait bg-cover md:w-[309px] xs:w-[280px] w-[240px] md:h-[403px] xs:h-[350px] h-[290px]  border-2 border-white absolute top-[28px] left-[29px] z-20 "></div>
          <div className=" bg-squareDot bg-contain w-[151px] h-[70px] absolute md:top-[386px] xs:top-[335px] top-[275px] xs:left-[185px] md:left-[218px] left-[145px] z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
