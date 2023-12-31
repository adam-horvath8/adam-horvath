import React, { useRef } from "react";
import skillsData from "../../data/skillsData";
import { motion, useScroll } from "framer-motion";
import itemsVariants from "../../data/itemsAnimation";

const skillsVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.35 * index,
      duration: 0.7,
    },
  }),
};

const Skills = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 3", "1,33 1"],
  });

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
    >
      <h2 className="text-my-yellow text-3xl text-center mb-10 md:m-10">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-4 bg-my-yellow md:p-16 rounded-3xl">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col justify-between items-center m-4 border-2 shadow-black rounded-xl p-2 md:p-8"
            variants={skillsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <img
              src={skill.url}
              alt={skill.alt}
              className="max-w-[5rem] mb-4"
            />
            <span className="text-my-gray text-lg text-center drop-shadow-lg">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
