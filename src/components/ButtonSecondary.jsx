import React from "react";
import { motion } from "framer-motion";

const ButtonSecondary = ({ text, icon }) => {
  return (
    <motion.button
      className="p-2 bg-my-blue text-my-black text-xl text-my-gray px-6 border flex items-center w-fit"
      whileHover={{
        letterSpacing: "0.5rem",
        backgroundColor: "rgba(246, 174, 45, 1)",
        boxShadow: "0px 0px 15px rgba(246, 174, 45, 1)",
      }}
    >
      <img className="mr-2 w-8" src={icon} alt="icon" />
      {text}
    </motion.button>
  );
};

export default ButtonSecondary;
