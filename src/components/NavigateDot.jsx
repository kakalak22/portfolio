import React from "react";
import styles from "../constants/styles";

const NavigateDot = () => {
  return (
    <div>
      <ul className=" md:block hidden fixed top-[478px] right-[20px]">
        <li
          className={`${styles.navigateDotActive} ${styles.lineStroke} `}
        ></li>
        <li className={`${styles.navigateDot} ${styles.lineStroke} `}></li>
        <li className={`${styles.navigateDot} `}></li>
      </ul>
    </div>
  );
};

export default NavigateDot;
