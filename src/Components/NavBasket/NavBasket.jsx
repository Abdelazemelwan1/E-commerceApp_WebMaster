import React from 'react';
import Style from './NavBasket.module.css';
import { Link } from 'react-router-dom';
import imgLogo from '../../assets/Group.svg';
import bay from '../../assets/bay.svg';
import { CiUser } from 'react-icons/ci';
import { useCart } from '../../Context/CartContext';

export default function NavBasket() {
  const { cart } = useCart();

  const totalItems = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className='border-b-amber-200 py-3'>
      <div className='max-w-[90%] sm:max-w-[36rem] md:max-w-[44rem] lg:max-w-[60rem] xl:max-w-[74rem] 2xl:max-w-[82rem] container mx-auto'>
        <div className='[justify-items:center] grid gap-4 md:grid-cols-[1fr_2fr_1fr] lg:grid-cols-[1fr_3fr_1fr]'>

          {/* Logo */}
          <Link to="/" className=''>
            <div className='flex items-start'>
              <img src={imgLogo} alt="logo" />
              <h3 className='font-normal text-[20px] lg:text-[36px] text-[#35AFA0]'>Basket</h3>
            </div>
            <p className='text-[#3E445A] font-normal text-[11px]'>Online Grocery Shopping Center</p>
          </Link>

          {/* Search Bar */}
          <div className='w-full flex items-center'>
            <div className="relative w-[90%] mx-auto ">
              <input
                type="search"
                id="location-search"
                className="font-normal bg-[#F3F4F7] text-[14px] text-[#9595A9] block p-2.5 w-full z-20 rounded-lg focus:outline-none"
                placeholder="Search for Products, fruit, meat, eggs .etc..."
                required
              />
              <button type="submit" className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-black rounded-e-lg focus:outline-none">
                <svg className="w-4 h-4 text-[#3E445A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </button>
            </div>
          </div>

          {/* User & Cart */}
          <div className='flex items-center justify-center gap-5'>
            <div className='w-[30px] h-[30px] flex items-center justify-center rounded-full border-1 border-[#E2E4EC]'>
              <CiUser />
            </div>

            <div className='flex items-center gap-4'>
              <p className='text-[#3E445A]'>$0.00</p>

              <Link to="/cart" className='relative w-[30px] h-[30px] flex items-center justify-center rounded-full border-1 border-[#E2E4EC]'>
                <img src={bay} alt="Cart" />
                {totalItems > 0 && (
                  <span className='absolute translate-y-[-50%] top-0 end-[-40%] bg-amber-600 text-white text-xs rounded-full px-1.5'>
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
