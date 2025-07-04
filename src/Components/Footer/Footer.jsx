import React, {useEffect , useState} from 'react'
import Style from './Footer.module.css';
import { Link } from 'react-router-dom';
import foot1 from '../../assets/foot1.svg';
import foot2 from '../../assets/foot2.svg';
import foot3 from '../../assets/foot3.svg';
import foot4 from '../../assets/foot4.svg';
import { LuPhoneCall } from 'react-icons/lu';
import googleplay from '../../assets/google-play.png.svg';
import appstore from '../../assets/app-store.png.svg';
import payments from '../../assets/payments.jpg.svg';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io';

export default function Footer() {
  return <>
  <footer>
    <div className='bg-[#35AFA0] [background-image:url(../src/assets/coupon.png.svg)] bg-no-repeat [background-position:bottom_right] py-16 '>
      <div className=" max-w-[90%] sm:max-w-[36rem] md:max-w-[44rem] lg:max-w-[60rem]  xl:max-w-[74rem]  2xl:max-w-[82rem] container mx-auto">
        <div className=''>
          <p className='flex items-center gap-1'>
            <Link className='font-light text-[16px] text-[#FFFFFF] [text-decoration:revert]'>$20 discount </Link> <span className='text-[#FFFFFF] [text-decoration:none]'> for your first order</span>
          </p>
          <h3 className='font-semibold text-[26px] text-[#FFFFFF] text-shadow-neutral-900 text-shadow-2xs '>Join our newsletter and get...</h3>
          <h6 className=' font-normal text-[13px] text-[#FFFFFF] text-shadow-neutral-900 text-shadow-md  pb-4 pt-2  '>Join our email subscription now to get updates<br/> on promotions and coupons.</h6>
          <div className="relative sm:max-w-sm md:max-w-sm lg:max-w-lg">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z">
                    </path>
                  </svg>
              </div>
              <input type="search" id="default-search" className=" text-[#FFFFFF]block w-full p-4 ps-10 text-sm text-gray-900 border focus:outline-none border-[#E4E5EE] rounded-lg bg-gray-50 " placeholder="Your email address" required />
              <button type="submit" className="text-white absolute end-1 bottom-1 bg-[#35AFA0] hover:bg-[#35afa1bc]  outline-none font-medium rounded-md text-sm px-4 py-[13px] ">Subscribe</button>
          </div>
        </div>

      </div>
    </div>

    <div className="main-Footer bg-[#F7F8FD]">
      <div className="border py-3 border-transparent  border-b-[#E4E5EE] max-w-[90%] sm:max-w-[36rem] md:max-w-[44rem] lg:max-w-[60rem]  xl:max-w-[74rem]  2xl:max-w-[82rem] container mx-auto">
        <div>
          <ul className='flex items-center flex-wrap w-full justify-between px-7'>
            <li className='flex w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 items-center gap-2 justify-center text-center py-2 '>
              <img src={foot1} alt="" />
              <p className=' text-[#202435] font-medium text-[13px]'>Everyday fresh products</p>
            </li>
            <li className='flex w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 items-center gap-2 justify-center text-center py-2 border border-transparent sm:border-l-[#E4E5EE]  lg:border-l-[#E4E5EE]'>
              <img src={foot2} alt="" />
              <p className=' text-[#202435] font-medium text-[13px]'>Free delivery for order over $70</p>
            </li>
            <li className='flex w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 items-center gap-2 justify-center text-center py-2 border border-transparent md:border-l-transparent lg:border-l-[#E4E5EE]'>
              <img src={foot3} alt="" />
              <p className=' text-[#202435] font-medium text-[13px]'>Daily Mega Discounts</p>
            </li>
            <li className='flex w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 items-center gap-2 justify-center text-center py-2 border border-transparent border-l-transparent sm:border-l-[#E4E5EE] lg:border-l-transparent  xl:border-l-[#E4E5EE]'>
              <img src={foot4} alt="" />
              <p className=' text-[#202435] font-medium text-[13px]'>Best price on the market</p>
            </li>
          </ul>
        </div>
      </div>

    </div>

    <div className='bg-[#F7F8FD]'>
      <div className=" max-w-[90%] sm:max-w-[36rem] md:max-w-[44rem] lg:max-w-[60rem]  xl:max-w-[74rem]  2xl:max-w-[82rem] container mx-auto">
        <div className='flex py-14 items-start justify-between flex-wrap gap-y-6'>

          <div className='text-center lg:text-start w-full xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
            <h1 className='font-semibold text-[16px] text-[#202435] mb-2'>Fruit & Vegetables</h1>
            <ul>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Fresh Vegetables</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Herbs & Seasonings</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Fresh Fruits</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Cuts & Sprouts</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Exotic Fruits & Veggies</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Packaged Produce</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Party Trays</Link></li>
            </ul>
          </div>
          <div className='text-center lg:text-start w-full xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
            <h1 className='font-semibold text-[16px] text-[#202435] mb-2'>Breakfast & Dairy</h1>
            <ul>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Milk & Flavoured Milk</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Milk & Flavoured Milk</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Cheese</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Eggs Substitutes</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Honey</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Marmalades</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Sour Cream and Dips</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Yogurt</Link></li>
            </ul>
          </div>
          <div className='text-center lg:text-start w-full xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
            <h1 className='font-semibold text-[16px] text-[#202435] mb-2'>Meat & Seafood</h1>
            <ul>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Breakfast Sausage</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Dinner Sausage</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Beef</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Chicken</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Sliced Deli Meat</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Shrimp</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Wild Caught Fillets</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Crab and Shellfish</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Farm Raised Fillets</Link></li>
            </ul>
          </div>
          <div className='text-center lg:text-start w-full xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
            <h1 className='font-semibold text-[16px] text-[#202435] mb-2'>Beverages</h1>
            <ul>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Water</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Sparkling Water</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Soda & Pop</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Coffee</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Milk & Plant-Based Milk</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Tea & Kombucha</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Drink Boxes & Pouches</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Craft Beer</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Wine</Link></li>
            </ul>
          </div>
          <div className='text-center lg:text-start w-full xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
            <h1 className='font-semibold text-[16px] text-[#202435] mb-2'>Breads & Bakery</h1>
            <ul>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Milk & Flavoured Milk</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Butter and Margarine</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Cheese</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Eggs Substitutes</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Honey</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Marmalades</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Sour Cream and Dips</Link></li>
              <li><Link to={""} className='font-normal text-[13px] text-[#71778E]'>Yogurt</Link></li>
            </ul>
          </div>
        </div>

      </div>
    </div>

    <div className="">
      <div className=" max-w-[90%] sm:max-w-[36rem] md:max-w-[44rem] lg:max-w-[60rem]  xl:max-w-[74rem]  2xl:max-w-[82rem] container mx-auto">
        <div className='border py-6 border-transparent  border-b-[#E4E5EE] grid [justify-items:center] sm:[justify-items:center] lg:[justify-items:stretch]  lg:grid-cols-[1fr_3fr] gap-y-3 '>
          <div className='  flex items-center gap-3'>
            <p className='flex items-center justify-center w-[40px] h-[40px] rounded-full border border-[#E4E5EE] ' ><LuPhoneCall /></p> 
            <div>
              <h3 className='font-semibold text-[20px] text-[#202435]'>8 800 555-55</h3>
              <p className='font-normal text-[11px] text-[#202435]'>Working 8:00 - 22:00</p>
            </div>
          </div>

          <div className='text-center flex justify-end items-center gap-4 [flex-direction:column] sm:[flex-direction:column] md:[flex-direction:row]'>
            <div className='text-center'>
              <h2 className='font-semibold text-[16px] text-[#202435]'>Download App on Mobile :</h2>
              <p className='font-normal text-[12px] text-[#202435]'> 15% discount on your first purchase</p>
            </div>
            <div className='flex gap-1.5 items-center'>

            <img src={googleplay} alt="" />
            <img src={appstore} alt="" />
            </div>
            <ul className='flex gap-3'>
              <li className='w-[30px] h-[30px] flex justify-center items-center  rounded-full border border-[#E4E5EE] text-[#233A95] cursor-pointer'><FaFacebookF /></li>
              <li className='w-[30px] h-[30px] flex justify-center items-center  rounded-full border border-[#E4E5EE] text-[#233A95] cursor-pointer'><IoLogoTwitter /></li>
              <li className='w-[30px] h-[30px] flex justify-center items-center  rounded-full border border-[#E4E5EE] text-[#233A95] cursor-pointer'><IoLogoInstagram /></li>
            </ul>
          </div>
        </div>
        <div className='py-6 flex items-center justify-between gap-y-3 [flex-direction:column] lg:[flex-direction:row]'>
          <p className='text-[#9B9BB4] font-normal text-[12px]'>Copyright 2025 © All rights reserved by Blackrise Theme</p>
          <div className='flex items-center gap-4 [flex-direction:column] md:[flex-direction:row]'>
            <ul className='flex gap-4'>
              <li><Link className='text-[#9B9BB4] font-normal text-[12px]'>Privacy Policy</Link></li>
              <li><Link className='text-[#9B9BB4] font-normal text-[12px]'>Terms and Conditions</Link></li>
              <li><Link className='text-[#9B9BB4] font-normal text-[12px]'>Cookie</Link></li>
            </ul>
            <img src={payments} alt="" />
          </div>
        </div>
      </div>
    </div>

  </footer>
  
  </>
  
}
