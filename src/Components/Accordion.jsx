import { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div
      className={`p-[2px] text-sm rounded-[2.5rem] cursor-pointer ${
        accordionOpen ? "bg-conic-gradient" : "bg-n-6"
      }`}
      onClick={() => setAccordionOpen(!accordionOpen)}
    >
      <div className="bg-n-8 p-6 rounded-[2.5rem]">
        <div className="flex justify-between w-full">
          <h3 className="h6">{title}</h3>
          {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
          <svg
            className="fill-indigo-500 shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </div>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <p className="overflow-hidden body-2 text-n-3">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
