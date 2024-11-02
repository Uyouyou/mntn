import React from 'react';
import { TfiTwitter } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";
import { FaArrowDownLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className='w-full min-h-screen bg-[#0B1d26] flex justify-center'>
      <div className='flex flex-col lg:flex-row lg:justify-between items-center w-full px-4 lg:px-20 mt-[6rem] lg:mt-[-6rem]'>
        {/* Social Links - Only visible on large screens */}
        <div className='hidden lg:flex flex-col w-auto space-y-5 items-center mt-16'>
          <p className='vertical-text font-serif text-white font-bold text-[18px] leading-[21.76px]'>Follow us</p>
          <TfiTwitter className='text-white text-[16px] font-medium cursor-pointer' />
          <IoLogoInstagram className='text-white text-[16px] font-medium cursor-pointer' />
        </div>

        {/* Main Hero Content */}
        <div className='w-full lg:w-auto flex flex-col items-center mt-16 space-y-6 lg:space-y-8'>
          {/* Tagline */}
          <div className='flex items-center space-x-6'>
            <span className='w-[72px] h-[2px] bg-[#fbd784]'></span>
            <p className='text-[#fbd784] font-extrabold tracking-[3px] lg:tracking-[6px] leading-[16px] lg:leading-[22.05px] font-serif text-[15px] lg:text-[18px] whitespace-nowrap'>
              A HIKING GUIDE
            </p>
          </div>
          
          {/* Heading */}
          <h1 className='text-white text-center font-semibold leading-[40px] md:leading-[60px] lg:leading-[80px] text-[24px] md:text-[36px] lg:text-[45px] font-serif'>
            Be prepared for the <br className='hidden md:block' /> Mountains and beyond!
          </h1>

          {/* Scroll Down Section */}
          <div className='flex items-center space-x-3 mb-[2rem] lg:mb-0'>
            <span className='text-white font-serif font-bold text-base lg:text-[18px] leading-[21.76px]'>scroll down</span>
            <FaArrowDownLong className='text-white text-base' />
          </div>
        </div>

        {/* Side Navigation with responsive line orientation */}
        <div className='flex flex-col lg:flex-row lg:justify-between items-center space-x-6 lg:space-y-6 mt-4'>
          <div className='flex justify-between lg:flex-col items-center space-x-4 lg:space-y-2 mb-[1rem] lg:mb-0'>
            <span className='text-[18px] font-serif leading-[21.76px] text-white'>Start</span>
            <span className='text-[18px] font-serif leading-[21.76px] text-white'>01</span>
            <span className='text-[18px] font-serif leading-[21.76px] text-white'>02</span>
            <span className='text-[18px] font-serif leading-[21.76px] text-white'>03</span>
          </div>
          {/* Horizontal on smaller screens, vertical on large screens */}
          <span className='w-full h-[2px] lg:w-[3px] lg:h-[240px] bg-white'></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
