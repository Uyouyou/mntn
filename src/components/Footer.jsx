import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full h-full bg-[#0B1D26]'>
      <div className='max-w-[1462px] mx-auto flex flex-col lg:flex-row lg:justify-between items-center py-10'>
        <div className='flex flex-col items-center space-y-6 lg:items-start lg:ml-20 mt-8 lg:mt-[-1rem]'>
          <h2 className='tracking-[0.1em] font-serif text-[27px] lg:text-[32px] leading-[38.4px] text-[#ffffff] font-semibold'>MNTN</h2>
          <p className='font-serif font-bold text-[14px] lg:text-[18px] leading-[32px] text-[#ffffff] text-center lg:text-left'>
            Get out there & discover your next <br /> slope, mountain & destination!
          </p>
        </div>

        <div className='w-full max-w-[193px] flex flex-col items-center lg:items-start space-y-4 mt-10 lg:mt-[7rem] lg:ml-10'>
          <h3 className='font-serif font-bold text-[18px] lg:text-[24px] leading-[32px] text-[#fbd784] text-nowrap'>More on The Blog</h3>
          <a className='font-serif font-medium text-[14px] lg:text-[18px] leading-[32px] text-[#ffffff]' href="#mntn">About MNTN</a>
          <a className='font-serif font-medium text-[14px] lg:text-[18px] leading-[32px] text-[#ffffff]' href="#contributors">Contributors & Writers</a>
          <a className='font-serif font-medium text-[14px] lg:text-[18px] leading-[32px] text-[#ffffff]' href="#write">Write For Us</a>
          <a className='font-serif font-medium text-[14px] lg:text-[18px] leading-[32px] text-[#ffffff]' href="#contact">Contact Us</a>
          <a className='font-serif font-medium text-[14px] lg:text-[18px] leading-[32px] text-[#ffffff]' href="#privacy">Privacy Policy</a>
        </div>

        <div className='w-full max-w-[193px] flex flex-col items-center lg:items-start space-y-4 mt-10 lg:mt-[1rem]'>
          <h3 className='font-serif font-bold text-[18px] lg:text-[24px] leading-[32px] text-[#fbd784]'>More on MNTN</h3>
          <a className='font-serif font-medium text-[14px] lg:text-[18px] leading-[32px] text-[#ffffff]' href="#team">The Team</a>
          <a className='font-serif font-medium text-[14px] lg:text-[18px] leading-[32px] text-[#ffffff]' href="#jobs">Jobs</a>
          <a className='font-serif font-medium text-[14px] lg:text-[18px] leading-[32px] text-[#ffffff]' href="#press">Press</a>
        </div>
      </div>

      <div className='text-center lg:text-left mt-14 lg:ml-[7rem]'>
        <p className='font-serif font-medium text-[14px] lg:text-[16px] leading-[24px] text-[#9CA3AF]'>
          Copyright 2023 MNTN, Inc. Terms & Privacy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
