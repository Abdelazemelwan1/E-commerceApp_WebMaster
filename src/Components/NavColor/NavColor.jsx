import React, { useEffect, useState } from 'react'
import Style from './NavColor.module.css'

export default function NavColor() {
    
  return (
    <>
      <div className='bg-[#35AFA0]'>
        <div className='max-w-[90%] sm:max-w-[36rem] md:max-w-[44rem] lg:max-w-[60rem]  xl:max-w-[74rem]  2xl:max-w-[82rem] container mx-auto '>
          <h3 className='font-normal text-[11px]  sm:text-[12px] text-[#FFFFFF] text-center py-2'>Due to current circumstances, there may be slight delays in order processing</h3>
        </div>
      </div>
    </>
  );
}

