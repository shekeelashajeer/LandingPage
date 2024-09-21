import React from 'react'

function Session2() {
    const images = [
        { id: 1, url: "image/Logo.png", alt: "Logo " },
        { id: 2, url: "image/Logo (1).png", alt: "Logo 1" },
        { id: 3, url: "image/Logo (2).png", alt: "Logo 2" },
        { id: 4, url: "image/Logo (3).png", alt: "Logo 3" },
        { id: 5, url: "image/Logo (4).png", alt: "Logo 4" },
        { id: 6, url: "image/Logo (5).png", alt: "Logo 5" },
        { id: 7, url: "image/Logo (2).png", alt: "Logo 6" }
    ]
  return (
    <div className='mt-8 h-[132px] '>
        <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col space-y-1'>
            <h1 className='font-bold text-center text-[#4D4D4D] text-[25px]'>Our Clients</h1>
            <p className='text-[11px] text-[#717171] text-center'>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className='flex flex-row justify-between w-[801px] h-[68px] mt-5'>
            {images.map((image) => (
                <img src={image.url} className='w-[27px] h-[27px]' alt="" />

            ))}
            
        </div>
        </div>
    </div>
  )
}

export default Session2