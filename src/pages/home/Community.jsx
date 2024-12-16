import community from "../../assets/community.png";

const Community = () => {
  return (
    <div className=" flex flex-col rounded-[50px] bg-black px-6 py-8 text-white md:flex-row md:gap-10 lg:gap-[80px] lg:px-[120px]">
      <div className=" basis-1/2 md:order-1">
        <h2 className=" text-5xl font-extrabold lg:text-[70px]">
          We bring to you the best community of creatives.
        </h2>
        <p className=" my-5 md:my-10 lg:text-2xl">
          Join our community of creatives on our social media platforms
        </p>
        <p className=" lg:text-3xl">We Provide:</p>
        <div className="mt-4 flex flex-wrap gap-5 text-black md:mt-8 lg:text-xl">
          <button className=" rounded-3xl bg-Yellowtext px-3 py-1 lg:px-5 lg:py-2">
            Branding
          </button>
          <button className=" rounded-3xl bg-Yellowtext px-3 py-1 lg:px-4 lg:py-2">
            Social Media Ads
          </button>
          <button className=" rounded-3xl bg-Yellowtext px-3 py-1 lg:px-4 lg:py-2">
            Digital Marketing
          </button>
          <button className=" rounded-3xl bg-Yellowtext px-3 py-1 lg:px-5 lg:py-2">
            Content Creation
          </button>
          <button className=" rounded-3xl bg-Yellowtext px-3 py-1 lg:px-5 lg:py-2">
            Art
          </button>
          <button className=" rounded-3xl bg-Yellowtext px-3 py-1 lg:px-5 lg:py-2">
            CopyWriting
          </button>
          <button className=" rounded-3xl bg-Yellowtext px-3 py-1 lg:px-5 lg:py-2">
            Training
          </button>
        </div>
      </div>
      <div className=" basis-1/2">
        <img className=" basis-1/2" src={community} alt="" />
      </div>
    </div>
  );
};

export default Community;
