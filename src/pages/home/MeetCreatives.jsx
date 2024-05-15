import creatives from "../../assets/creatives.png";
import m1 from "../../assets/m1.png"
import m2 from "../../assets/m2.png"
import m3 from "../../assets/m3.png"
import m4 from "../../assets/m4.png"
import m5 from "../../assets/m5.png"
import m6 from "../../assets/m6.png"
import m7 from "../../assets/m7.png"

const MeetCreatives = () => {
  return (
    <div className="px-6 py-10 lg:py-[60px] flex flex-col md:flex-row md:gap-10 lg:px-[120px]">
      <div className="flex flex-col justify-center items-start basis-1/2">
        <button className=" bg-Yellowtext py-2 px-5 rounded-3xl md:text-xl">Work with us</button>
        <div className="py-5">
        <h2 className="font-bold text-4xl md:text-5xl">Meet the best of Creatives.</h2>
        <p className="my-5 md:text-xl lg:my-10 lg:text-2xl">
          If you’re looking for brands and creators to collaborate with, you’ll
          find them on Think Creative Hub. We study what makes for a successful
          match, so finding each other is easy.
        </p>
        </div>
      </div>
      <div className="grid-container">
        <div><img className="" src={m1} alt="" /></div>
        <div><img className="" src={m2} alt="" /></div>
        <div><img className="" src={m3} alt="" /></div>
        <div><img className="" src={m4} alt="" /></div>
        <div><img className="" src={m5} alt="" /></div>
        <div><img className="" src={m6} alt="" /></div>
        <div><img className="" src={m7} alt="" /></div>
      </div>
    </div>
  );
};

export default MeetCreatives;
