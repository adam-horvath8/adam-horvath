import React from "react";
import Navbar from "./Navbar";
import ButtonSecondary from "./ButtonSecondary";

import { motion } from "framer-motion";

import cvImg from "../assets/cv-img.svg";
import cv from "../../public/CV-Adam-Horvath.pdf";

export default function Header({ headerImg, scrollToSection }) {
  return (
    <header
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(${headerImg})`,
      }}
    >
      <Navbar scrollToSection={scrollToSection} />

      <div className="max-w-lg px-6 py-24 flex flex-col justify-between min-h-screen sd:block sm:px-12 sm:py-32">
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 1.5,
          }}
          className="text-my-gray text-4xl mb-5 md:text-7xl font-secondary"
        >
          Hello<span className="text-my-yellow">,</span> my name is{" "}
          <span className="text-my-yellow">Adam</span>
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
            duration: 1.5,
          }}
        >
          <p className="text-my-gray text-xl md:text-3xl font-primary mb-4">
            I am self taught{" "}
            <span className="text-my-yellow">front-end web developer</span> from
            Slovakia, currently based in Brno and this is my portfolio page.
            Hope you like it :)
          </p>

          <a href={cv} target="_blank" rel="noopener noreferrer">
            <ButtonSecondary text="Resume" icon={cvImg} />
          </a>
        </motion.div>
      </div>
    </header>
  );
}
