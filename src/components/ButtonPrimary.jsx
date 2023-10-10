import React from "react";

const ButtonPrimary = ({ text, scrollToSection }) => {
  return (
    <button className="p-3 text-xl  text-my-gray hover:text-my-yellow hover:border-b-2 focus:border-b-2 focus:text-my-yellow opacity-100 min-h-[8vh] sm:text-2xl md:sm:text-3xl">
      {text}
    </button>
  );
};

export default ButtonPrimary;
