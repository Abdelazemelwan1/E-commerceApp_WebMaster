import React, {useRef, useState} from 'react'
import Style from './Navbar.module.css';
import { FiAlignLeft, FiMenu } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';
import iconFood from "../../assets/Icon.svg"
import IconBa from "../../assets/IconBa.svg"
import IconBev from "../../assets/IconBev.svg"

export default function Navbar() {
  
let nav = useRef(null)
const hideNav = ()=> {
  nav.current.classList.add('hidden')
}

  
  return <>
  

<nav className="bg-[#FFFFFF]  border border-[#E3E4E6]  dark:bg-gray-900 dark:border-gray-700 shadow-lg ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to={""} className="relative flex items-center justify-between rounded-full space-x-3  bg-[#35AFA0] px-2 py-4">
      {/* <h2 > */}

      <FiMenu  className='md:text-3xl lg:text-4xl text-white' />
      <h3 className='text-white uppercase font-semibold text-[15px]'>ALL CATEGORIES</h3>
      <RiArrowDropDownLine className='md:text-3xl lg:text-4xl text-white m-0'/>
      <p className=' border border-[#FFFFFF]  uppercase font-semibold text[#71778E] text-[10px] bg-[#EDEEF5] px-2 py-1 rounded-full absolute bottom-[0] start-[15%] translate-y-[40%]'>TOTAL 50 PRODUCTS</p>


      {/* </h2> */}

    </Link>


    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
     aria-controls="navbar-dropdown" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>



    <div className="hidden w-full lg:block lg:w-auto "  ref={nav} id="navbar-dropdown">
      <ul className="flex flex-col  font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 text-[15px] lg:space-x-1 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
        
        <li>
          <NavLink to={""} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="rounded-3xl flex items-center justify-between w-full py-2 px-3 ">Home
            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
            </svg>
          </NavLink>
          {/* Dropdown menu */}
          <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
              <li>
                <Link to={"Homeone"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home one</Link>
              </li>
              <li>
                <Link to={"HomeTwo"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home Two</Link>
              </li>
              <li>
                <Link to={"HomeThree"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home three</Link>
              </li>
              <li>
                <Link to={"HomeFor"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home fore</Link>
              </li>
            </ul>
            
          </div>
        </li>
        <li>
          <NavLink to={"Shop"} className=" text-[#3E445A] uppercase text-[15px] font-semibold  block py-2 px-3 rounded-3xl" onClick={()=>hideNav()} >Shop</NavLink>
        </li>
        <li>
          <NavLink to={"MeatsSeafood"} className=" text-[#3E445A] uppercase text-[15px] font-semibold py-2 px-3 rounded-3xl flex items-center gap-.5" onClick={()=>hideNav()} > <img src={iconFood} alt="" /> Meats & Seafood</NavLink>
        </li>
        <li>
          <NavLink to={"Bakery"} className=" text-[#3E445A] uppercase text-[15px] font-semibold py-2 px-3 rounded-3xl flex items-center gap-.5" onClick={()=>hideNav()} > <img src={IconBa} alt="" /> BAkery</NavLink>
        </li>
        <li>
          <NavLink to={"Beverages"} className=" text-[#3E445A] uppercase text-[15px] font-semibold py-2 px-3 rounded-3xl flex items-center gap-.5" onClick={()=>hideNav()} > <img src={IconBev} alt="" /> Beverages</NavLink>
        </li>
        <li>
          <NavLink to={"Blog"} className=" text-[#3E445A] uppercase text-[15px] font-semibold  block py-2 px-3 rounded-3xl" onClick={()=>hideNav()} >Blog</NavLink>
        </li>
        <li>
          <NavLink to={"Contact"} className=" text-[#3E445A] uppercase text-[15px] font-semibold  block py-2 px-3 rounded-3xl" onClick={()=>hideNav()} >Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


  
  </>
  
}
