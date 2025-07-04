import React, {useEffect , useState} from 'react'
import Style from './NavAbout.module.css';
import { Link, Links } from 'react-router-dom';
import Hand from '../../assets/Hand.svg';
import Iconend from '../../assets/Iconend.svg';


export default function NavAbout() {
  return <>
  <div  className='border border-transparent border-b-[#E4E5EE] '>

    <div className='  max-w-[90%] flex-wrap  sm:max-w-[36rem] md:max-w-[44rem] lg:max-w-[60rem]  xl:max-w-[74rem]  2xl:max-w-[82rem] container mx-auto flex items-center justify-between py-2.5'>
      <ul className='flex items-center gap-4 w-full lg:w-auto  justify-center lg:justify-start'>
        <li className='group'>
          <Link to={"/AboutUs"} className='group-hover:text-[#35AFA0] text-[#3E445A] font-normal text-[12px] capitalize'>About Us</Link>
        </li>
        <li className='group'>
          <Link to={""} className='group-hover:text-[#35AFA0] text-[#3E445A] font-normal text-[12px] capitalize'>Compare</Link>
        </li>
        <li className='group'>
          <Link to={""} className='group-hover:text-[#35AFA0] text-[#3E445A] font-normal text-[12px] capitalize'>Wishlist</Link>
        </li>
      </ul>

      <div className='flex items-center justify-center lg:justify-start gap-2 flex-wrap w-full lg:w-auto'>
        <div className='flex items-center gap-1'>
          <img src={Hand} alt="" />
          <p className='font-normal text-[12px] text-[#3E445A]'>100% Secure delivery without contacting the courier</p>
        </div>
        <div className='border border-t-amber-50 border-b-amber-50 flex items-center gap-1 px-2'>
          <p className='font-normal text-[12px] '>Need help? Call Us: <span className='font-bold text-[#35AFA0]'>+ 0020 500</span></p>
        </div>
        <ul className='flex items-center gap-4 '>
          <li className='group'>
            <Link to={""} className='group-hover:text-[#35AFA0] text-[#3E445A] font-normal text-[12px] capitalize flex items-center gap-1'>English <img src={Iconend} alt="" /></Link>
          </li>
          <li className='group'>
            <Link to={""} className='group-hover:text-[#35AFA0] text-[#3E445A] font-normal text-[12px] capitalize flex items-center gap-1'>USD <img src={Iconend} alt="" /></Link>
          </li>
        
        </ul>
      </div>

    </div>
  </div>
  
  </>
  
}
