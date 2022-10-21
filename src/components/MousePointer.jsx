import React, { useRef } from "react";
import { useFollowPointer } from "./common/Pointer";
import { motion } from "framer-motion";

const MousePointer = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  console.log(x, y);

  return (
    <motion.div
      animate={{ x, y }}
      transition={{
        type: "spring",
      }}
      ref={ref}
      className=" bg-white opacity-[0.3] w-[150px] h-[150px] blur-sm rounded-full absolute pointer-events-none "
    ></motion.div>
  );
};

export default MousePointer;
