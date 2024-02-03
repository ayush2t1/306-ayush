import React from 'react'
import { FaRegPlayCircle } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const Slider = () => {
  return (
    <div className='p-4 my-3 flex items-center justify-between mx-auto w-[220px] text-sm'>
          <div className='text-[20px]'><FaRegPlayCircle /></div>
          <div className='text-[20px]'><FaAngleLeft /></div>
          <div className='text-[11px]'> <FaRegCircle /></div>
          <div className='text-[11px]'><FaCircle /></div>
          <div className='text-[20px]'><FaAngleRight /></div>
    </div>
  )
}

export default Slider