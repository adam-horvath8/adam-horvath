import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import headerImg from "./assets/header-photo.jpg";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <header
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <Navbar />
        <div className="max-w-lg ">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 2 }}
            className="text-white text-6xl mb-5"
          >
            Hello<span className="text-my-yellow">,</span> my name is{" "}
            <span className="text-my-yellow">Adam</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 2 }}
            className="text-white text-2xl"
          >
            I am self taught web developer and this is my portfolio page. I’m
            honored, you visited my site. Hope you like it :)
          </motion.p>
        </div>
      </header>
      <main className="bg-my-black ">
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
