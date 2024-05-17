import HeroImage from "../../assets/HeroImage.png"
import h1 from "../../assets/h1.png"
import h2 from "../../assets/h2.png"
import h3 from "../../assets/h3.png"
import h4 from "../../assets/h4.png"
import h5 from "../../assets/h5.png"
import h6 from "../../assets/h6.png"
import h7 from "../../assets/h7.png"
import h8 from "../../assets/h8.png"

const Hero = () =>{
  return (
    <div className=" bg-Herobg px-6 h-screen overflow-y-auto md:h-auto md:flex md:gap-10 md:py-0 lg:px-[120px] lg:gap-[80px]">
      <div className="pt-[100px]">
        <button className="bg-white text-blue-600 py-2 px-3 rounded-2xl "> Unleashing Your Creative Potential</button>
        <div className=" leading-[3.5rem] py-7">
        <h1 className=" text-[55px] tracking-tight font-bold mt-10">Think.<span className=" text-Redtext">Create.</span></h1>
        <h1 className=" text-Yellowtext text-[60px] font-bold mb-10">Inspire.</h1>
        </div>
        <p className=" md:text-xl"> Whether you’re a creator looking for your next brand deal, or a
        marketer hiring creators for your next campaign, you will find them on
        Think Creative Hub.</p>
        <button className="bg-black text-white py-3 px-5 rounded-3xl my-[50px]">Get Started</button>
      </div>

      <div className="hero-grid">
        <div><img src={h1} alt="" /></div>
        <div><img src={h2} alt="" /></div>
        <div><img src={h3} alt="" /></div>
        <div><img src={h4} alt="" /></div>
        <div><img src={h5} alt="" /></div>
        <div><img src={h6} alt="" /></div>
        <div><img src={h7} alt="" /></div>
        <div><img src={h8} alt="" /></div>
      </div>
    </div>
  )
}

export default Hero