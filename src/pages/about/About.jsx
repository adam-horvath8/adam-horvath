import React from "react";
import { useRef, useEffect } from "react";
import { useInView, motion, useAnimation } from "framer-motion";
import aboutData from "../../data/aboutData";
import AboutItem from "./AboutItem";
import Skills from "./Skills";

const About = ({ pagesVariants }) => {
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
      id="about"
      ref={ref}
      variants={pagesVariants}
      initial="hidden"
      animate={mainControls}
      className="page"
    >
      <h2 className="page-heading">About</h2>

      {aboutData.map((item) => (
        <AboutItem key={item.id} item={item} />
      ))}
      <Skills pagesVariants={pagesVariants} />
    </motion.div>
  );
};

export default About;
