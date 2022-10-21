import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedTextWord = ({ text, textStyles, onTextAnimationFinished }) => {
  const words = text.split(" ");
  const textCtrl = useAnimation();
  const charCtrl = useAnimation();

  const animationSequence = async () => {
    await textCtrl.start("visible");
    return onTextAnimationFinished();
  };

  useEffect(() => {
    animationSequence();
  }, []);

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={textCtrl}
      className="w-full flex flex-wrap items-center justify-center"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
          className={`${textStyles}`}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
