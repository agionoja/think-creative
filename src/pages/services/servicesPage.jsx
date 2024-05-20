import campaignadd from "/src/assets/campaignadd.png";

const ServicesPage = () => {
  return (
    <div className="w-screen">
      {/*Provide layer */}
      <div className="h-[80vh] bg-gradient-to-b from-gray-100 to-white text-center">
        <div className="h-[10vh] bg-gradient-to-b from-gray-300 to-gray-100"></div>
        <div className="h-[25vh] content-end align-text-bottom text-3xl font-bold">
          <h2>Think Creative Hub </h2>
          <h2> Provides:</h2>
        </div>
        <div className="">
          <div className="h-[24vh] content-center text-gray-800">
            <ul className="mb-2 flex justify-center text-[8px] font-bold">
              <li className="">
                <button className=" m-1 mr-2 rounded-2xl bg-[#c3c12f] px-4 py-3">
                  Branding
                </button>
              </li>
              <li className="">
                <button className="m-1 mr-2 rounded-2xl bg-[#c3c12f] px-4 py-3">
                  Social Media Ads
                </button>
              </li>
              <li className="">
                <button className="m-1 mr-2 rounded-2xl bg-[#c3c12f] px-4 py-3">
                  Content Creation
                </button>
              </li>
              <li className="">
                <button className="m-1 mr-2 rounded-2xl bg-[#c3c12f] px-4 py-3">
                  Web Dev
                </button>
              </li>
            </ul>
            <ul className="flex justify-center text-[8px] font-bold">
              <li className="">
                <button className="m-1 mr-2 rounded-2xl bg-[#c3c12f] px-4 py-3">
                  Art And Craft
                </button>
              </li>
              <li className="">
                <button className="m-1 mr-2 rounded-2xl bg-[#c3c12f] px-4 py-3">
                  Digital Marketing
                </button>
              </li>
              <li className="">
                <button className="m-1 mr-2 rounded-2xl bg-[#c3c12f] px-4 py-3">
                  Graphics Design
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*End of Provide layer */}
      {/*Campaign layer */}
      <div className="h-[100vh] content-center items-center rounded-t-2xl bg-[#ebe4ef]">
        <div className="py-19 mx-10 flex items-center space-x-20 px-10">
          <img src={campaignadd} alt="XX" className="w-[27rem]" />

          <div className=" px-12">
            <div className="">
              <h5 className="">
                <button className="m-1 mr-2 rounded-3xl bg-[#c3c12f] px-3 py-2 text-[10px] font-bold">
                  Strategy
                </button>
              </h5>
              <h1 className="py-3 pr-8 text-4xl font-bold">Expert creative</h1>
              <h3 className="pr-8 text-[14px]">
                Brands and creators collaborate with our dedicated team of
                experts to build winning creative strategy - backed by research,
                first-party data, and industry benchmarks.
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/*End of Campaign layer */}
      {/*Measure layer */}
      <div></div>
      {/*End of Measure layer */}
    </div>
  );
};

export default ServicesPage;
