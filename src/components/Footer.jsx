import React from "react";
import { motion } from "framer-motion";

const text = "LET'S BUILD SOMETHING";
const text2 = "THAT MATTERS";

const letterVariants = {
  hidden: {
    y: "120%",
    rotateX: -90,
    opacity: 0,
  },
  visible: (i) => ({
    y: "0%",
    rotateX: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.035,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const AnimatedText = ({ children, startIndex = 0 }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-wrap"
        style={{ perspective: "1000px" }}
      >
        {children.split("").map((char, index) => (
          <motion.span
            key={index}
            custom={startIndex + index}
            variants={letterVariants}
            whileHover={{
              y: -10,
              rotateZ: index % 2 === 0 ? -3 : 3,
              transition: {
                duration: 0.2,
              },
            }}
            className="inline-block cursor-default"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="main-container py-6 px-14 bg-linear-to-r from-[#5e1601] via-[#7e1e01] to-[#571501]">
      <header className="text-white grid grid-cols-12 gap-3">
        
        {/* Copyright */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-[30px] font-semibold col-span-4"
        >
          ©'26
        </motion.h1>

        {/* Main Text */}
        <div className="text-container font-medium text-[50px] -tracking-tight col-span-8 leading-[0.95]">
          <AnimatedText>{text}</AnimatedText>

          <AnimatedText
            startIndex={text.length}
          >
            {text2}
          </AnimatedText>
        </div>
      </header>

   
    </div>
  );
};

export default Footer;