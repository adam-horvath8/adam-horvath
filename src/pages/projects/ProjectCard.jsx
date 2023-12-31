import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

import ButtonSecondary from "../../components/ButtonSecondary";
import gitHub from "../../assets/git-hub.svg";
import monitor from "../../assets/monitor.svg";
import SkillsProject from "./SkillsProject";

const ProjectCard = ({ project }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 5", "1,33 1"],
  });

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="md:mb-10"
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
        <div className="text-my-gray flex-1 flex flex-col justify-between  text-center pt-8 lg:text-left">
          <div>
            <p className="text-lg mb-2">{project.description}</p>
            <div className="grid grid-cols-2 gap-2  lg:flex ">
              {project.technologies.map((tech) => (
                <SkillsProject key={tech.name} tech={tech} />
              ))}
            </div>
          </div>

          <div className="my-6 flex ">
            <div className="flex-1 flex justify-center">
              <a href={project.code} target="_blank" rel="noopener noreferrer">
                <ButtonSecondary text="Code" icon={gitHub} />
              </a>
            </div>
            <div className="flex-1 flex justify-center">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ButtonSecondary text="Live" icon={monitor} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </motion.div>
  );
};

export default ProjectCard;
