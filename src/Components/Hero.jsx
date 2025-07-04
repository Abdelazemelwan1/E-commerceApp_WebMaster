import React, { useEffect, useState } from 'react'
import hero1 from "../assets/images/hero1.png"
import hero2 from "../assets/images/hero2.png"
import banner1 from "../assets/images/Container1.png"
import banner2 from "../assets/images/Container2.png"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FaStar } from 'react-icons/fa'
import { FaArrowRightLong } from "react-icons/fa6";
import bennerhome from "../assets/images/bannerhome.png"
import { useCart } from '../Context/CartContext'
import { toast } from 'react-toastify';


function Hero() {
  const [products, setproducts] = useState([])
  const { handleAdd } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        const shuffled = [...data].sort(() => 0.5 - Math.random())
        setproducts(shuffled.slice(0, 8))
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="mt-5">
      {/* Hero Images */}
      <div className="flex flex-col gap-6 mt-3">
        <div className="flex flex-col justify-between gap-4 lg:flex-row">
          <img src={hero1} alt="hero1" className="w-full lg:w-[1070px] h-auto" />
          <img src={hero2} alt="hero2" className="w-full lg:w-[370px] h-auto" />
        </div>

        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <img src={banner1} alt="banner1" className="w-full sm:w-[48%] h-auto object-contain" />
          <img src={banner2} alt="banner2" className="w-full sm:w-[48%] h-auto object-contain" />
        </div>
      </div>
      

      {/* Best Sellers */}
      <section className='my-10 mt-10'>
        <div className="flex flex-col items-start justify-between gap-4 mb-6 sm:flex-row sm:items-center">
          <div>
            <p className='text-3xl font-bold'>BEST SELLERS</p>
            <p className='text-[#9B9BB4]'>Do not miss the current offers until the end of March.</p>
          </div>
          <button className='rounded-[30px] border border-[#D9D9E9] p-3 flex items-center gap-4'>View All <FaArrowRightLong />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="flex flex-col border border-[#EDEEF5] p-6 sm:p-10 h-[550px] bg-white rounded relative">
                <span className="absolute px-2 py-1 text-sm text-white bg-[#35AFA0] rounded-[4px] top-[18px] left-[18px]">
                  -30%
                </span>
                <img src={product.image} alt={product.title} className="object-contain w-full h-48 mb-2" />
                <h3 className="mb-2 text-lg font-semibold sm:text-2xl">{product.title}</h3>
                <p className="text-sm font-medium text-[#00B853] mb-2">IN STOCK</p>

                <div className="flex items-center mb-2 text-sm text-yellow-500">
                  {Array.from({ length: Math.round(product.rating.rate) }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="ml-2 text-gray-500">({product.rating.count})</span>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <p className="text-gray-400 line-through">${(product.price * 1.3).toFixed(2)}</p>
                  <p className="font-bold text-green-600">${product.price}</p>
                </div>

                 <button
                   onClick={() => {
                    handleAdd(product);
                    toast.success("Added Successfully");
                  }}              
                  className='bg-[#FFCD00] rounded-3xl px-3 py-3 text-center mt-auto'
                >
                  Add To Cart
                </button>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <img src={bennerhome} alt="bannerhome" className='w-full mb-10' />
    </div>
  )
}

export default Hero
