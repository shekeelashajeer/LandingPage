import React from 'react'
import { Icon } from '@iconify/react'

function Session9() {
  return (
    <div>
      <div className='mt-8 flex flex-col justify-center items-center'>
        <div className='w-[772px] h-[87px] flex flex-col justify-center items-center'>
          <h1 className='text-[25px] text-[#4D4D4D] font-bold text-center'>Caring is the new marketing</h1>
          <p className='text-[11px] text-[#717171] text-center w-[437px] mt-2'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        </div>
        <div className='flex flex-row gap-3'>
  <div className='flex flex-col gap-5 mt-4 items-center relative'>
    <img src="image/1.png" alt="" className='rounded-md h-[200px] w-[223px] object-cover' />
    <div className='w-[223px] h-[123px] text-center bg-white absolute -bottom-6 rounded-md flex flex-col items-center p-4 shadow-lg'>
      <p className='text-[14px] text-[#717171] font-bold h-[45px] overflow-hidden'>
        Creating Streamlined Safeguarding Processes with OneRen
      </p>
      <button type="button" className='flex flex-row items-center gap-2 text-[#4CAF4F] mt-3'>
        <span className='text-[13px] font-bold'>Read more</span>
        <Icon icon="ph:arrow-right-bold" width="1rem" height="1rem" />
      </button>
    </div>
  </div>

  <div className='flex flex-col gap-5 mt-4 items-center relative'>
    <img src="image/image 19.png" alt="" className='rounded-md h-[200px] w-[223px] object-cover' />
    <div className='w-[223px] h-[123px] text-center bg-white absolute -bottom-6 rounded-md flex flex-col items-center p-4 shadow-lg'>
      <p className='text-[14px] text-[#717171] font-bold h-[45px] overflow-hidden'>
      What are your safeguarding responsibilities and how can you manage them?
      </p>
      <button type="button" className='flex flex-row items-center gap-2 text-[#4CAF4F] mt-3'>
        <span className='text-[13px] font-bold'>Read more</span>
        <Icon icon="ph:arrow-right-bold" width="1rem" height="1rem" />
      </button>
    </div>
  </div>

  <div className='flex flex-col gap-5 mt-4 items-center relative'>
    <img src="image/image 20.png" alt="" className='rounded-md h-[200px] w-[223px] object-cover' />
    <div className='w-[223px] h-[123px] text-center bg-white absolute -bottom-6 rounded-md flex flex-col items-center p-4 shadow-lg'>
      <p className='text-[14px] text-[#717171] font-bold h-[45px] overflow-hidden'>
        Revamping the Membership Model with Triathlon Australia
      </p>
      <button type="button" className='flex flex-row items-center gap-2 text-[#4CAF4F] mt-3'>
        <span className='text-[13px] font-bold'>Read more</span>
        <Icon icon="ph:arrow-right-bold" width="1rem" height="1rem" />
      </button>
    </div>
  </div>
</div>

        

      </div>
    </div>
  )
}

export default Session9