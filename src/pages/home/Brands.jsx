import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";
import b4 from "../../assets/b4.png";
import b5 from "../../assets/b5.png";
import b6 from "../../assets/b6.png";
import b7 from "../../assets/b7.png";
import b8 from "../../assets/b8.png";

const Brands = () => {
  return (
    <div>
      <div className=" flex items-center justify-between p-6">
        <div>
          <p className=" font-bold lg:text-2xl">Trusted by:</p>
        </div>

        <div className="hidden lg:block">
          <img src={b1} alt="" />
        </div>
        <div className="hidden md:block">
          <img src={b2} alt="" />
        </div>
        <div>
          <img src={b3} alt="" />
        </div>
        <div className="hidden md:block">
          <img src={b4} alt="" />
        </div>
        <div className="hidden md:block">
          <img src={b5} alt="" />
        </div>
        <div>
          <img src={b6} alt="" />
        </div>
        <div className="hidden md:block">
          <img src={b7} alt="" />
        </div>
        <div className="hidden lg:block">
          <img src={b8} alt="" />
        </div>
      </div>
      <div className=" px-10 py-6 text-center text-2xl font-bold  md:px-[150px] md:text-[40px] md:leading-10 lg:px-[300px] lg:text-[50px] lg:leading-[3rem]">
        <p>
          Collaborate with us for the best services. It’s never been easier.
        </p>
      </div>
    </div>
  );
};

export default Brands;
