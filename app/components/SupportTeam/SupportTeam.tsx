import React from "react";
import Icon1 from "@/public/images/icon1.png";
import Icon2 from "@/public/images/icon2.png";
import Support from "@/public/images/supportteam.jpg";
import Image from "next/image";

const SupportTeam = () => {
  return (
    <div className="pt-[7rem] pb-[3rem]">
      <div className="w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2">
        <div>
          <h1
            className="text-[27px] md:text-[35px] lg:text-[40px] m-[1rem] font-bold text-[#02073e] 
              leading-[2.4rem] md:leading-[4rem]"
          >
            Do You Need Help? Our Support Team Ready To help You
          </h1>
          <p className="text-gray-900 opacity-90 text-[17px] mt-[1rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, cumque. Omnis ipsam dolore id, accusantium sapiente
            harum, perspiciatis, ab exercitationem amet enim quibusdam nobis ut.
          </p>
          <div className="flex items-center space-x-6 mt-[2rem]">
            <Image src={Icon1} alt="icon1" width={60} height={60} />
            <div>
              <h1 className="text-[18px] text-gray-900 font-[500] mb-[0.5rem]">Email Client support</h1>
              <p className="md:w-[70%] w-[90%] text-[15px] text-black opacity-85">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, ducimus.</p>
            </div>
          </div>
          <div className="flex items-center space-x-6 mt-[2rem]">
            <Image src={Icon2} alt="icon2" width={60} height={60} />
            <div>
              <h1 className="text-[18px] text-gray-900 font-[500] mb-[0.5rem]">Live ticket Support</h1>
              <p className="md:w-[70%] w-[90%] text-[15px] text-black opacity-85">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, ducimus.</p>
            </div>
          </div>
        </div>
        <div>
          <Image src={Support} alt="Suppor"/>
        </div>
      </div>
    </div>
  );
};

export default SupportTeam;
