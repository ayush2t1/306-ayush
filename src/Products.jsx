import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const Products = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='mx-3'>
              <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-M1-Platinum-01-1?wid=380&hei=213&fit=crop" alt="1" />
              <h1 className='text-xl font-semibold pt-10'>Save up to $300 on Surface Laptop 5</h1>
              <p className='pt-3'>Sophisticated style and multitasking speed powered by 12th Gen Intel® Core. Offer ends 2/8.</p>
              <div className='py-6 mb-8'><a className='text-blue-600 font-semibold' href="/">Shop Surface Laptop 5 ></a></div>
        </div>
          <div className='mx-3'>
              <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-Studio-2-CONS-M001?wid=380&hei=213&fit=crop" alt="1" />
              <div className='py-1 mt-4'>
                <button className='px-3 py-1 font-bold bg-yellow-400'>New</button>
              </div>
              <h1 className='text-xl font-semibold '>Surface Laptop Studio 2</h1>
              <p className='pt-3'>Cutting-edge design meets incredible performance in this versatile laptop for creativity and entertainment.</p>
              <div className='py-6 mb-8'><a className='text-blue-600 font-semibold' href="/">Shop Now ></a></div>
          </div>
          <div className='mx-3'>
              <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-S-1TB-Black-Merch-01?wid=380&hei=213&fit=crop" alt="1" />
              <h1 className='text-xl font-semibold pt-10'>
                  Power your dreams</h1>
              <p className='pt-3'>Introducing Xbox Series S in Carbon Black, now with a 1 TB SSD. Experience next-gen speed and performance.</p>
              <div className='py-6 mb-8'><a className='text-blue-600 font-semibold' href="/">Shop Now ></a></div>
          </div>
          <div className='mx-3'>
              <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-Lifestyle-Sandstone-Icon-Toss?wid=380&hei=213&fit=crop" alt="1" />
              <h1 className='text-xl font-semibold pt-10'>Maximize the everyday woth Microsoft 365</h1>
              <p className='pt-3'>Get online protection, secure cloud storage, and innovative apps designed to fit your needs—all in one plan.</p>
              <div className='py-6 mb-8'>
                <a className='text-blue-600 font-semibold pr-10' href="/">For 1 person ></a>
                <a className='text-blue-600 font-semibold' href="/">For up to 6 people ></a>
              </div>
          </div>
          <div className='mx-3'>
              <img className='bg-contain bg-center' src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Xbox-Series-S-Light-Background:VP5-1596x600" alt="1" />
              <h1 className='text-xl font-semibold pt-10'>Xbox Series X</h1>
              <p className='pt-3'>The fastest, most powerful Xbox ever</p>
              <div className='py-6 mb-8'><button className='bg-blue-700 text-white w-[180px] py-2 px-3'>Shop Xbox Series X</button></div>
          </div>
    </div>
  )
}

export default Products