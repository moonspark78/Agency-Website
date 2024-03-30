import Image from "next/image";
import React from "react";
import SupportImg from "@/public/images/support.jpg";

const CustomerSupport = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center">
        <div className="order-2 lg:order-1">
          <Image src={SupportImg} alt="support" />
        </div>
        <div className="order-1 lg:order-2">
          <h1 className="text-[20px] md:text-[25px] lg:text-[28px] text-[#02073e] font-bold leading-[2rem] md:leading-[3rem]">
            Customer support is our main priority with their hundred percent
            satisfaction.
          </h1>
          <p className="mt-[1.5rem] mb-[1.5rem] text-black opacity-90 text-[15px] md:text-[16px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Quidem eligendi dolore esse autem aliquam odio sint aspernatur, amet alias quibusdam.</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
