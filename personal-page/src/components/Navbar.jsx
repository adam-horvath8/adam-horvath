import React, { forwardRef } from "react";
import ButtonPrimary from "./ButtonPrimary";
import { motion } from "framer-motion";


const Navbar = ({ scrollToSection }) => {
  return (
    <motion.nav
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "tween", delay: 1, duration: 2 }}
      className="flex justify-end fixed w-screen z-10 bg-gradient-to-r from-transparent to-my-blue "
   
    >
      <ul className="flex justify-evenly p-1 pr-5 ">
        <li onClick={() => scrollToSection("about")}>
          <ButtonPrimary text="About" />
        </li>
        <li onClick={() => scrollToSection("projects")}>
          <ButtonPrimary text="Projects" />
        </li>
        <li onClick={() => scrollToSection("contact")}>
          <ButtonPrimary text="Contact" />
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
