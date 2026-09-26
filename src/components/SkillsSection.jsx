import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HorizontalLine from "./HorizontalLine";
import skilImg from "../assets/skills.png";

// import skilImg from '../assets/skills2.jfif'

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import react from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import mui from "../assets/mui.png";
import framer from "../assets/framer.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/express.webp";
import mongodb from "../assets/mongoDB.png";
import python from "../assets/python.png";
import chatgpt from "../assets/chatgpt.png";
import vscode from "../assets/vscode.png";

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

const SkillCard = ({ image }) => {
  return (
    <div className="icon-card bg-white shadow-gray-700 shadow-md p-1.5 md:p-2 rounded-lg shrink-0">
      <img
        src={image}
        className="w-8 h-8 md:w-[52px] md:h-[52px] object-contain"
        alt=""
      />
    </div>
  );
};

const SkillsSection = () => {
  const { scrollYProgress } = useScroll();

  const firstRowX = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const secondRowX = useTransform(scrollYProgress, [0, 1], [70, 320]);
  const thirdRowX = useTransform(scrollYProgress, [0, 1], [130, -150]);

  return (
    <div className="main-container pl-4 sm:pl-6 md:pl-8 lg:pl-14 flex flex-col md:flex-row gap-8 md:gap-4 overflow-hidden py-12">
      <div className="first-section w-full md:w-[60%]">
        <motion.div
          className="heading flex items-center  gap-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          <HorizontalLine />

          <h1 className="mb-2 text-xl font-medium text-[#871304]">Skills</h1>
        </motion.div>
        <motion.div
          className="content text-3xl text-[#101820]"
          variants={aboutContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="font-semibold -tracking-tight uppercase"
            variants={fadeUp}
          >
            TECHNOLOGIES I WORK WITH
          </motion.h1>

          <motion.h1
            className="font-semibold -tracking-tight"
            variants={fadeUp}
          >
            I BUILD,{" "}
            <span className="text-[#871304]">
              SHIP & SCALE DIGITAL PRODUCTS
            </span>
          </motion.h1>

          <motion.p
            className="text-sm mt-4 text-[#101820] w-full md:w-[93%]"
            variants={fadeUp}
          >
            I combine clean frontend development, powerful backend architecture,
            smooth animations, and AI to create digital experiences that are
            both functional and engaging. My toolkit spans React, Next.js,
            JavaScript, Tailwind CSS, Framer Motion, GSAP, Node.js, Express.js,
            MongoDB, Python, and RAG—giving me the flexibility to take a product
            from idea to a complete, scalable experience.
          </motion.p>
        </motion.div>
      </div>

      <div className="second-section mt-10 md:-rotate-14 -rotate-[8deg] flex flex-col overflow-hidden items-center md:items-end w-full md:w-[40%] min-w-0 self-center">
        <div className="logos-contain overflow-hidden w-[120%] md:w-full min-w-0">
          <div className="icons">
            {/* ================= ROW 1 → LEFT ================= */}

            <motion.div
              className="flex w-max"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* First set */}
              <div className="flex gap-3 md:gap-4 pr-3 md:pr-4">
                <SkillCard image={html} />
                <SkillCard image={css} />
                <SkillCard image={javascript} />
                <SkillCard image={react} />
                <SkillCard image={nextjs} />
                <SkillCard image={bootstrap} />
              </div>

              {/* Duplicate set */}
              <div className="flex gap-3 md:gap-4 pr-3 md:pr-4">
                <SkillCard image={html} />
                <SkillCard image={css} />
                <SkillCard image={javascript} />
                <SkillCard image={react} />
                <SkillCard image={nextjs} />
                <SkillCard image={bootstrap} />
              </div>
            </motion.div>

            {/* ================= ROW 2 → RIGHT ================= */}

            <div className="md:translate-x-[100px] translate-x-[20px] overflow-hidden mt-3 md:mt-4">
              <motion.div
                className="flex w-max"
                animate={{
                  x: ["-50%", "0%"],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* First set */}
                <div className="flex gap-3 md:gap-4 pr-3 md:pr-4">
                  <SkillCard image={mui} />
                  <SkillCard image={framer} />
                  <SkillCard image={nodejs} />
                  <SkillCard image={mongodb} />
                  <SkillCard image={python} />
                  <SkillCard image={tailwind} />
                </div>

                {/* Duplicate set */}
                <div className="flex gap-3 md:gap-4 pr-3 md:pr-4">
                  <SkillCard image={mui} />
                  <SkillCard image={framer} />
                  <SkillCard image={nodejs} />
                  <SkillCard image={mongodb} />
                  <SkillCard image={python} />
                  <SkillCard image={tailwind} />
                </div>
              </motion.div>
            </div>

            {/* ================= ROW 3 → LEFT ================= */}

            <div className="md:translate-x-[210px] translate-x-[60px] overflow-hidden mt-3 md:mt-4">
              <motion.div
                className="flex w-max"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* First set */}
                <div className="flex gap-3 md:gap-4 pr-3 md:pr-4">
                  <SkillCard image={express} />
                  <SkillCard image={chatgpt} />
                  <SkillCard image={tailwind} />
                  <SkillCard image={vscode} />
                  <SkillCard image={nextjs} />
                  <SkillCard image={bootstrap} />
                </div>

                {/* Duplicate set */}
                <div className="flex gap-3 md:gap-4 pr-3 md:pr-4">
                  <SkillCard image={express} />
                  <SkillCard image={chatgpt} />
                  <SkillCard image={tailwind} />
                  <SkillCard image={vscode} />
                  <SkillCard image={nextjs} />
                  <SkillCard image={bootstrap} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
