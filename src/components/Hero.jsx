import React from "react";
import styles from "../constants/styles";

const Hero = () => {
  return (
    <div className={`w-full h-[100vh] ${styles.flexCenter} flex-col`}>
      <h1 className="text-[64px] text-semibold text-white font-headingFont leading-[78px]">
        Hi, I'm <span className="text-gradient">Bao Tran</span>
      </h1>
      <h2 className="text-[30px] text-normal text-white font-arial leading-[43px] text-center max-w-[652px] w-full mt-[32px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat rerum
        tempore dolorem quisquam perferendis placeat? Quia quidem voluptate, nam
        autem excepturi recusandae officiis dolorum veritatis tempore, sint
        earum, a explicabo.
      </h2>
      <button className="mt-[173px] bg-button text-white w-[237px] h-[69px] font-[22px] rounded-10px py-[21px] px-[35px] rounded-[10px] ">
        Explore
      </button>
    </div>
  );
};

export default Hero;
