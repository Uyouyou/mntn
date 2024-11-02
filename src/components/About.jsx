import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import Joel from '../assets/joel.png';
import Lucas from '../assets/lucas.png';
import Ana from '../assets/ana.png';

const About = () => {
  return (
    <section className='mt-[-16rem] lg:mt-0 w-full bg-[#0B1d26]'>
      <div className='flex flex-col items-center mx-auto max-w-screen-xl'>
        {/* First Section */}
        <div className='flex flex-col lg:flex-row items-center gap-6 my-10 mt-[4rem] space-x-12'>
          <div className='relative w-full lg:w-1/2 flex flex-col items-center'>
            <div className='absolute -top-16 -left-16 opacity-20 text-[200px] lg:text-[240px] text-[#ffffff] font-serif mt-[-5rem] ml-[10rem] lg:ml-0'>01</div>
            <div className='z-10 space-y-5 text-center mt-[2rem]'>
              <div className='flex items-center justify-center space-x-3 ml-[5rem] lg:mr-[10rem]'>
                <span className='w-20 h-[2px] bg-[#fbd784]'></span>
                <p className='font-serif font-extrabold text-[#fbd784] text-[14px] lg:text-[18px] tracking-[6px]'>GET STARTED</p>
              </div>
              <h3 className='font-serif font-semibold text-[27px] lg:text-[64px] text-[#ffffff]'>What level of hiker are you?</h3>
              <p className='font-serif text-[14px] lg:text-[18px] text-[#ffffff]'>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
              <div className='flex items-center justify-center space-x-2 cursor-pointer'>
                <span className='font-serif text-[16px] lg:text-[18px] text-[#fbd784]'>read more</span>
                <FaArrowRightLong className='text-[#fbd784] text-[20px]' />
              </div>
            </div>
          </div>
          
          <div className='flex justify-center items-center mx-auto w-full lg:w-1/2 mt-[4rem] lg:mt-0'>
  <img src={Joel} className='w-[350px] h-[500px] lg:w-full lg:h-auto' alt="a young man hiking on the mountains" />
</div>

        </div>

        {/* Second Section */}
        <div className='flex flex-col-reverse lg:flex-row items-center gap-6 my-10 mt-[8rem] space-x-28'>
          <div className='flex justify-center items-center mx-auto  w-full lg:w-1/2 mt-[4rem] lg:mt-0'>
            <img src={Lucas} className='w-[350px] h-[500px] lg:w-full lg:h-auto' alt="a young man staring at the mountains" />
          </div>
          <div className='relative w-full lg:w-1/2 flex flex-col items-center'>
            <div className='absolute -top-16 -left-16 opacity-20 text-[200px] lg:text-[240px] text-[#ffffff] mt-[-8rem] font-serif ml-[6rem] lg:ml-0'>02</div>
            <div className='z-10 space-y-4 text-center'>
              <div className='flex items-center justify-center space-x-3 ml-[-4rem] lg:mr-[10rem]'>
                <span className='w-20 h-[2px] bg-[#fbd784]'></span>
                <p className='font-serif font-extrabold text-[#fbd784] tracking-[6px] text-[14px] lg:text-[18px] '>HIKING ESSENTIALS</p>
              </div>
              <h3 className='font-serif font-semibold text-[27px] lg:text-[64px] text-[#ffffff] mr-[4rem] lg:mr-0'>Picking the right Hiking Gear!</h3>
              <p className='font-serif text-[14px] lg:text-[18px] text-[#ffffff] mr-[5rem] lg:mr-0'>The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
              Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.</p>
              <div className='flex items-center justify-center space-x-2  cursor-pointer mr-[4rem] lg:mr-0'>
                <span className='font-serif  text-[16px] lg:text-[18px] text-[#fbd784]'>read more</span>
                <FaArrowRightLong className='text-[#fbd784] text-[20px]' />
              </div>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className='flex flex-col lg:flex-row items-center gap-6 my-10 mt-[4rem] lg:mt-[8rem] space-x-20'>
          <div className='relative w-full lg:w-1/2 flex flex-col items-center'>
            <div className='absolute -top-16 -left-16 opacity-20 text-[200px] lg:text-[240px] text-[#ffffff] font-serif mt-[-4rem] ml-[10rem] lg:ml-0'>03</div>
            <div className='z-10 space-y-4 text-center mt-[4rem]'>
              <div className='flex items-center justify-center space-x-3'>
                <span className='w-20 h-[2px] bg-[#fbd784]'></span>
                <p className='font-serif font-extrabold text-[#fbd784] tracking-[6px] text-[13px] lg:text-[18px] '>WHERE YOU GO IS THE KEY</p>
              </div>
              <h3 className='font-serif font-semibold text-[27px] lg:text-[64px] text-[#ffffff]'>Understand Your Map & Timing</h3>
              <p className='font-serif text-[14px] lg:text-[18px] text-[#ffffff]'>To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..</p>
              <div className='flex items-center space-x-2 justify-center cursor-pointer'>
                <span className='font-serif text-[#fbd784]'>read more</span>
                <FaArrowRightLong className='text-[#fbd784] text-[20px]' />
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center w-full lg:w-1/2 mt-[4rem] lg:mt-0 mx-auto'>
            <img src={Ana} className='w-[350px] h-[500px] lg:w-full lg:h-auto' alt="an outstretched hand holding a compass" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
