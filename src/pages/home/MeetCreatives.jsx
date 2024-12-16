import creatives from "@/assets/images/thinkhub-retro.jpg";
import m1 from "../../assets/m1.png";
import m2 from "../../assets/m2.png";
import m3 from "../../assets/m3.png";
import m4 from "../../assets/m4.png";
import m5 from "../../assets/m5.png";
import m6 from "../../assets/m6.png";
import m7 from "../../assets/m7.png";

import b9 from "@/assets/images/bg_1.jpg";
import b10 from "@/assets/images/bg_4.jpg";
import b11 from "@/assets/images/bg_3.jpg";
import b12 from "@/assets/images/bg_2.jpg";
const MeetCreatives = () => {
  return (
    <div className="flex flex-col px-6 py-10 md:flex-row md:justify-between md:gap-10 lg:px-[120px] lg:py-[60px]">
      <div className="flex basis-1/2 flex-col items-start justify-center">
        <button className=" rounded-3xl bg-Yellowtext px-5 py-2 md:text-xl">
          Work with us
        </button>
        <div className="py-5">
          <h2 className="text-4xl font-bold md:text-5xl">
            Meet the best of Creatives.
          </h2>
          <p className="my-5 md:text-xl lg:my-10 lg:text-2xl">
            If you’re looking for brands and creators to collaborate with,
            you’ll find them on Think Creative Hub. We study what makes for a
            successful match, so finding each other is easy.
          </p>
        </div>
      </div>

      {/*{<div*/}
      {/*  style={{*/}
      {/*    backgroundImage: `url(${creatives})`*/}
      {/*  }}*/}
      {/*  className={*/}
      {/*    "h-96 w-full rounded-lg border-2 border-Redtext bg-contain bg-no-repeat md:w-[25rem]"*/}
      {/*  }*/}

      {/*></div>}*/}
      <img src={creatives} className={"w-full rounded-lg md:w-96"} alt="" />
      {/*<div className="grid-container">*/}
      {/*  <div>*/}
      {/*    <img className="" src={m1} alt="" />*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <img className="" src={m2} alt="" />*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <img className="" src={m3} alt="" />*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <img className="" src={m4} alt="" />*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <img className="" src={m5} alt="" />*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <img className="" src={m6} alt="" />*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <img className="" src={m7} alt="" />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default MeetCreatives;
