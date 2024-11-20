import creative1 from "../../assets/creative1.png";
import creative2 from "../../assets/creative2.png";
import creative3 from "../../assets/creative3.png";
import creative4 from "../../assets/creative4.png";
import creative5 from "../../assets/creative5.png";
import creative6 from "../../assets/creative6.png";

import iyanu_profile from "@/assets/images/iyanu_profile.png";
import simon_profile from "@/assets/images/simon_profile.png";
import profile_1 from "@/assets/images/_profile.jpg";
import profile_2 from "@/assets/images/IMG_68231_profile.png";
import profile_3 from "@/assets/images/IMG-20241118-WA0021_profile.jpg";
import profile_4 from "@/assets/images/IMG-20241118-WA0052_profile.jpg";
import profile_5 from "@/assets/images/DSC _2_profile.jpg";

function Profile({ profile, name, role, className }) {
  return (
    <div className={`flex flex-col items-center gap-5 ${className}`}>
      <div>
        <img
          height={400}
          width={500}
          src={profile}
          className={
            "w-full shrink-0 rounded-lg md:h-[600px] md:w-[500px] md:shrink"
          }
          alt=""
        />
      </div>
      <div className=" flex basis-1/2 flex-col items-start justify-center">
        <div className={"flex flex-col items-center"}>
          <h2 className="text-center font-bold">{name}</h2>
          <p className=" text-center text-Redtext">{role}</p>
        </div>
        {/*<button className="my-5 rounded-3xl bg-Yellowtext px-3 py-1 md:text-xl">*/}
        {/*  Work with us*/}
        {/*</button>*/}
      </div>
    </div>
  );
}

function Creatives() {
  return (
    <div className="flex flex-col flex-wrap gap-4 px-4 py-[100px] md:flex-row  md:justify-between md:gap-16 md:px-32">
      <Profile
        profile={iyanu_profile}
        name={"Iyanuoluwa Oluborode"}
        role={"Content Creator"}
      />
      <Profile
        profile={simon_profile}
        name={"Simon Bello"}
        role={"social media manager"}
      />
      <Profile profile={profile_1} role={"placeholder"} name={"placeholder"} />
      <Profile profile={profile_2} role={"placeholder"} name={"placeholder"} />
      <Profile profile={profile_3} role={"placeholder"} name={"placeholder"} />
      <Profile profile={profile_4} role={"placeholder"} name={"placeholder"} />
      <Profile
        profile={profile_5}
        role={"placeholder"}
        name={"placeholder"}
        className={"mx-auto"}
      />
    </div>
  );
}

export default Creatives;
