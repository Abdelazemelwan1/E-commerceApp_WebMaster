import Style from './Home.module.css';
import UseTitle from '../UseTitle/UseTitle';
import end1 from "../../assets/images/end1.png"
import end2 from "../../assets/images/end2.png"
import end3 from "../../assets/images/end3.png"
import Hero from '../Hero';
import FinalSection from '../FinalSection';
import Products from '../Products';

export default function Home() {
  UseTitle('Home');
  return <>
 <div className="container">
        
        <Hero/>
        <Products title={"Electronics"} category={"electronics"}/>

        <div className="bg-[#FFEEF2] w-full p-4  text-center flex items-center justify-center gap-5 rounded">
          <p className="text-[#ED174A]">Super discount <span className="font-semibold underline">first purchase.</span></p>
          <p className="text-[#ED174A] px-10 py-2 rounded-full relative">
  FREE25BAC
  <span className="absolute inset-0 rounded-full border-[2px] border-[#ED174A] border-dotted"></span>
</p>
          <p className="text-[#9B9BB4] text-sm">Use discount code in checkout!</p>
        </div>
        
        <Products title={"MEN'S CLOTHING"} category={"men's clothing"}/>
        <div className="flex flex-wrap justify-between b-10">
          <img src={end1} alt="end" />
          <img src={end2} alt="end" />
          <img src={end3} alt="end" />
        </div>

        <FinalSection/>


    </div>
  
  </>
  
}
