import React, { useState, useEffect } from "react";
import ButtonPrimary from "./ButtonPrimary";
import { motion } from "framer-motion";

const Navbar = ({ scrollToSection }) => {
  return (
    <motion.nav
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "tween", delay: 1, duration: 1.5 }}
      className="flex justify-end fixed  w-screen z-10 p-3 bg-gradient-to-r from-transparent to-my-blue"
    >
      <motion.ul
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 2.5, duration: 1 }}
        className="flex justify-evenly p-1 pr-5 font-primary"
      >
        <li onClick={() => scrollToSection("about")}>
          <ButtonPrimary text="About" />
        </li>
        <li onClick={() => scrollToSection("projects")}>
          <ButtonPrimary text="Projects" />
        </li>
        <li onClick={() => scrollToSection("contact")}>
          <ButtonPrimary text="Contact" />
        </li>
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
