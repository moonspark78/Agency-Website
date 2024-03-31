import React from 'react'
import Icon1 from "@/public/images/icon1.png"
import Icon2 from "@/public/images/icon2.png"
import Support from "@/public/images/supportteam.jpg"

const SupportTeam = () => {
  return (

    <div className='pt-[7rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2'>
          <div>
              <h1 className='text-[27px] md:text-[35px] lg:text-[40px] m-[1rem] font-bold text-[#02073e] 
              leading-[2.4rem] md:leading-[4rem]'>
                Do You Need Help? Our Support Team Ready To help You</h1>
                <p className='text-gray-900 opacity-90 text-[17px] mt-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Praesentium, cumque. Omnis ipsam dolore id, 
                  accusantium sapiente harum, perspiciatis, ab exercitationem amet enim quibusdam nobis ut.</p>
          </div>
          <div></div>
        </div>
    </div>
  )
} 

export default SupportTeam