import HeroImage from "../../assets/HeroImage.png"

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
        <div className=" hidden md:block md:w-[100%] lg:h-[100%]">
            <img src={HeroImage} className="h-[100%] w-[100%]" alt="" />
        </div>
    </div>
  )
}

export default Hero