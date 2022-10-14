import React from "react";
import styles from "../constants/styles";
import { socials } from "../constants/socials";

const SocialLinks = () => {
  return (
    <div className="absolute top-[43px] left-[50px] w-[67px] h-[90vh]">
      <div
        className={`after:block after:w-[3px] after:bg-white after:h-[30vh] after:ml-[13px] after:mt-[-6px] after:mb-[-6px]`}
      >
        <h1
          className={`flex leading-[72px] text-white font-normal text-[48px] font-headingFont `}
        >
          <span className="text-button">B</span> T
        </h1>
      </div>
      <div>
        <ul className="my-[50px]">
          {socials.map((social, index) => (
            <svg href={social.image}>
              <use href={social.image} className="fill-white" />
            </svg>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
