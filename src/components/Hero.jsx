import React, { useEffect, useRef, useState } from "react";
import styles from "../constants/styles";
import scrollDownArrow from "../assets/scrollDownArrow.svg";
import AnimatedTextWord from "./common/AnimatedTextWord";
import AnimatedTextCharacter from "./common/AnimatedTextCharacter";
import { motion, useAnimation } from "framer-motion";
const Hero = () => {
  const btnCtrl = useAnimation();
  const [isTextAnimationFinished, setIsTextAnimationFinished] = useState(false);

  const handleTextAnimationStatus = () => {
    setIsTextAnimationFinished(true);
  };

  useEffect(() => {
    if (isTextAnimationFinished) {
      btnCtrl.start("start");
    }
  }, [isTextAnimationFinished]);

  const variants = {
    start: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        stiffness: 300,
      },
    },
  };

  return (
    <div
      className={`w-full md:h-[100vh] h-[100vh] ${styles.flexCenter} flex-col md:mt-0 mt-[10px] cursor-pointer `}
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
          onTextAnimationFinished={handleTextAnimationStatus}
        />
      </h2>
      <motion.button
        variants={variants}
        animate={btnCtrl}
        initial={{
          opacity: 0,
        }}
        className="md:mt-[173px] mt-[100px] bg-button hover:bg-transparent outline-none hover:outline-2 hover:outline-button 
       text-white md:w-[237px] w-[148px] md:h-[69px] h-[43px] text-[15px] md:leading-[27px]  leading-[0] rounded-10px py-[21px] px-[35px] rounded-[95px] transition-all "
      >
        Explore
      </motion.button>
      <motion.div
        variants={variants}
        animate={btnCtrl}
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
      >
        <motion.img
          animate={{ scale: [1, 0.8, 1, 0.8, 1] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="mt-[28px] md:w-[50px] w-[45px]"
          src={scrollDownArrow}
          alt="scroll-down"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
