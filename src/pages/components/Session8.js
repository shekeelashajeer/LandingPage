import React from 'react'
import { Icon } from '@iconify/react';


function Session8() {
    const images = [
        { id: 1, url: "image/Logo.png", alt: "Logo " },
        { id: 2, url: "image/Logo (1).png", alt: "Logo 1" },
        { id: 3, url: "image/Logo (2).png", alt: "Logo 2" },
        { id: 4, url: "image/Logo (3).png", alt: "Logo 3" },
        { id: 5, url: "image/Logo (4).png", alt: "Logo 4" },
        { id: 6, url: "image/Logo (5).png", alt: "Logo 5" },
    ]
  return (
    <div>
        <div className='mt-8 h-[271px] flex flex-row items-center justify-center gap-8'>
            <div>
                <img src="image/black.png" className='w-[250px] h-[250px]' alt="blackimg" />
            </div>
            <div className='w-[520px] h-[226px] space-y-2'>
            <p className='text-[11px] text-[#171717]'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            <h1 className='text-[13px] text-[#4CAF4F] font-bold'>Tim Smith</h1>
            <p className='text-[11px] text-[#89939E]'>British Dragon Boat Racing Association</p>
            <div className='w-[520px] h-[33px] flex flex-row gap-6 justify-between'>
              <div className='w-[520] flex flex-row justify-between gap-6'>{images.map((image) => (
                <img src={image.url} className='w-[33px] h-[33px]' alt="icons" />

            ))}
            <button type="button" className='flex flex-row items-center gap-2 text-[#4CAF4F]'><span className='text-[13px] font-semibold'>Meet All Customers</span><Icon icon="ph:arrow-right-bold" width="1rem" height="1rem"/></button>
            </div>
            
            

            </div>
            </div>
        </div>
    </div>
    
  )}


export default Session8