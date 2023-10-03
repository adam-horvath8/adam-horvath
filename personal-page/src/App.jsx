import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import headerImg from "./assets/lift.jpg";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import ButtonSecondary from "./components/ButtonSecondary";

import download from "./assets/download.svg";

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

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: 3,
        duration: 2,
        ease: "easeInOut",
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 2 }}
            className="text-white text-4xl mb-5 md:text-7xl font-secondary"
          >
            Hello<span className="text-my-yellow">,</span> my name is{" "}
            <span className="text-my-yellow">Adam</span>
          </motion.h1>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 2 }}
              className="text-white text-xl md:text-3xl font-primary mb-4"
            >
              I am self taught{" "}
              <span className="text-my-yellow">front-end web developer</span>{" "}
              from Slovakia, currently based in Brno and this is my portfolio
              page. Hope you like it :)
            </motion.p>
            <ButtonSecondary text="Resume" icon={download} />
          </div>
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
