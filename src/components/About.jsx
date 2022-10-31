import React from "react";
import styles from "../constants/styles";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "2", once: true });
  const headingCtrl = useAnimation();
  const headingCrtl2 = useAnimation();
  const paragraphCtrl = useAnimation();
  const imageBgCtrl = useAnimation();
  const imageCtrl = useAnimation();
  const imageBgCtrl2 = useAnimation();

  const variants = {
    headingStart: {
      opacity: 1,
      translateX: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    paragraphStart: {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    imageBgStart: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
      },
    },
    imageStart: {
      opacity: 1,
      translateX: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
    imageBgStart2: {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
      transition: {
        type: "tween",
        duration: 1,
      },
    },
  };

  const animationSequence = async () => {
    await headingCtrl.start("headingStart");
    await headingCrtl2.start("headingStart");
    await paragraphCtrl.start("paragraphStart");
    await imageBgCtrl.start("imageBgStart");
    await imageCtrl.start("imageStart");
    await imageBgCtrl2.start("imageBgStart2");
  };

  useEffect(() => {
    if (isInView) {
      animationSequence();
      console.log("in view");
    } else console.log("not in view");
  }, [isInView]);

  return (
    <div className="md:h-[752px] h-[800px] mt-10 sm:mt-0 flex md:flex-row flex-col md:justify-between justify-center  md:items-center items-start relative ">
      <div
        ref={ref}
        className=" lg:w-[910px] md:w-[480px] w-full xs:h-[40vh] h-[60vh] flex justify-center flex-col items-center md:items-start mt-2 md:mt-0 "
      >
        <motion.h2
          initial={{ opacity: 0, translateX: -500 }}
          variants={variants}
          animate={headingCtrl}
          className={`${styles.heading2}  `}
        >
          About Me
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, translateX: -500 }}
          variants={variants}
          animate={headingCrtl2}
          className={`${styles.heading1}  md:text-start text-center `}
        >
          My personal Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scaleX: 2, scaleY: 0 }}
          variants={variants}
          animate={paragraphCtrl}
          className=" w-full md:text-start text-center font-arial font-normal xs:leading-[34.5px] leading-[30px] md:text-[30px] text-[20px] text-paragraph md:mt-[36px] mt-5"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.{" "}
        </motion.p>
      </div>
      <div className="xs:h-[50vh] md:w-[455px] w-full md:h-[322px] h-[50vh] xs:mx-[-1rem] mx-3 flex xs:items-center items-start xs:justify-center justify-start  ">
        <motion.div
          initial={{ opacity: 0 }}
          variants={variants}
          animate={imageBgCtrl}
          className=" md:w-[309px] xs:w-[280px] w-[240px] md:h-[403px] xs:h-[350px] h-[290px]  border-2 border-white relative "
        >
          <motion.div
            initial={{ opacity: 0, translateX: 500 }}
            variants={variants}
            animate={imageCtrl}
            className=" bg-portrait bg-cover md:w-[309px] xs:w-[280px] w-[240px] md:h-[403px] xs:h-[350px] h-[290px]  border-2 border-white absolute top-[28px] left-[29px] z-20 "
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scaleX: 2, scaleY: 0 }}
            variants={variants}
            animate={imageBgCtrl2}
            className=" bg-squareDot bg-contain w-[151px] h-[70px] absolute md:top-[386px] xs:top-[335px] top-[275px] xs:left-[185px] md:left-[218px] left-[145px] z-10"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
