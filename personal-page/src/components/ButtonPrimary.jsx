import React from "react";

const ButtonPrimary = ({ text }) => {
  return (
    <button className="p-3 text-xl  text-white hover:text-my-yellow hover:border-b-2 focus:border-b-2 focus:text-my-yellow opacity-100">
      {text}
    </button>
  );
};

export default ButtonPrimary;
