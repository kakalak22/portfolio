import React from "react";
import styles from "../constants/styles";

const Contact = () => {
  return (
    <section className=" w-full md:h-[800px] h-[800px] mt-10 flex flex-col md: items-center lg:flex-row lg:items-start gap-8 ">
      <div className="flex flex-col items-center justify-center lg:items-start lg:h-[700px] lg:w-[700px]">
        <h2 className={`${styles.heading2} w-fit `}>Contact Me</h2>
        <h1 className={`${styles.heading1} text-center lg:text-start`}>
          Have Project?
        </h1>
        <p className=" w-full lg:text-start text-center font-arial font-normal xs:leading-[34.5px] leading-[30px] md:text-[30px] text-[22px] text-paragraph md:mt-[36px] mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </p>
      </div>
      <div className="md:h-[600px] lg:h-[700px] h-[550px] md:w-[500px] lg:w-[450px] bg-swiper rounded-[10px] p-3">
        <h2
          className={`text-white font-semibold font-headingFont text-[25px] md:text-[40px] text-center mt-10`}
        >
          Quick Contact
        </h2>
        <p className="text-paragraph text-[18px] text-center md:px-5">
          You can quickly send me an email by filled the form below
        </p>
        <form className="md:h-[450px] h-[400px]  flex flex-col justify-center items-center gap-5">
          <input
            placeholder="Name"
            type="text"
            className="w-[270px] h-[35px] outline-none bg-swiper border-b-2 text-paragraph"
          />
          <input
            placeholder="Header"
            type="text"
            className="w-[270px] h-[35px] outline-none bg-swiper border-b-2 text-paragraph"
          />
          <textarea
            placeholder="Subject"
            className="w-[270px] h-[70px] outline-none bg-swiper border-b-2 text-paragraph"
            rows="5"
          />
          <button className="mt-5 bg-button rounded-[100px] w-[270px]  text-white p-3 font-normal">
            Send email
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
