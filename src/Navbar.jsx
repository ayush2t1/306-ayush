import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { VscSearch } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { PiUserCirclePlusThin } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className='flex justify-between h-[50px] mx-auto px-2 items-center'>
          <div className='text-[25px]'><RxHamburgerMenu /></div>
          <div className='text-[17px]'><VscSearch /></div>
          <div className='px-10'> <img className='w-[110px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" alt="logo" /></div>
          <div className='text-[20px]'><IoCartOutline /></div>
          <div className='text-[38px]'><PiUserCirclePlusThin /></div>
    </div>
  )
}

export default Navbar