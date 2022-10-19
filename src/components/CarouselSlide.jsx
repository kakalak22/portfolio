import React from "react";
import hoobank from "../assets/projects/hoobank.png";

const CarouselSlide = () => {
  return (
    <div className="w-full h-[404px] bg-swiper  rounded-[50px] flex-col mt-[150px] md:px-5">
      <div className="w-full h-[150px] sm:h-[130px] md:h-[150px] flex justify-center md:hidden">
        <div className=" w-[300px] sm:w-[350px] h-[200px] rounded-[10px] relative">
          <div className="border-white bg-white w-[300px] sm:w-[350px] h-[200px] sm:h-[250px] absolute top-[-50px] sm:top-[-100px] rounded-[10px]">
            <img src={hoobank} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-between md:justify-center md:items-center w-full px-9 mt-7 gap-2 ">
        <h3
          className="text-white font-headingFont font-semibold text-[20px] sm:text-[30px] md:text-[35px]
        md:w-[30%] md:text-center break-words  "
        >
          Hoobank
        </h3>
        <div className="w-[40%] h-[150px] md:h-[150px]  justify-center hidden md:flex ">
          <div className=" w-[300px] md:w-full h-[600px] rounded-[10px] relative">
            <img
              className="w-[300px] md:w-full h-[200px] md:h-[250px] absolute top-[-50px] md:top-[-100px] md:bottom-[0px] rounded-[10px] shrink-0"
              src={hoobank}
            />
          </div>
        </div>
        <h3
          className="text-white font-headingFont font-semibold text-[20px] sm:text-[30px] md:text-[35px] 
        md:w-[30%] md:text-center  "
        >
          Live Demo
        </h3>
      </div>
      <p className="text-paragraph text-center mt-5 md:mt-12 sm:text-[20px] md:text-[23px] sm:px-14 px-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident
        fugit harum suscipit ad molestias totam, molestiae dolore quam nobis
        distinctio alias voluptatibus necessitatibus adipisci, at perspiciatis!
        Assumenda, cupiditate consequuntur.
      </p>
    </div>
  );
};

export default CarouselSlide;
