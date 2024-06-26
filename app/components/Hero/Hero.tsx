import React from "react";
import ButtonBlue from "../Button/ButtonBlue";
import ButtonRed from "../Button/ButtonRed";
import HeroImg from "@/public/images/hero.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[70vh] lg:h-[88vh] md:h-[80vh] sm:h-[75vh] flex items-center flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto">
        <div className="col-span-2">
          <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
            Exploring Innovative Paths to Cultivate Your Business
          </h1>
          <p className="md:text-[17px] text-[15px] mb-[2rem] text-black opacity-90 font-[400]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            distinctio quo fugiat tempore soluta aut iste cum doloribus
            suscipit. Corrupti.
          </p>
          <div className="flex items-center space-x-4 md:space-x-6">
            <ButtonBlue text="Get Started" />
            <ButtonRed text="Explor Features" />
          </div>
        </div>
        <div className="col-span-3 hidden sm:block">
          <Image src={HeroImg} alt="Hero"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
