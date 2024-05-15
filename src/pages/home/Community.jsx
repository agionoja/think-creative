import community from "../../assets/community.png";

const Community = () => {
  return (
    <div className=" bg-black text-white flex flex-col rounded-[50px] px-6 py-8 md:flex-row md:gap-10 lg:px-[120px] lg:gap-[80px]">
      <div className=" md:order-1 basis-1/2">
        <h2 className=" text-5xl font-extrabold lg:text-[70px]">We bring to you the best community of creatives.</h2>
        <p className=" my-5 md:my-10 lg:text-2xl">Join our community of creatives on our social media platforms</p>
        <p className=" lg:text-3xl">We Provide:</p> 
        <div className="text-black flex gap-5 flex-wrap mt-4 md:mt-8 lg:text-xl">
          <button className=" rounded-3xl bg-Yellowtext px-3 py-1 lg:py-2 lg:px-5">
            Branding
          </button>
          <button className=" rounded-3xl bg-Yellowtext px-3 py-1 lg:py-2 lg:px-4">
            Social Media Ads
          </button>
          <button className=" rounded-3xl bg-Yellowtext px-3 py-1 lg:py-2 lg:px-4">
            Web Dev
          </button>
          <button className=" rounded-3xl bg-Yellowtext px-3 py-1 lg:py-2 lg:px-5">
            Content Creation
          </button>
          <button className=" rounded-3xl bg-Yellowtext px-3 py-1 lg:py-2 lg:px-5">
            Art ab Craft
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
