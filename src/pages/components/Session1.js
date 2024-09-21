import React from 'react'

function Session1() {
  return (
    <div>
    <div className='w-full bg-[#F5F7FA] bg-cover flex flex-row space-x-10 justify-evenly items-center h-[416px]'>
    <div className='flex flex-col justify-start space-y-2'>
    <div className='flex flex-col'>
        <h1 className='text-[44px] font-bold'>Lessons and insights</h1>
        <p className='text-[#4CAF4F] text-[44px] font-bold'>from 8 years</p>
    </div>
    <p className='text-xs opacity-50'>Where to grow your business as a photographer: site or social media?</p>
    <button type="button" className='w-[89.55px] h-[36.49px] px-99 py-22 border-2 bg-[#4CAF4F] text-white text-[11px] rounded-md'>Register</button>
    </div>
    <div>
    <img src="image/Illustration.png" alt="banner_image" />
    </div>
    </div>
    </div>
  )
}

export default Session1