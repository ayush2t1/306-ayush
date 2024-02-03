import React from 'react'
import { BiDevices } from "react-icons/bi";

const Features = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-3'>
        <div className='flex flex-col justify-center items-center text-4xl mb-7'>
              <img className='w-[40px]' src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Surface-Devices?wid=40&hei=40" alt="" />
            <a className='text-[16px] text-blue-700 underline'href="/">Shop Surface devices</a>
        </div>
          <div className='flex flex-col justify-center items-center text-4xl mb-7'>
              <img className='w-[40px]' src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Xbox-Games-Consoles?wid=40&hei=40" alt="" />
              <a className='text-[16px] text-blue-700 underline' href="/">Shop Xbox games and consoles</a>
          </div>
          <div className='flex flex-col justify-center items-center text-4xl mb-7'>
              <img className='w-[40px]' src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Accessories?wid=40&hei=40" alt="" />
              <a className='text-[16px] text-blue-700 underline' href="/">Shop for accessories</a>
          </div>
          <div className='flex flex-col justify-center items-center text-4xl mb-7'>
              <img className='w-[40px]' src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Business?wid=40&hei=40" alt="" />
              <a className='text-[16px] text-blue-700 underline' href="/">Shop for your business</a>
          </div>
          <div className='flex flex-col justify-center items-center text-4xl mb-7'>
              <img className='w-[40px]' src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365?wid=40&hei=40" alt="" />
              <a className='text-[16px] text-blue-700 underline' href="/">Choose your Microsoft 365</a>
          </div>
    </div>
  )
}

export default Features