import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "tween", delay: 1, duration: 2 }}
      className="flex justify-end "
      style={{ backgroundColor: "rgba(94, 124, 226, 0.5)" }}
    >
      <div className="flex justify-evenly p-1 ">
        <ButtonPrimary text="About" />
        <ButtonPrimary text="Projects" />
        <ButtonPrimary text="Contact" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
