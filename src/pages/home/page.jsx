import Hero from "./Hero"
import Brands from "./Brands";
import MeetCreatives from "./MeetCreatives";
import Creatives from "./Creatives";
import Community from "./Community";
import Quotes from "./Quotes";

const HomePage = () => {
  return (
    <div className=" font-inter">
    <Hero/>
      <Brands/>
      <MeetCreatives/>
      <Creatives/>
      <Community/>
      <Quotes/>
    </div>
    )
};

export default HomePage;
