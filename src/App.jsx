import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import headerImg from "./assets/lift1400.jpg";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import ButtonSecondary from "./components/ButtonSecondary";

import cvImg from "./assets/cv-img.svg";
import cv from "/cv-adam-horvath.pdf";

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function App() {
  const pagesVariants = {
    hidden: {
      x: "-98vw",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        delay: 0.2,
        duration: 1,
      },
    },
  };

  return (
    <>
      <header
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <Navbar scrollToSection={scrollToSection} />
        <div className="max-w-lg px-6 py-24 flex flex-col justify-between min-h-screen sd:block sm:px-12 sm:py-32">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="text-my-gray text-4xl mb-5 md:text-7xl font-secondary"
          >
            Hello<span className="text-my-yellow">,</span> my name is{" "}
            <span className="text-my-yellow">Adam</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            <p className="text-my-gray text-xl md:text-3xl font-primary mb-4">
              I am self taught{" "}
              <span className="text-my-yellow">front-end web developer</span>{" "}
              from Slovakia, currently based in Brno and this is my portfolio
              page. Hope you like it :)
            </p>
            <a href={cv} target="_blank" rel="noopener noreferrer">
              <ButtonSecondary text="Resume" icon={cvImg} />
            </a>
          </motion.div>
        </div>
      </header>
      <motion.main className="bg-black pt-2 pr-1 font-primary">
        <About pagesVariants={pagesVariants} />
        <Projects pagesVariants={pagesVariants} />
        <Contact pagesVariants={pagesVariants} />
      </motion.main>
    </>
  );
}

export default App;
