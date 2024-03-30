import React from "react";

interface Props {
  bg: string;
  num: string;
  price: string;
  plan: string;
}

const PriceCard = ({ bg, num, price, plan }: Props) => {
  const large = num === "2" ? "lg:scale-110 scale-100 z-[100]" : "";
  return (
    <div className={`relative ${large} bg-gray-100 shadow-md transform`}>
      <div
        className={`${bg} h-[200px] flex flex-col items-center justify-center rounded-t-md`}
      >
        <p className="text-[20] text-white font-[500] mb-[1.5rem]">{plan}</p>
        <h1 className="text-[20] text-white">
          <span className="text-[30] text-yellow-300 font-bold">${price}/</span>
          per month.
        </h1>
      </div>
      <div className="p-4 mt-[1rem] text-center">
      <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[rem]">
            Full Access Library</p>
      
    
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
            Multiple Website</p>
     
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
            Next Js Project</p>
    
    
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
            Mern Stack Project</p>
   
     
        <p className="text-[16px] font-[500] border-b-[1.4px] border-gray-300 pb-2 text-black opacity-90 mb-[1rem]">
            TypeScript Project</p>
      </div>
    </div>
  );
};

export default PriceCard;
