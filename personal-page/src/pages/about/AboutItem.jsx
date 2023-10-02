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
    >
      <img src={item.url} alt={item.alt} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.text} </p>
      </div>
    </motion.div>
  );
};

export default AboutItem;
