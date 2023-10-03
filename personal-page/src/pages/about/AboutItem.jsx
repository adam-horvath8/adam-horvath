import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import itemsVariants from "../../data/itemsAnimation";

const AboutItem = ({ item }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={itemsVariants}
      initial="hidden"
      animate={mainControls}
      className="text-white p-1 mb-5 lg:flex"
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
