import creative1 from "../../assets/creative1.png"
import creative2 from "../../assets/creative2.png"
import creative3 from "../../assets/creative3.png"
import creative4 from "../../assets/creative4.png"
import creative5 from "../../assets/creative5.png"
import creative6 from "../../assets/creative6.png"

function Creatives() {
  return (
    <div className="px-6 py-[100px] grid gap-10 md:grid-cols-2 lg:px-[120px] lg:gap-[60px]">
      <div className="flex gap-5">
      <div className=" basis-1/2">
        <div><img src={creative1} alt="" /></div>
      </div>
      <div className=" basis-1/2 flex flex-col justify-center items-start">
        <h2 className="font-bold ">By William Idiaghe</h2>
        <p className=" text-Redtext">The Setup</p>
        <button className="my-5 bg-Yellowtext py-1 px-3 rounded-3xl md:text-xl">Work with us</button>
      </div>
    </div>

    <div className="flex gap-5">
      <div className=" basis-1/2">
        <div><img src={creative2} alt="" /></div>
      </div>
      <div className=" basis-1/2 flex flex-col justify-center items-start">
        <h2 className="font-bold ">By William Idiaghe</h2>
        <p className=" text-Redtext">The Setup</p>
        <button className="my-5 bg-Yellowtext py-1 px-3 rounded-3xl md:text-xl">Work with us</button>
      </div>
    </div>

    <div className="flex gap-5">
      <div className=" basis-1/2">
        <div><img src={creative3} alt="" /></div>
      </div>
      <div className=" basis-1/2 flex flex-col justify-center items-start">
        <h2 className="font-bold ">By William Idiaghe</h2>
        <p className=" text-Redtext">The Setup</p>
        <button className="my-5 bg-Yellowtext py-1 px-3 rounded-3xl md:text-xl">Work with us</button>
      </div>
    </div>

    <div className="flex gap-5">
      <div className=" basis-1/2">
        <div><img src={creative4} alt="" /></div>
      </div>
      <div className=" basis-1/2 flex flex-col justify-center items-start">
        <h2 className="font-bold ">By William Idiaghe</h2>
        <p className=" text-Redtext">The Setup</p>
        <button className="my-5 bg-Yellowtext py-1 px-3 rounded-3xl md:text-xl">Work with us</button>
      </div>
    </div>

    <div className="flex gap-5">
      <div className=" basis-1/2">
        <div><img src={creative5} alt="" /></div>
      </div>
      <div className=" basis-1/2 flex flex-col justify-center items-start">
        <h2 className="font-bold ">By William Idiaghe</h2>
        <p className=" text-Redtext">The Setup</p>
        <button className="my-5 bg-Yellowtext py-1 px-3 rounded-3xl md:text-xl">Work with us</button>
      </div>
    </div>

    <div className="flex gap-5">
      <div className=" basis-1/2">
        <div><img src={creative6} alt="" /></div>
      </div>
      <div className=" basis-1/2 flex flex-col justify-center items-start">
        <h2 className="font-bold ">By William Idiaghe</h2>
        <p className=" text-Redtext">The Setup</p>
        <button className="my-5 bg-Yellowtext py-1 px-3 rounded-3xl md:text-xl">Work with us</button>
      </div>
    </div>
    </div>
  )
}

export default Creatives