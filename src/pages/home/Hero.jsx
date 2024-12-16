import HeroImage from "@/assets/images/home-hero.jpg";
import h1 from "../../assets/h1.png";
import h2 from "../../assets/h2.png";
import h3 from "../../assets/h3.png";
import h4 from "../../assets/h4.png";
import h5 from "../../assets/h5.png";
import h6 from "../../assets/h6.png";
import h7 from "../../assets/h7.png";
import h8 from "../../assets/h8.png";

import b9 from "@/assets/images/bg_1.jpg";
import b10 from "@/assets/images/bg_4.jpg";
import b11 from "@/assets/images/bg_3.jpg";
import b12 from "@/assets/images/bg_2.jpg";

function Image({ scr, className }) {
  return <img src={scr} alt="" className={`${className}`} />;
}

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('${HeroImage}')`,

        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
      className="h-[80vh] overflow-y-auto bg-Herobg bg-cover bg-center bg-no-repeat px-6 md:flex md:gap-10 md:py-0 lg:gap-[80px] lg:px-[120px]"
    >
      <div className="pt-[100px]">
        <button className="rounded-2xl bg-white px-3 py-2 text-blue-600 ">
          {" "}
          Unleashing Your Creative Potential
        </button>
        <div className=" py-7 text-4xl md:leading-[3.5rem]">
          <div className=" mt-10 font-bold tracking-tight md:text-9xl">
            <span className={"text-white"}>Create.</span>
            <span className=" text-blue">Collaborate.</span>
            <br />
            <span className=" mb-10 font-bold text-Yellowtext">Chill.</span>
          </div>
        </div>
        <p className="text-white md:text-xl">
          {" "}
          Whether you’re a creator looking for your next brand deal, or a
          marketer hiring creators for your next campaign, you will find them on
          Think Creative Hub.
        </p>
        <button className="my-[50px] rounded-3xl bg-black px-5 py-3 text-white">
          Get Started
        </button>
      </div>

      <div className="hero-grid">
        {/*<Image scr={b12} />*/}
        {/*<Image scr={b12} />*/}
        {/*<Image scr={b12} />*/}
        {/*<Image scr={b12} />*/}
        {/*<Image scr={b12} />*/}
        {/*<Image scr={b12} />*/}
        {/*<Image scr={b12} />*/}
        {/*<Image scr={b12} />*/}
        {/*<img src={b9} height={100} width={450} alt="" />*/}
        {/*<div>*/}
        {/*  <img src={h1} alt="" />*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src={h2} alt="" />*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src={h3} alt="" />*/}
        {/*</div>*/}
        {/*/!*<div>*!/*/}
        {/*/!*  <img src={h4} alt="" />*!/*/}
        {/*/!*</div>*!/*/}
        {/*<div>*/}
        {/*  <img src={h5} alt="" />*/}
        {/*</div>{" "}*/}
        {/*<div>*/}
        {/*  <img src={h5} alt="" />*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src={h6} alt="" />*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src={h7} alt="" />*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src={h8} alt="" />*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Hero;
