import React from "react";
import { motion } from "framer-motion";

const ContactCard = ({ icon, text }) => {


  return (
    <motion.div
      whileHover={{
        backgroundColor: "rgba(246, 174, 45, 1)",
        boxShadow: "0px 0px 15px rgba(246, 174, 45, 1)",
        translateY: "-0.5rem",
        borderRadius: "1rem",
      }}
      transition={{ duration: 0.4 }}
      className="p-4 bg-my-blue flex flex-col items-center "
    >
      <motion.img className="w-1/3" src={icon} alt="" />
      <span className=" text-xs sm:text-lg text-my-black">{text}</span>
    </motion.div>
  );
};

export default ContactCard;
