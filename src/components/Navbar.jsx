import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className=" h-[12vh] w-full md:hidden justify-between items-center flex p-[24px]  top-0">
      <h1
        className={`flex  leading-[72px] text-white font-normal text-[40px] font-headingFont `}
      >
        <span className="text-button">B</span> T
      </h1>
      <GiHamburgerMenu className="fill-white" size={35} />
    </div>
  );
};

export default Navbar;
