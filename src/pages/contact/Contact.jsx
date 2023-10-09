import React from "react";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import contactData from "../../data/contactData";

import ContactCard from "./ContactCard";

import linkedIn from "../../assets/linkedin.svg";
import gitHub from "../../assets/git-hub.svg";

const Contact = ({ pagesVariants }) => {
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
      id="contact"
      ref={ref}
      variants={pagesVariants}
      initial="hidden"
      animate={mainControls}
      className="page"
    >
      <h2 className="page-heading">Contact</h2>

      <motion.div>
        <h3>Thanks for visiting my web site!</h3>
        <p>Let's get in touch</p>
        <div>
          <a href={`tel:${contactData.tel}`}>
            <ContactCard icon={contactData.telIcon} text={contactData.tel} />
          </a>
          <a href={`mailto:${contactData.email}`}>
            <ContactCard
              icon={contactData.emailIcon}
              text={contactData.email}
            />
          </a>
          <div>
            <a href="www.linkedin.com/in/adam--horvathh">
              <img src={linkedIn} alt="" />
            </a>
            <a href="">
              <img src={gitHub} alt="" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
