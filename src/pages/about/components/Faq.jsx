import faqIcon from "@/assets/faq.svg";
import Accordion from "@/pages/about/components/Accordion.jsx";

const Faq = () => {
  return (
    <div className={"flex gap-10 py-6 lg:py-16 lg:pl-40 lg:pr-[90px]"}>
      <img src={faqIcon} alt="" className={"hidden lg:block"} />
      <Accordion />
    </div>
  );
};

export default Faq;
