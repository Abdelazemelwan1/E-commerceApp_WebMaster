
import React, {useEffect , useState} from 'react'
import Style from './Layout.module.css';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';
import NavColor from './../NavColor/NavColor';
import NavAbout from './../NavAbout/NavAbout';
import NavBasket from './../NavBasket/NavBasket';


export default function Layout() {
  return <>
  <NavColor/> 
  <NavAbout />
  <div className='sticky top-0 z-30'>

  <NavBasket/>
  <Navbar/>
  </div>

{/* <div className=' max-w-[90%] sm:max-w-[36rem] md:max-w-[44rem] lg:max-w-[60rem]  xl:max-w-[74rem]  2xl:max-w-[82rem] container mx-auto'> */}

  <Outlet/>
{/* </div> */}


  <Footer />
  
  </>
  
}

