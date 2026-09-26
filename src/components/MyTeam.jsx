import React from "react";
import {
  Code2,
  GitBranch,
  Terminal,
  Users,
  CircleUserRound,
  Handshake,
  UserPlus,
} from "lucide-react";
import teamImg from "../assets/teamImg.jpeg";
import { motion } from "framer-motion";
import HorizontalLine from "./HorizontalLine";

/* =========================================================
   ANIMATION VARIANTS (matched to Aboutus.jsx)
========================================================= */

const aboutContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

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

// Container-2 image/graphic reveal (mirrors Aboutus imageAnimation)
const imageAnimation = {
  hidden: {
    opacity: 0,
    x: 80,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Stagger wrapper for the icon bubbles inside container-2
const iconContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.12,
    },
  },
};

// Each icon bubble pops in
const iconPop = {
  hidden: {
    opacity: 0,
    scale: 0.4,
    y: 15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Gentle infinite float, used on the icon bubbles after they pop in
const floatY = {
  animate: (custom) => ({
    y: [0, custom, 0],
    transition: {
      duration: 3 + Math.abs(custom) * 0.4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

// Center handshake icon: pop in + soft pulsing glow ring
const centerPop = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// SVG paths draw themselves on scroll
const drawPath = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const MyTeam = () => {
  return (
    <>
      <div className="main-container bg-[#010d1b] flex flex-col md:flex-row gap-8 md:gap-4 pt-12 px-6 sm:px-8 md:pl-14 md:pr-4">
        <div className="team-section w-full md:w-[50%] ">
          <motion.div
            className="heading flex items-center gap-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <HorizontalLine />

            <h1 className="mb-2 text-xl font-medium text-[#871304]">
              The Team
            </h1>
          </motion.div>

          <motion.div
            className="content text-2xl sm:text-3xl text-[#101820]"
            variants={aboutContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <motion.h1
              className="font-semibold text-white -tracking-tight uppercase"
              variants={fadeUp}
            >
              BUILT BY A FOCUSED TEAM
            </motion.h1>

            <motion.h1
              className="font-semibold -tracking-tight"
              variants={fadeUp}
            >
              <span className="text-white">I BUILD, SHE CONNECTS —</span>{" "}
              <span className="text-[#871304]">TOGETHER WE DELIVER</span>
            </motion.h1>

            <motion.p
              className="text-sm mt-4 text-[#ffffff] w-full md:w-[93%] pb-2 md:pb-0"
              variants={fadeUp}
            >
              Great digital products need more than good code. Our team brings
              together technology and business development to turn ideas into
              meaningful digital solutions. While I focus on designing and
              building scalable web experiences, our business development side
              focuses on understanding client needs, building relationships, and
              turning opportunities into successful projects.
            </motion.p>
          </motion.div>
        </div>

        {/* =========================================================
            CONTAINER 2 — animated graphic panel
        ========================================================= */}
        <motion.div
          className="container-2 w-full md:w-[50%] pb-8 md:pb-0"
          variants={imageAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="relative w-full aspect-[1.3] sm:aspect-[1.55] overflow-hidden rounded-2xl md:rounded-3xl bg-[#010d1b]"
            variants={iconContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* =========================
            SVG FLOWING CODE LINES
        ========================== */}
            <svg
              viewBox="0 0 600 380"
              className="absolute inset-0 h-full w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Cyan gradient */}
                <linearGradient
                  id="cyanGradient"
                  x1="100"
                  y1="100"
                  x2="330"
                  y2="100"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1677b8" />
                  <stop offset="0.5" stopColor="#08b9bd" />
                  <stop offset="1" stopColor="#16d7a1" />
                </linearGradient>

                {/* Orange / red gradient */}
                <linearGradient
                  id="orangeGradient"
                  x1="300"
                  y1="180"
                  x2="600"
                  y2="240"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ff7a18" />
                  <stop offset="0.45" stopColor="#f4513d" />
                  <stop offset="1" stopColor="#ff5c35" />
                </linearGradient>

                {/* Glow */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="7" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* =========================
              LEFT CYAN PATH
          ========================== */}

              {/* Glow */}
              <motion.path
                d="M 70 105 H 220 C 275 105 300 135 300 170 C 300 205 275 230 220 230 H 85"
                stroke="url(#cyanGradient)"
                strokeWidth="22"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.22"
                filter="url(#glow)"
                variants={drawPath}
              />

              {/* Main line */}
              <motion.path
                d="M 70 105 H 220 C 275 105 300 135 300 170 C 300 205 275 230 220 230 H 85"
                stroke="url(#cyanGradient)"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={drawPath}
              />

              {/* =========================
              RIGHT ORANGE PATH
          ========================== */}

              {/* Glow */}
              <motion.path
                d="M 315 165 C 345 140 365 135 410 135 H 585
               M 410 135 C 370 135 350 165 350 205
               C 350 245 380 270 430 270 H 610"
                stroke="url(#orangeGradient)"
                strokeWidth="22"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.22"
                filter="url(#glow)"
                variants={drawPath}
              />

              {/* Main orange line */}
              <motion.path
                d="M 315 165 C 345 140 365 135 410 135 H 585
               M 410 135 C 370 135 350 165 350 205
               C 350 245 380 270 430 270 H 610"
                stroke="url(#orangeGradient)"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={drawPath}
              />
            </svg>

            {/* =========================
            CENTER CODE ICON (pop-in + pulsing glow ring)
        ========================== */}
            <motion.div
              className="
            absolute
            left-[56%]
            top-[40%]
            -translate-x-1/2
            -translate-y-1/2
            z-20
            flex
            h-14
            w-14
            sm:h-20
            sm:w-20
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#29252b]
            shadow-[0_0_25px_rgba(255,255,255,0.08)]
          "
              variants={centerPop}
            >
              <motion.span
                className="absolute inset-0 rounded-full border border-[#871304]/40"
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
              >
                <Handshake size={18} className="text-slate-300" />
              </motion.div>
            </motion.div>

            {/* =========================
            TOP LEFT TERMINAL
        ========================== */}
            <motion.div
              className="
            absolute
            left-[16%]
            top-[8%]
            flex
            h-8
            w-8
            sm:h-10
            sm:w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/5
            bg-[#171d29]
            shadow-lg
          "
              variants={iconPop}
              custom={-8}
              whileHover={{ scale: 1.15 }}
            >
              <motion.div custom={-8} variants={floatY} animate="animate">
                <Code2 size={25} strokeWidth={2} className="text-white/80" />
              </motion.div>
            </motion.div>

            {/* =========================
            TOP RIGHT USER
        ========================== */}
            <motion.div
              className="
            absolute
            right-[8%]
            top-[10%]
            flex
            h-11
            w-11
            sm:h-15
            sm:w-15
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#20212b]
            shadow-lg
          "
              variants={iconPop}
              custom={10}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div custom={10} variants={floatY} animate="animate">
                <div
                  className="img-container h-11 w-11 sm:h-15
            sm:w-15 border-3 border-[#871304] rounded-full"
                >
                  <img
                    src={teamImg}
                    className="w-full h-full rounded-full object-fit"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* =========================
            LEFT BOTTOM USER
        ========================== */}
            <motion.div
              className="
            absolute
            left-[8%]
            bottom-[18%]
            flex
            h-8
            w-8
            sm:h-10
            sm:w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#252832]
            shadow-lg
          "
              variants={iconPop}
              custom={9}
              whileHover={{ scale: 1.15 }}
            >
              <motion.div custom={9} variants={floatY} animate="animate">
                <CircleUserRound size={19} className="text-white/70" />
              </motion.div>
            </motion.div>

            {/* =========================
            BOTTOM CENTER GIT BRANCH
        ========================== */}
            <motion.div
              className="
            absolute
            left-[57%]
            bottom-[17%]
            flex
            h-8
            w-8
            sm:h-10
            sm:w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#3a2b24]
            shadow-lg
          "
              variants={iconPop}
              custom={-9}
              whileHover={{ scale: 1.15 }}
            >
              <motion.div custom={-9} variants={floatY} animate="animate">
                <UserPlus size={19} className="text-white/70" />
              </motion.div>
            </motion.div>

            {/* =========================
            SMALL FLOATING ICON
        ========================== */}
            <motion.div
              className="
            absolute
            left-[69%]
            top-[19%]
            flex
            h-6
            w-6
            sm:h-7
            sm:w-7
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#191b24]
          "
              variants={iconPop}
              custom={6}
            >
              <motion.div custom={6} variants={floatY} animate="animate">
                <GitBranch size={13} className="text-white/50" />
              </motion.div>
            </motion.div>

            {/* =========================
            SMALL FLOATING ICON
        ========================== */}
            <motion.div
              className="
            absolute
            left-[38%]
            top-[68%]
            flex
            h-6
            w-6
            sm:h-7
            sm:w-7
            items-center
            justify-center
            rounded-full
            border
            border-white/5
            bg-[#191b24]
          "
              variants={iconPop}
              custom={-6}
            >
              <motion.div custom={-6} variants={floatY} animate="animate">
                <Users size={13} className="text-white/40" />
              </motion.div>
            </motion.div>

            {/* =========================
            DECORATIVE DOTS (soft twinkle)
        ========================== */}
            <motion.div
              className="absolute left-[57%] top-[9%] h-2 w-2 rounded-full bg-white/5"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute right-[20%] bottom-[14%] h-2 w-2 rounded-full bg-white/5"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            />

            <motion.div
              className="absolute left-[46%] top-[12%] h-2 w-2 rounded-full bg-white/5"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
            />

            <motion.div
              className="absolute left-[74%] bottom-[30%] h-1.5 w-1.5 rounded-full bg-white/5"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.8,
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default MyTeam;
