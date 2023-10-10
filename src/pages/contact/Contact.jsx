import React from "react";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView, useScroll } from "framer-motion";

import contactData from "../../data/contactData";

import ContactCard from "./ContactCard";

const Contact = ({ pagesVariants }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const info = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1,33 1"],
  });

  return (
    <motion.div
      id="contact"
      ref={ref}
      variants={pagesVariants}
      initial="hidden"
      animate={mainControls}
      className="page"
    >
      <h2 className="page-heading">Contact</h2>

      <motion.div
        ref={info}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
      >
        <h3 className="text-my-yellow text-center text-xl">
          Thanks for visiting my web site!
        </h3>
        <p className="text-my-gray text-center m-5 text-lg">
          Let's get in touch
        </p>
        <div className="flex flex-wrap ">
          <a
            className="w-full md:w-1/2 lg:w-1/4"
            href={`tel:${contactData.tel}`}
          >
            <ContactCard icon={contactData.telIcon} text={contactData.tel} />
          </a>
          <a
            className="w-full md:w-1/2 lg:w-1/4"
            href={`mailto:${contactData.email}`}
          >
            <ContactCard
              icon={contactData.emailIcon}
              text={contactData.email}
            />
          </a>

          <a
            className="w-1/2 lg:w-1/4"
            href="https://linkedin.com/in/adam--horvathh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactCard
              icon={contactData.linkedIcon}
              text={contactData.linked}
            />
          </a>
          <a
            className="w-1/2 lg:w-1/4"
            href="https://github.com/adam-horvath8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactCard icon={contactData.gitIcon} text={contactData.git} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
