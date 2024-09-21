import React from 'react'
import { Icon } from '@iconify/react';

function Session10() {
  return (
    <div className='bg-[#F5F7FA] mt-24 flex flex-col justify-center items-center h-[209px]'>
        <div>
            <h1 className='text-[#263238] text-[44px] text-center font-semibold'>Pellentesque suscipit <br />  fringilla libero eu.</h1>
        </div>
        <button type="button" className='flex flex-row items-center justify-center gap-2 text-white mt-3 bg-[#4CAf4F] w-[124px] h-[36px] rounded-sm'><span className='text-[13px] '>Get a Demo</span><Icon icon="ph:arrow-right-bold" width="1rem" height="1rem"/></button>

    </div>
  )
}

export default Session10