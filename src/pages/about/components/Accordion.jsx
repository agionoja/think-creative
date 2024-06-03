// import { TbMessageCircleQuestion } from "react-icons/tb";
import { useState } from "react";
import faqData from "./faqData";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = () => {
  // Initialize state to track the open/closed state for each accordion item
  const [openAccordions, setOpenAccordions] = useState(
    Array(faqData.length).fill(false),
  );

  // Function to toggle the open/closed state for a specific accordion item
  const toggleAccordion = (index) => {
    setOpenAccordions((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="font-poppins text-midnight flex w-full flex-col gap-3 bg-white p-4">
      <div className="flex items-center gap-3">
        {/*<div className="text-duckyYellow h-9 w-9 rounded-lg bg-gray-200 px-[0.2rem] py-[0.2rem] text-3xl font-semibold">*/}
        {/*  <TbMessageCircleQuestion />*/}
        {/*</div>*/}
        {/*<p className="font-medium">FAQ QUESTION</p>*/}
      </div>
      <h3 className="whitespace-nowrap text-center text-2xl font-semibold">
        FAQ
      </h3>
      <div className=" mt-5 lg:mt-10">
        {faqData.map(({ question, answer }, index) => (
          <div key={index} className="border-duckyYellow border-t-2 py-4">
            <button
              onClick={() => toggleAccordion(index)} // Pass the index to toggleAccordion
              className="border-duckyYellow flex w-full justify-between border-l-[3px] px-2"
            >
              <span className=" text-sm md:text-lg">{question}</span>
              {openAccordions[index] ? (
                <span>
                  <FaMinus />
                </span>
              ) : (
                <span>
                  <FaPlus />
                </span>
              )}
            </button>
            <div
              className={`grid overflow-hidden px-2 transition-all duration-300 ease-in-out ${
                openAccordions[index]
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
