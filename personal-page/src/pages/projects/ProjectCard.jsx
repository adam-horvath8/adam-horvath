import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import itemsVariants from "../../data/itemsAnimation";
import ButtonSecondary from "../../components/ButtonSecondary";

const ProjectCard = ({ project }) => {
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
      <div>
        <img src={project.img1.url} alt={project.img1.alt} />
        <img src={project.img2.url} alt={project.img1.alt} />
      </div>
      <div>
        <div>
          <h3>{project.title}</h3>
          //Technology icons
          <p>{project.description}</p>
        </div>
        <div>
          <ButtonSecondary text="Review the Code" />
          <ButtonSecondary text="Live Preview" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
