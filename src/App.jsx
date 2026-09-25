import Aboutus from "./components/Aboutus";
import Hero from "./components/Hero";
import HorizontalLine from "./components/HorizontalLine";
import Projects from "./components/Projects";
import { motion } from "framer-motion";
import SkillsSection from "./components/SkillsSection";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const aboutContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const App = () => {
  return (
    <>
      <Hero />
      <Aboutus />
      <div className="project-heading mt-3 bg-[#020b16]">
        <motion.div
          className="flex items-center justify-center gap-4 pt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <HorizontalLine />

          <h1 className="mb-2 text-center text-xl font-medium text-[#871304]">
            My Projects
          </h1>
        </motion.div>

        <motion.div
          className="content text-3xl text-center text-[#ffffff]"
          variants={aboutContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="font-semibold -tracking-tight uppercase"
            variants={fadeUp}
          >
            I BUILD PRODUCTS THAT{" "}
            <span className="text-[#871304]">SOLVE REAL PROBLEMS</span>
          </motion.h1>

          <motion.h1
            className="font-semibold -tracking-tight"
            variants={fadeUp}
          >
            I SHIP CODE THAT MAKES AN IMPACT
          </motion.h1>
        </motion.div>
      </div>
      <Projects />
      <SkillsSection />
      <section id="contact">
        <ContactMe />
      </section>
      <Footer />
    </>
  );
};

export default App;
