import S1 from "../../assets/s1.png";
import S2 from "../../assets/s2.png";
import S3 from "../../assets/s3.png";
import S4 from "../../assets/s4.png";
import S5 from "../../assets/s5.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const Services = () => {
  return (
    <div>
      <div className=" mx-auto mt-4 flex flex-wrap items-center justify-center gap-5 py-[200px] md:mt-8 md:w-[60%] lg:text-xl">
        <button className=" rounded-3xl bg-Yellowtext px-3 py-1 font-semibold lg:px-5 lg:py-2">
          Branding
        </button>
        <button className=" rounded-3xl bg-Yellowtext px-3 py-1 font-semibold lg:px-4 lg:py-2">
          Social Media Ads
        </button>
        <button className=" rounded-3xl bg-Yellowtext px-3 py-1 font-semibold lg:px-5 lg:py-2">
          Content Creation
        </button>
        <button className=" rounded-3xl bg-Yellowtext px-3 py-1 font-semibold lg:px-4 lg:py-2">
          Web Dev
        </button>
        <button className=" rounded-3xl bg-Yellowtext px-3 py-1 font-semibold lg:px-5 lg:py-2">
          Art ab Craft
        </button>
        <button className=" rounded-3xl bg-Yellowtext px-3 py-1 font-semibold lg:px-5 lg:py-2">
          Digital Marketing
        </button>
        <button className=" rounded-3xl bg-Yellowtext px-3 py-1 font-semibold lg:px-5 lg:py-2">
          Graphics Design
        </button>
      </div>

      <div className="flex flex-col gap-10 rounded-3xl bg-offwhite px-6 py-10 md:flex-row lg:gap-20 lg:px-[60px] lg:py-[60px]">
        <div>
          <img className="basis-1/2" src={S1} alt="" />
        </div>
        <div className="flex basis-1/2 flex-col items-start justify-center">
          <button className=" font-semibold rounded-3xl bg-Yellowtext px-5 py-2 md:text-xl">
            Strategy
          </button>
          <div className="py-5">
            <h2 className="text-4xl font-bold lg:text-5xl">Expert creative</h2>
            <p className="my-5 text-justify md:text-xl lg:my-10 lg:text-2xl">
              Brands and creators collaborate with our dedicated team of experts
              to build winning creative strategy— backed by research,
              first-party data, and industry benchmarks.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-3xl bg-black px-6 py-10 text-white md:flex-row md:gap-10 lg:gap-20 lg:px-[60px] lg:py-[60px]">
        <div className="flex basis-1/2 flex-col md:px-10 items-start justify-center">
          <button className=" font-semibold rounded-3xl bg-Yellowtext px-5 py-2 text-black md:text-xl">
            Measure
          </button>
          <div className="py-5">
            <h2 className="text-4xl font-bold lg:text-5xl">
              Understand what’s working—and why
            </h2>
            <p className="my-5 text-justify md:text-xl lg:my-10 lg:text-2xl">
              No more guessing. Learn what content and creative elements
              resonate best with your audience and why. With live reporting and
              post-campaign insights, you have the tools to make every campaign
              better.
            </p>
          </div>
        </div>
        <div className="basis-1/2">
          <img src={S2} alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-10 md:my-10 rounded-3xl px-6 py-10 md:flex-row md:gap-20 lg:px-[60px] lg:py-[60px]">
        <div>
          <img className="basis-1/2" src={S3} alt="" />
        </div>
        <div className="flex basis-1/2 flex-col items-start justify-center">
          <button className=" font-semibold rounded-3xl bg-Yellowtext px-5 py-2 md:text-xl">
            Repurpose
          </button>
          <div className="py-5">
            <h2 className="text-4xl font-bold lg:text-5xl">
              Use your campaign content everywhere
            </h2>
            <p className="my-5 text-justify md:text-xl lg:my-10 lg:text-2xl">
              Take the best-performing creator content and use it across
              different marketing channels, like out-of-home, print, and
              in-flight entertainment.
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-offwhite px-6 py-10 lg:px-[150px]">
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
          <div className=" basis-1/2 rounded-4xl bg-white px-5 py-[45px] md:p-[60px]">
            <p className=" font-semibold ">
              “On Think Creative Hub I’m able to partner with incredible brands
              that allow me to be creative and use my voice and style when it
              comes to creating content that I know will resonate with my
              audience and make an impact.”
            </p>
            <div className="py-8 ">
              <img className="rounded-3xl" src={S4} alt="" />
            </div>
            <p>Ilana Dunn - @seeingotherpeople</p>
          </div>

          <div className=" basis-1/2 rounded-4xl bg-white px-5 py-[45px] md:p-[60px]">
            <p className=" font-semibold ">
              “They advocate for their creators on their platform from making
              sure that we get paid fairly to hosting events that bring brands
              and creators together”
            </p>
            <div className="py-[64px]">
              <img className="rounded-3xl" src={S5} alt="" />
            </div>
            <p>Conor Mckenzie</p>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center gap-10 py-10">
          <div className="rounded-full border-2 border-black md:p-3  text-2xl">
            <FaArrowLeft />
          </div>
          <div className="rounded-full border-2 border-black md:p-3  text-2xl">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
