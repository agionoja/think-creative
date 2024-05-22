import Hero from "@/pages/about/components/Hero.jsx";
import Box from "@/pages/about/components/Box.jsx";
import Mission from "@/pages/about/components/Mission.jsx";
import Vision from "@/pages/about/components/Vision.jsx";
import Faq from "@/pages/about/components/Faq.jsx";

const AboutPage = () => {
  return (
    <div className={"flex flex-col"}>
      <Hero />
      <Box>
        <Mission />
        <Vision />
      </Box>
      <Faq />
    </div>
  );
};

export default AboutPage;
