import campaignadd from "/src/assets/campaignadd.png"


const ServicesPage = () => {
  return( <div className="w-screen">
            {/*Provide layer */}
            <div className="h-[80vh] text-center bg-gradient-to-b from-gray-100 to-white">
              <div className="h-[10vh] bg-gradient-to-b from-gray-300 to-gray-100">
              
              </div>
              <div className="content-end text-3xl font-bold h-[25vh] align-text-bottom">
                <h2>Think Creative Hub </h2>
                <h2> Provides:</h2>
              </div>
              <div className="">
                <div className="h-[24vh] content-center text-gray-800">
                  <ul className="text-[8px] mb-2 font-bold flex justify-center">
                    <li className=''><button className= " rounded-2xl px-4 py-3 m-1 mr-2 bg-[#c3c12f]">Branding</button></li>
                    <li className=''><button className= "rounded-2xl px-4 py-3 m-1 mr-2 bg-[#c3c12f]">Social Media Ads</button></li>
                    <li className=''><button className= "rounded-2xl px-4 py-3 m-1 mr-2 bg-[#c3c12f]">Content Creation</button></li>
                    <li className=''><button className= "rounded-2xl px-4 py-3 m-1 mr-2 bg-[#c3c12f]">Web Dev</button></li>
                  </ul>
                  <ul className="text-[8px] font-bold flex justify-center"> 
                    <li className=''><button className= "rounded-2xl px-4 py-3 m-1 mr-2 bg-[#c3c12f]">Art And Craft</button></li>
                    <li className=''><button className= "rounded-2xl px-4 py-3 m-1 mr-2 bg-[#c3c12f]">Digital Marketing</button></li>
                    <li className=''><button className= "rounded-2xl px-4 py-3 m-1 mr-2 bg-[#c3c12f]">Graphics Design</button></li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End of Provide layer */}
            {/*Campaign layer */}
            <div className="h-[100vh] content-center items-center bg-[#ebe4ef] rounded-t-2xl">
                <div className="flex items-center space-x-20 py-19 px-10 mx-10">
                  
                  <img src={campaignadd} alt="XX" className="w-[27rem]"/>
                  
                  <div className=" px-12">
                    <div className="">
                      <h5 className=""><button className="text-[10px] font-bold rounded-3xl px-3 py-2 m-1 mr-2 bg-[#c3c12f]">Strategy</button></h5>
                      <h1 className="text-4xl font-bold py-3 pr-8">Expert creative</h1>
                      <h3 className="text-[14px] pr-8">Brands and creators collaborate with our dedicated team of experts to build winning  creative strategy - 
                          backed by research, first-party data, and industry benchmarks.
                      </h3>
                    </div>
                  </div>
                </div>
            </div>
            {/*End of Campaign layer */}
            {/*Measure layer */}
            <div>
              
            </div>
            {/*End of Measure layer */}

          </div>);
};

export default ServicesPage;
