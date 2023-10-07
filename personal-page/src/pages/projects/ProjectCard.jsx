import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import itemsVariants from "../../data/itemsAnimation";
import ButtonSecondary from "../../components/ButtonSecondary";
import gitHub from "../../assets/git-hub.svg";
import monitor from "../../assets/monitor.svg";
import SkillsProject from "./skillsProject";

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
      className="mb-10"
    >
      <h3 className="text-my-yellow text-2xl">{project.title}</h3>
      <div className="flex flex-col justify-between mb-10 md:relative lg:flex-row">
        <div className="flex flex-col items-center md:flex-row flex-1">
          <img
            className="my-6 shadow-yellow md:w-5/6 "
            src={project.img1.url}
            alt={project.img1.alt}
          />
          <img
            className="mb-6 shadow-yellow max-w-xs md:absolute md:max-w-[20%] md:bottom-56 md:right-[50px] lg:bottom-[-1rem] lg:max-w-[10%] lg:right-[57%]"
            src={project.img2.url}
            alt={project.img1.alt}
          />
        </div>
        <div className="text-white flex-1 flex flex-col justify-between  text-center pt-8 lg:text-left">
          <p className="text-lg mb-2">{project.description}</p>
          <div className="flex">
            {project.technologies.map((tech) => (
              <SkillsProject key={tech.name} tech={tech} />
            ))}
          </div>

          <div className="my-6 flex ">
            <div className="flex-1 flex justify-center">
              <ButtonSecondary text="Code" icon={gitHub} />
            </div>
            <div className="flex-1 flex justify-center">
              <ButtonSecondary text="Live" icon={monitor} />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </motion.div>
  );
};

export default ProjectCard;
