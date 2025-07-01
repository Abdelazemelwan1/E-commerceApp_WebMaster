import React, {useEffect , useState} from 'react'
import Style from './AboutUs.module.css';
import about from "../../assets/about-people.jpg.svg"
import UseTitle from '../UseTitle/UseTitle';


export default function AboutUs() {
  UseTitle('About');
  return <>
  <div className='bg-[#FFFFFF]'>
    <div className=' flex flex-col items-center justify-center [background-image:linear-gradient(#00000066,#00000066),url(../src/assets/about-header.jpg.svg)] bg-cover bg-no-repeat  min-h-[622px] '>
        <h2 className='text-[#FFFFFF] font-semibold text-[40px] lg:text-[60px] '>About for Bacola</h2>
        <p className='text-[#FFFFFF] font-semibold text-[12px] uppercase'>We can do more for you</p>
    </div>


    <div className=' max-w-[90%] sm:max-w-[36rem] md:max-w-[44rem] lg:max-w-[60rem]  xl:max-w-[74rem]  2xl:max-w-[82rem] container mx-auto mt-10'>
      
      <div>
        <p className='text-[#202435] font-normal text-[14px] mb-2.5'>In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id
          rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
          Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
        </p>
        <h3 className='mb-4 text-[#202435] font-semibold text-[22px] lg:text-[32px] sm:ps-10 xs:w-[50%] sm:w-[80%] md:w-[70%] lg:w-[70%] xl:w-[50%]'>Quisque erat urna, congue et libero in eleifend euismod velit.</h3>
        <p className='text-[#202435] font-normal text-[14px]  sm:ps-10 '>In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim.
          Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id
          interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
        </p>
      </div>
      <div className='relative mb-5 lg:mb-22'>
        <div className='grid lg:grid-cols-[1fr_1fr] items-center gap-5 mt-10'>
          <div><img className=' w-full'  src={about} alt="" /></div>
          <div className='text-center lg:text-start lg:pt-[120px] lg:pb-[216px]'>
            <p className='lg:ps-10 text-[#202435] font-normal text-[16px] '>Rachel Leonard - Bacola CEO</p>
            <h2 className='text-[#202435] font-semibold text-[28px] lg:w-[70%]'>Duis convallis luctus pretium. Pellentesque habitant morbi</h2>
            <div className='lg:ps-10 space-y-4'>
                <p className=' text-[#202435] font-normal text-[14px] [line-height:24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                  facilisis.
                </p>
                <p className=' text-[#202435] font-normal text-[14px] [line-height:24px]'>In fermentum mi ut sapien semper, a sagittis lorem vulputate. Integer gravida,
                  dui eget aliquet tempus, turpis orci vehicula ipsum, eget porttitor sapien tortor
                  at neque. Cras id pulvinar lacus, ac volutpat neque. Ut at magna id justo
                  bibendum lobortis. Integer tortor nulla, ultricies et nisi sit amet, interdum
                  dictum felis. In semper laoreet dui vitae pharetra. Etiam sit amet molestie nulla,
                  eu efficitur orci. Praesent rutrum ante justo, eget malesuada ante ornare ac. Ut
                  dignissim blandit urna, eget euismod leo rhoncus nec. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque lobortis
                  libero ante. Nullam in feugiat erat. Aenean sed justo dapibus, sodales nisi ut,
                  fringilla lorem. Vestibulum in orci ac nisl condimentum fermentum at et sem.
                  Curabitur fermentum dolor eu lacus consectetur varius.
                </p>
            </div>
          </div>
        </div>

        <div className='bg-[#FFFFFF] pt-3 lg:pt-[60px] lg:pb-[76px] lg:ps-[100px] rounded-[7px] lg:ms-[115px] lg:absolute lg:bottom-[-9%]'>
          <p className='text-[#202435] font-normal text-[14px] [line-height:24px]'>In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec,
            consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in
            dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit
            ante, vel vulputate tortor blandit nec.
          </p>
        </div>

      </div>
      <div className=' mb-10'>
        <p className='text-[#202435] font-normal text-[14px] [line-height:24px]'>In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id
          rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
          Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
        </p>
      </div>

    </div>




  </div>
  </>
  
}
