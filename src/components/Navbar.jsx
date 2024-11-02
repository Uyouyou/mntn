import React, { useState } from 'react';
import { HiOutlineUserCircle } from "react-icons/hi";
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <nav className='sticky top-0 w-full bg-[#0B1D26] bg-opacity-90 backdrop-blur-md z-50'>
      <div className='container mx-auto flex justify-between items-center h-[100px] px-4'>
        {/* Logo */}
        <div className='flex items-center ml-[5rem]'>
          <h1 className='text-[27px] lg:text-[32px] font-bold text-white leading-[38.4px] tracking-[1%] font-serif'>MNTN</h1>
        </div>
        
        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center space-x-4 gap-2 mx-auto'>
          <li><a href="#" className='font-serif font-bold text-base lg:text-[18px] leading-[21.76px] text-white'>Equipment</a></li>
          <li><a href="#" className='font-serif font-bold text-base lg:text-[18px] leading-[21.76px] text-white'>About Us</a></li>
          <li><a href="#" className='font-serif font-bold text-base lg:text-[18px] leading-[21.76px] text-white'>Blog</a></li>
        </ul>
        
        {/* Account Icon */}
        <div className='hidden md:flex items-center mr-[5rem]'>
          <a href="#" className='flex items-center font-semibold space-x-2 text-base lg:text-[17px] leading-[20.55px] text-white'>
            <HiOutlineUserCircle className='w-6 h-6 mr-[0.6rem]' />
            Account
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden text-2xl cursor-pointer font-bold text-white z-50' onClick={toggleNav}>
          {open ? <LiaTimesSolid /> : <CiMenuFries />}
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-8 bg-[#0B1D26] bg-opacity-95 transition-all duration-700 ease-in-out md:hidden z-40">
            <li><a href="#" onClick={toggleNav} className='font-serif font-bold text-[18px] leading-[21.76px] text-white'>Equipment</a></li>
            <li><a href="#" onClick={toggleNav} className='font-serif font-bold text-[18px] leading-[21.76px] text-white'>About Us</a></li>
            <li><a href="#" onClick={toggleNav} className='font-serif font-bold text-[18px] leading-[21.76px] text-white'>Blog</a></li>
            <li>
              <a href="#" onClick={toggleNav} className='flex items-center font-semibold space-x-1 text-[18px] leading-[20.55px] text-white'>
                <HiOutlineUserCircle className='w-6 h-6 mr-[0.6rem]' />
                Account
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
