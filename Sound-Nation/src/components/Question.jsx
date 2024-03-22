import { useState } from "react";

export const Question = ({ id, question, reponse }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div key={id}>
      <ul>
        <li
          className={`text-[white] bg-[#023E33] p-2 rounded-lg mt-10 w-[100%] relative z-10 flex flex-row justify-center ${
            isOpen ? "rounded-b-none" : ""
          }`}
        >
          <button
            onClick={handleClick}
            className="flex flex-col items-center gap-3"
          >
            {question}
            <img
              className={`w-6 ${
                isOpen
                  ? "rotate-0 transition-transform ease-in-out duration-[0.4s]"
                  : "rotate-180 transition-transform ease-in-out duration-[0.4s]"
              }`}
              src="../images/angle-up-solid.svg"
              alt="Image d'un chevron"
            />
          </button>
        </li>
        <li
          className={`transition-all ease-in-out duration-[0.2s] delay-0 transform z-1
          ${
            isOpen
              ? "max-h-48 translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 max-h-0"
          }`}
        >
          <p className="text-black bg-[#71A984] rounded-b-lg p-2">{reponse}</p>
        </li>
      </ul>
    </div>
  );
};
