import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const AboutItem = ({ item }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 2", "1,33 1"],
  });

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="text-my-gray p-1 mb-5 lg:flex"
    >
      <img
        className="mb-4 shadow-yellow lg:w-1/2"
        src={item.url}
        alt={item.alt}
      />
      <div className="mb-4 flex flex-col justify-center">
        <h3 className="text-my-yellow text-2xl text-center">{item.title}</h3>
        <p className="text-lg text-center lg:px-10 pt-3">{item.text} </p>
      </div>
      <hr />
    </motion.div>
  );
};

export default AboutItem;
