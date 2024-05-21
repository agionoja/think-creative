
import campaignadd from "/src/assets/campaignadd.png"
import homemeasure from "/src/assets/homemeasure.png"
import repurpose from   "/src/assets/repurpose.png"
import conor from "/src/assets/conor.png"
import dunn from "/src/assets/dunn.png"

const ServicesPage = () => {
  return( <div className="w-screen">
            {/*Provide layer */}
            <div className="h-[100vh] sm:h-[80vh] text-center bg-gradient-to-b from-gray-100 to-white">
              <div className="h-[20vh] sm:h-[10vh] bg-gradient-to-b from-gray-300 to-gray-100">
              
              </div>
              <div className="space-y-5 sm:space-y-1 content-end text-3xl font-bold h-[25vh] align-text-bottom">
                <h2>Think Creative Hub </h2>
                <h2> Provides:</h2>
              </div>
              <div className="">
                <div className="h-[24vh] content-center text-gray-800">
                  <ul className="text-[11px] sm:text-[8px] mb-2 font-bold flex justify-center">
                    <li className=''><button className= "h-[50px] sm:h-fit rounded-2xl px-4 py-3 m-1 mr-2 bg-[#c3c12f]">Branding</button></li>
                    <li className=''><button className= "h-[50px] sm:h-fit rounded-2xl px-4 py-3 m-1 mr-2 bg-[#c3c12f]">Social Media Ads</button></li>
                    <li className=''><button className= "h-[50px] sm:h-fit rounded-2xl px-4 py-3 m-1 mr-2 bg-[#c3c12f]">Content Creation</button></li>
                    <li className=''><button className= "h-[50px] sm:h-fit rounded-2xl px-4 py-3 m-1 mr-2 bg-[#c3c12f]">Web Dev</button></li>
                  </ul>
                  <ul className="text-[11px] sm:text-[8px] font-bold flex justify-center"> 
                    <li className=''><button className= "h-[50px] sm:h-fit rounded-2xl px-4 py-3 m-1 mr-2 bg-[#c3c12f]">Art And Craft</button></li>
                    <li className=''><button className= "h-[50px] sm:h-fit rounded-2xl px-4 py-3 m-1 mr-2 bg-[#c3c12f]">Digital Marketing</button></li>
                    <li className=''><button className= "h-[50px] sm:h-fit rounded-2xl px-4 py-3 m-1 mr-2 bg-[#c3c12f]">Graphics Design</button></li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End of Provide layer */}
            {/*Campaign layer */}
            <div className="h-[100vh] content-center items-center bg-[#ebe4ef] rounded-t-2xl">
                <div className="justify-center sm:flex items-center space-x-9  sm:space-x-10 md:space-x-30 sm:py-19 md:px-10 mx-2 sm:mx-10">
                  
                  <img src={campaignadd} alt="XX" className="w-[20rem] sm:w-[26rem] ml-4 "/>
                  
                  <div className=" px-2">
                    <div className="">
                      <h5 className=""><button className="text-[20px] sm:text-[12px] font-bold rounded-3xl px-3 py-2 mt-20 md:mt-0 m-1 mr-2 bg-[#c3c12f]">Strategy</button></h5>
                      <h1 className="text-4xl font-bold py-3 pr-8">Expert creative</h1>
                      <h3 className="w-[19rem] text-[14px] pr-8">Brands and creators collaborate with our dedicated team of experts to build winning  creative strategy - 
                          backed by research, first-party data, and industry benchmarks.
                      </h3>
                    </div>
                  </div>
                </div>
            </div>
            {/*End of Campaign layer */}
            {/*Measure layer */}
            <div className="h-[100vh] content-center items-center bg-black rounded-2xl">
                <div className="justify-center sm:flex items-center space-x-3 sm:space-x-10 md:space-x-10 sm:py-19 md:px-10 mx-2 sm:mx-10">
                  <div className="">
                    <div className="w-[22em] sm:mr-5  ml-6">
                      <h5 className=""><button className="text-[20px] sm:text-[12px] font-bold rounded-3xl px-3 py-2 m-1 mr-2 bg-[#c3c12f]">Measure</button></h5>
                      <h1 className="text-4xl text-white font-bold py-3 pr-8">Understand what's working-and why</h1>
                      <h3 className="mb-10 text-[14px] text-white pr-8">No more guessing. Learn what content and creative elements resonate best with your audience and why. 
                          With live reporting and post-campaign insights, you have the tools to make every campaign better.
                      </h3>
                    </div>
                  </div>
                  <img src={homemeasure} alt="XX" className="w-[20rem] sm:w-[25rem]"/>
                </div>
            </div>  
            {/*End of Measure layer */}
            {/* Repurpose Layer */}
            <div className="h-[100vh] content-center items-center rounded-t-2xl">
                <div className="justify-center sm:flex items-center sm:space-x-10 md:space-x-20 sm:py-19 md:px-10 mx-2 sm:mx-10">
                  
                  <img src={repurpose} alt="XX" className="w-[20rem] sm:w-[23rem]"/>
                  
                  <div className=" px-2">
                    <div className="w-[20rem]">
                      <h5 className=""><button className="text-[17px] sm:text-[12px] font-bold rounded-3xl px-3 py-2 mt-10 md:mt-0 m-1 mr-2 bg-[#c3c12f]">Repurpose</button></h5>
                      <h1 className="text-3xl font-bold py-3 pr-8">Use your campaign content everywhere</h1>
                      <h3 className=" text-[14px] pr-8">Take the best-performing creator content and use it across different marketing channels, like
                        out-of-home, print, and in-flight entertainment.  
                      </h3>
                    </div>
                  </div>
                </div>
            </div>
            {/* End of  Repurpose Layer */}
            {/* Testimonial layer */}
            <div className="h-[100vh] sm:h-[90vh] content-center justify-center items-center rounded-t-2xl bg-[#ebe4ef]">
                <div className=" font-black float-end flex ">
                  <button className=" z-[1] mt-[28em] sm:mr-[7rem] border-2 rotate-90 scale-y-[-1] scale-x-[-1]">
                     <p className="invisible sm:visible leading-tight inset-y-5 text-[0px] sm:text-7xl text-gray-400 fixed">Testimonial</p>
                  </button>
                </div>   
                <div className="z-[2] sm:flex items-center float-rght sm:float-none justify-center sm:space-x-1 sm:py-5 sm:px-20 mx-8 sm:mx-20">
                  <div className="h-[45vh] sm:h-[70vh] sm:mx-4 sm:px-9 bg-white rounded-2xl content-center ">
                    <p className="font-sans font-bold text-[15px] sm:text-[11px] sm:w-[23em] p-2 "> 
                      "On Think Creative Hub i'm able to partner with incredible brands
                      allow me to be creative and use my voice and style when it comes to 
                      creating content that I know will resonate with my audience and 
                      make an impact."
                    </p>
                    <img alt="Llana Img" src={dunn} className="mx-auto w-[10rem] sm:w-[15em] sm:mb-9"/>
                    <p className="text-[13px] sm:text-[10px] text-center">Llana Dunn - @seeingotherpeople</p>  
                  </div>
                  <div className="h-[45vh] mt-5 sm:mt-2 sm:h-[70vh] sm:mx-4 sm:px-9 bg-white rounded-2xl content-center sm:z-[2]">
                    <p className="font-sans font-bold sm:text-[11px] sm:w-[23em] p-2">
                      "They advocate for their creators on their platform from making sure 
                       that we get paid fairly to hosting events that bring brands and creators
                       together"
                    </p>
                    <img alt="conor img" src={conor} className="mx-auto w-[10rem] sm:w-[15em] sm:pt-3 sm:mb-9"/>
                    <p className="text-[13px] sm:text-[10px] mt-2 text-center">Conor Mckenzie</p>
                  </div>
                </div>
                <div className="flex justify-center items-center pt-2 pl-4 mx-20">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>

                    </div>
                </div>
                
            </div>

            {/* End of Testimonial layer */}
          </div>);
};

export default ServicesPage;