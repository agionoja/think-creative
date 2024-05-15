const Quotes = () => {
  return (
    <div className=" my-10 ">
      <div className=" flex flex-col justify-center px-6 items-center text-center ">
        <p className="font-extrabold text-3xl py-5 md:py-10 md:text-4xl md:px-[150px] lg:px-[200px] lg:text-5xl">
          “Think Creative Hub brings something unique to the market. Their
          creative experience has 
          <span className=" text-Redtext"> grown our brands to more than 72%.”</span>
        </p>
        <p>Hagos Bashiru, Brand Manager — Aardvark.co</p>
      </div>

      <div className=" bg-Yellowtext px-[80px] md:px-[200px] rounded-3xl text-center my-10 py-[100px] flex flex-col justify-center items-center">
        <p className=" font-bold text-3xl md:text-[40px] leading-[3rem]">Join the Hub. Find your next inspiration.</p>
        <button className=" bg-white py-2 px-5 rounded-3xl mt-5 font-bold md:text-xl">Get Started</button>
      </div>
    </div>
  );
};

export default Quotes;
