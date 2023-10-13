import React from "react";

const ButtonPrimary = ({ text, href }) => {
  return (
    <a
      href={href}
      className="p-3 text-xl text-my-gray hover:text-my-yellow hover:border-b-2  opacity-100 min-h-[8vh] sm:text-2xl md:sm:text-3xl cursor-pointer"
    >
      {text}
    </a>
  );
};

export default ButtonPrimary;
