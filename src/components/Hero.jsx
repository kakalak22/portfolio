import React from "react";
import styles from "../constants/styles";
import scrollDownArrow from "../assets/scrollDownArrow.svg";
const Hero = () => {
  return (
    <div
      className={`w-full md:h-[100vh] h-[87vh] ${styles.flexCenter} flex-col md:mt-0 mt-[10px] `}
    >
      <h1 className="text-[40px] md:text-[64px] font-semibold text-white font-headingFont md:leading-[78px] leading-[26px]">
        Hi, I'm <span className="text-gradient">Bao Tran</span>
      </h1>
      <h2 className="md:text-[30px] text-[20px] text-normal text-white font-arial leading-[30pxx] text-center max-w-[652px] w-full mt-[32px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat rerum
        tempore dolorem quisquam perferendis placeat? Quia quidem voluptate, nam
        autem excepturi recusandae officiis dolorum veritatis tempore, sint
        earum, a explicabo.
      </h2>
      <button
        className="md:mt-[173px] mt-[100px] bg-button hover:bg-transparent outline-none hover:outline-2 hover:outline-button 
       text-white md:w-[237px] w-[148px] md:h-[69px] h-[43px] text-[15px] md:leading-[27px]  leading-[0] rounded-10px py-[21px] px-[35px] rounded-[95px] transition-all "
      >
        Explore
      </button>
      <img
        className="mt-[28px] md:w-[50px] w-[45px]"
        src={scrollDownArrow}
        alt="scroll-down"
      />
    </div>
  );
};

export default Hero;
