import React from "react";
import { motion, useInView, useAnimation, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import projectsData from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = ({ pagesVariants }) => {
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
      id="projects"
      ref={ref}
      variants={pagesVariants}
      initial="hidden"
      animate={mainControls}
      className="page"
    >
      <h2 className="page-heading">Projects</h2>
      {projectsData.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </motion.div>
  );
};

export default Projects;
