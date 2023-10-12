import React, { useState, useEffect } from "react";
import ButtonPrimary from "./ButtonPrimary";
import { motion } from "framer-motion";

const Navbar = ({ scrollToSection }) => {
  const [activeLink, setActiveLink] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const pageEls = document.querySelectorAll(".page");

      pageEls.forEach((pageEl) => {
        if (
          window.scrollY >= pageEl.offsetTop &&
          window.scrollY < pageEl.offsetTop + pageEl.clientHeight
        ) {
          setActiveLink(pageEl.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "tween", delay: 1, duration: 1.5 }}
      className="flex justify-end fixed w-screen z-10 bg-gradient-to-r from-transparent to-my-blue"
    >
      <motion.ul
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 2.5, duration: 1 }}
        className="flex justify-evenly p-1 pr-5 font-primary"
      >
        <li onClick={() => scrollToSection("about")}>
          <ButtonPrimary
            text="About"
            href="#about"
            isActive={activeLink === "about"}
          />
        </li>
        <li onClick={() => scrollToSection("projects")}>
          <ButtonPrimary
            text="Projects"
            href="#projects"
            isActive={activeLink === "projects"}
          />
        </li>
        <li onClick={() => scrollToSection("contact")}>
          <ButtonPrimary
            text="Contact"
            href="#contact"
            isActive={activeLink === "contact"}
          />
        </li>
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
