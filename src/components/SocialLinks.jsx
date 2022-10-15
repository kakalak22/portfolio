import React from "react";
import styles from "../constants/styles";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="absolute md:top-[43px] top-[5px] md:left-[50px] left-[15px]  w-[67px] h-[90vh]">
      <div className="md:block hidden">
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
          <ul className="my-[50px] after:block after:w-[3px] after:bg-white after:h-[30vh] after:ml-[13px] after:mt-[50px] after:mb-[-6px]">
            <li>
              <VscGithub
                className="fill-white hover:fill-button hover:cursor-pointer "
                size={"35px"}
              />
            </li>
            <li>
              <FaLinkedinIn
                className="fill-white hover:fill-button hover:cursor-pointer mt-[32px] "
                size={"35px"}
              />
            </li>
            <li>
              <FaFacebookF
                className="fill-white hover:fill-button hover:cursor-pointer mt-[32px] "
                size={"35px"}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
