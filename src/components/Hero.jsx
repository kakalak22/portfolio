import React from "react";
import styles from "../constants/styles";
import scrollDownArrow from "../assets/scrollDownArrow.svg";
import AnimatedTextWord from "./common/AnimatedTextWord";
import AnimatedTextCharacter from "./common/AnimatedTextCharacter";
const Hero = () => {
  return (
    <div
      className={`w-full md:h-[100vh] h-[87vh] ${styles.flexCenter} flex-col md:mt-0 mt-[10px] `}
    >
      <h1 className=" font-semibold text-white font-headingFont md:leading-[78px] leading-[46px] flex">
        <AnimatedTextCharacter
          textStyles={"text-[40px] md:text-[64px]"}
          text="Hi, I'm "
        />
        <span className="text-gradient">
          <AnimatedTextCharacter
            textStyles={"text-[40px] md:text-[64px]"}
            text="Bao Tran"
          />
        </span>
      </h1>
      <h2 className=" text-normal text-white font-arial md:leading-[45px] text-center max-w-[700px] w-full mt-[32px]">
        <AnimatedTextWord
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat rerum
        tempore dolorem quisquam perferendis placeat? Quia quidem voluptate, nam
        autem excepturi recusandae officiis dolorum veritatis tempore, sint
        earum, a explicabo."
          textStyles="md:text-[30px] text-[20px]"
        />
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
