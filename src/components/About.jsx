import React from "react";

const About = () => {
  return (
    <div className="md:h-[60vh] h-[100vh] md:mt-[164px] mt-10 flex md:flex-row flex-col-reverse md:justify-between justify-center  md:items-center items-start ">
      <div className="lg:w-[910px] md:w-[480px] w-full h-[60vh] ">
        <h2 className="text-gradient w-full text-[25px] font-headingFont font-semibold leading-[37px]">
          About Me
        </h2>
        <h1 className="w-[300px] text-white font-headingFont font-semibold leading-full text-[30px] ">
          My personal Experience
        </h1>
        <p className=" w-full md:h-[79px] h-[39px] font-arial font-normal leading-[34.5px] md:text-[30px] text-[20px] text-paragraph md:mt-[36px] mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.{" "}
        </p>
      </div>
      <div className="md:w-[455px] w-[300px] md:h-[322px] h-[40vh] ">
        <div className="md:w-[309px] w-[30vh] md:h-[403px] h-[30vh] border-2 border-white relative ">
          <div className=" bg-portrait bg-cover md:w-[309px] w-[30vh] md:h-[403px] h-[30vh] border-2 border-white absolute top-[28px] left-[29px] z-20 "></div>
          <div className=" bg-squareDot bg-contain w-[151px] h-[70px] absolute md:top-[386px] top-[28vh] md:left-[218px] left-[18vh] z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
