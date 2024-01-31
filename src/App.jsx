import React from 'react'

const App = () => {
  return (
    <div className='flex bg-slate-100 h-screen'>
      <div className='w-[810px] flex flex-col justify-center items-center mt-[-200px] ml-[120px]'>
        <img className='ml-[-240px] w-[400px]' src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="logo" />
        <p className='ml-[-200px] text-2xl'>Connect with friends and the world <br />around you on Facebook.</p>
      </div>
      <div className='mt-[-120px] mr-[200px] flex flex-col items-center justify-center'>
        <div className='mb-[16px] shadow-lg bg-white p-[16px] flex flex-col border h-[360px] w-[360px]p-[20px] rounded-lg'>
        <input className='px-4 mb-[12px] border rounded-lg h-[48px] w-[348px]'type="text" placeholder='Email or phone number'name="" id="" />
        <input className='px-4 mb-[15px] border rounded-lg h-[48px] w-[348px]' type="text" placeholder='Password' />
        <button className='mb-[22px] rounded-lg bg-blue-500 font-bold text-white h-[48px] w-[348px]'>Log in</button>
        <a className='hover:underline mb-[22px] text-center text-blue-500' href="">Forgot password?</a>
        <hr className='mb-[25px]'/>
        <div className='flex justify-center'>
        <button className=' bg-green-500 text-white font-bold rounded-lg h-[43px] w-[192px]'>Create new account</button>
        </div>
      </div>
        <p className='text-sm'><span className='font-bold'>Create a Page</span> for a celebrity, brand or business.</p>
      </div>
    </div>
  )
}

export default App

