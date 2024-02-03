import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col p-1 shadow-md'>
        <div>
              <img className='h-[240px] w-[100%]' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQnbvsyxG97L3RE8XNqOt-cPEXToBAgabbxNI8iLURFXREdB1yp" alt="pic" />
        </div>
        <div className='px-8 mt-4'>
            <h1 className='text-2xl font-semibold'>Save up to $740 on Surface Pro 9</h1>
            <p className='mt-2'>The tablet flexibility you want and the laptop performance you need—all in one ultra-portable device. Offer ends 2/15.</p>
        </div >
        <button className='bg-blue-700 text-white w-[160px] p-2 ml-8 mt-5 mb-4'>Shop Surface Pro 9</button>
    </div>
  )
}

export default Hero