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

function Profile({ profile, name, role }) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div>
        <img src={profile} className={"shrink-0 rounded-lg"} alt="" />
      </div>
      <div className=" flex basis-1/2 flex-col items-start justify-center">
        <h2 className="font-bold ">Iyanu</h2>
        <p className=" text-Redtext">Manager</p>
        {/*<button className="my-5 rounded-3xl bg-Yellowtext px-3 py-1 md:text-xl">*/}
        {/*  Work with us*/}
        {/*</button>*/}
      </div>
    </div>
  );
}

function Creatives() {
  return (
    <div className="grid gap-10 px-6 py-[100px] md:grid-cols-2 lg:gap-[60px] lg:px-[120px]">
      {/*<Profile profile={iyanu_profile} />*/}
      {/*<Profile profile={simon_profile} />*/}
      <Profile profile={profile_1} />
      <Profile profile={profile_1} />
      <Profile profile={profile_1} />
      <Profile profile={profile_2} />
      <Profile profile={profile_4} />
      <Profile profile={profile_5} />
    </div>
  );
}

export default Creatives;
