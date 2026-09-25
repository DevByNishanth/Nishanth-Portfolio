import React from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  Phone,
} from "lucide-react";

const text = "LET'S BUILD SOMETHING";
const text2 = "THAT MATTERS";

/* =========================================================
   MAIN HEADING LETTER ANIMATION
========================================================= */

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

/* =========================================================
   SECTION REVEAL
========================================================= */

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 40,
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

/* =========================================================
   STAGGER CONTAINER
========================================================= */

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* =========================================================
   INDIVIDUAL ITEM
========================================================= */

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   ANIMATED HEADING
========================================================= */

const AnimatedText = ({ children, startIndex = 0 }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.5,
        }}
        className="flex flex-wrap"
        style={{
          perspective: "1000px",
        }}
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
                ease: "easeOut",
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

/* =========================================================
   SOCIAL LINK
========================================================= */

const SocialLink = ({
  href,
  icon: Icon,
  label,
  external = true,
}) => {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative flex px-4 items-center justify-between
                 overflow-hidden border-b border-[#f3e4d5]/20
                 py-3 cursor-pointer"
      whileHover="hover"
      initial="initial"
    >
      {/* Hover background */}
      <motion.div
        variants={{
          initial: {
            x: "-101%",
          },

          hover: {
            x: "0%",
            transition: {
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className="absolute inset-0 bg-[#f3e4d5]"
      />

      {/* Content */}
      <div className="relative z-10 flex items-center gap-3">
        <motion.div
          variants={{
            initial: {
              rotate: 0,
              scale: 1,
            },

            hover: {
              rotate: -8,
              scale: 1.1,
              transition: {
                duration: 0.25,
              },
            },
          }}
        >
          <Icon
            size={18}
            strokeWidth={1.7}
            className="transition-colors duration-300
                       group-hover:text-[#681a01]"
          />
        </motion.div>

        <span
          className="text-sm uppercase tracking-wide
                     transition-colors duration-300
                     group-hover:text-[#681a01]"
        >
          {label}
        </span>
      </div>

      {/* Arrow */}
      <motion.div
        variants={{
          initial: {
            x: 0,
            y: 0,
            opacity: 0.6,
          },

          hover: {
            x: 4,
            y: -4,
            opacity: 1,
            transition: {
              duration: 0.25,
              ease: "easeOut",
            },
          },
        }}
        className="relative z-10"
      >
        <ArrowUpRight
          size={18}
          strokeWidth={1.7}
          className="transition-colors duration-300
                     group-hover:text-[#681a01]"
        />
      </motion.div>
    </motion.a>
  );
};

/* =========================================================
   FOOTER
========================================================= */

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="main-container overflow-hidden
                 px-6 py-8 md:px-14 md:pt-15
                 bg-linear-to-r from-[#5e1601]
                 via-[#7e1e01]
                 to-[#571501]
                 text-[#f3e4d5]"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="grid grid-cols-12 gap-3 text-white">

        {/* COPYRIGHT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="col-span-12 md:col-span-4"
        >
          <motion.h1
            whileHover={{
              x: 5,
              transition: {
                duration: 0.25,
              },
            }}
            className="text-[28px] md:text-[30px]
                       font-semibold w-fit cursor-default"
          >
            ©'26
          </motion.h1>
        </motion.div>

        {/* MAIN TEXT */}
        <div
          className="text-container
                     col-span-12 md:col-span-8
                     font-medium
                     text-[42px] sm:text-[50px] md:text-[58px]
                     -tracking-tight
                     leading-[0.92]"
        >
          <AnimatedText>
            {text}
          </AnimatedText>

          <AnimatedText
            startIndex={text.length}
          >
            {text2}
          </AnimatedText>
        </div>
      </header>

      {/* =====================================================
          INFORMATION SECTION
      ===================================================== */}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        className="content-container
                   grid grid-cols-1 md:grid-cols-3
                   gap-8 md:gap-4
                   mt-16 md:mt-20"
      >

        {/* COLUMN 1 */}
        <motion.div
          variants={sectionVariants}
          className="space-y-1"
        >
          <motion.div
            variants={itemVariants}
            className="overflow-hidden"
          >
            <motion.h1
              whileHover={{
                x: 8,
                transition: {
                  duration: 0.25,
                },
              }}
              className="cursor-default uppercase"
            >
              DIGITAL EXPERIENCES
            </motion.h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="overflow-hidden"
          >
            <motion.h1
              whileHover={{
                x: 8,
                transition: {
                  duration: 0.25,
                },
              }}
              className="cursor-default"
            >
              Frontend · Backend
            </motion.h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="overflow-hidden"
          >
            <motion.h1
              whileHover={{
                x: 8,
                transition: {
                  duration: 0.25,
                },
              }}
              className="cursor-default"
            >
              Full Stack Developer
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* COLUMN 2 */}
        <motion.div
          variants={sectionVariants}
          className="space-y-1"
        >
          <motion.div variants={itemVariants}>
            <motion.h1
              whileHover={{
                x: 8,
                transition: {
                  duration: 0.25,
                },
              }}
              className="cursor-default"
            >
              3+ years of experience
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h1
              whileHover={{
                x: 8,
                transition: {
                  duration: 0.25,
                },
              }}
              className="cursor-default"
            >
              Building web applications
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h1
              whileHover={{
                x: 8,
                transition: {
                  duration: 0.25,
                },
              }}
              className="cursor-default"
            >
              React · Node · MongoDB
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* COLUMN 3 */}
        <motion.div
          variants={sectionVariants}
          className="flex md:justify-end"
        >
          <div className="space-y-1">
            <motion.div variants={itemVariants}>
              <motion.h1
                whileHover={{
                  x: -8,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="cursor-default"
              >
                Based in India
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.h1
                whileHover={{
                  x: -8,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="cursor-default"
              >
                Available for remote work
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.h1
                whileHover={{
                  x: -8,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="cursor-default"
              >
                Open to opportunities
              </motion.h1>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div className="relative mt-14 md:mt-16 h-px overflow-hidden">
        <motion.div
          initial={{
            x: "-100%",
          }}
          whileInView={{
            x: "0%",
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 bg-[#f3e4d5]/30"
        />
      </div>

      {/* =====================================================
          BOTTOM SECTION
      ===================================================== */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="footer-links
                   grid grid-cols-1
                   md:grid-cols-3
                   gap-10
                   mt-8"
      >

        {/* =================================================
            COPYRIGHT
        ================================================= */}

        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-between"
        >
          <motion.h1
            whileHover={{
              x: 5,
              transition: {
                duration: 0.25,
              },
            }}
            className="text-sm uppercase tracking-wide
                       cursor-default"
          >
            ©'26 Nishanth
          </motion.h1>
{/* 
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 0.5,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="hidden md:block text-xs mt-6"
          >
            Designed & developed by Nishanth
          </motion.p> */}
        </motion.div>

        {/* =================================================
            CONTACT
        ================================================= */}

        <motion.div
          variants={itemVariants}
          className="space-y-1"
        >

          {/* EMAIL */}
          <motion.a
            href="mailto:code.with.nishanth03@gmail.com"
            whileHover="hover"
            initial="initial"
            className="group flex items-center gap-3
                       w-fit cursor-pointer"
          >
            <motion.div
              variants={{
                initial: {
                  rotate: 0,
                  scale: 1,
                },

                hover: {
                  rotate: -10,
                  scale: 1.12,
                },
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <Mail
                size={18}
                strokeWidth={1.7}
              />
            </motion.div>

            <span
              className="text-sm
                         transition-opacity duration-300
                         group-hover:opacity-60"
            >
              code.with.nishanth03@gmail.com
            </span>
          </motion.a>

          {/* PHONE */}
          <motion.a
            href="tel:+916369032375"
            whileHover="hover"
            initial="initial"
            className="group flex items-center gap-3
                       w-fit cursor-pointer"
          >
            <motion.div
              variants={{
                initial: {
                  rotate: 0,
                  scale: 1,
                },

                hover: {
                  rotate: -10,
                  scale: 1.12,
                },
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <Phone
                size={18}
                strokeWidth={1.7}
              />
            </motion.div>

            <span
              className="text-sm
                         transition-opacity duration-300
                         group-hover:opacity-60"
            >
              +91 6369032375
            </span>
          </motion.a>

        </motion.div>

        {/* =================================================
            SOCIAL LINKS
        ================================================= */}

        <motion.div
          variants={itemVariants}
          className="md:ml-auto w-full md:w-[220px]"
        >

          <SocialLink
            href="https://github.com/DevByNishanth"
            icon={SiGithub}
            label="GitHub"
          />

          <SocialLink
            href="https://www.linkedin.com/in/nishanth-a-393909373/"
            icon={FaLinkedin}
            label="LinkedIn"
          />

        </motion.div>
      </motion.div>

      {/* =====================================================
          BACK TO TOP
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          delay: 0.5,
          duration: 0.6,
        }}
        className="flex justify-end mt-10"
      >
        <motion.button
          onClick={scrollToTop}
          whileHover="hover"
          initial="initial"
          className="group flex items-center gap-2
                     text-xs uppercase tracking-widest
                     cursor-pointer"
        >
          <span className="transition-opacity duration-300 group-hover:opacity-60">
            Back to top
          </span>

          <motion.span
            variants={{
              initial: {
                y: 0,
              },

              hover: {
                y: -4,
              },
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <ArrowUp size={15} />
          </motion.span>
        </motion.button>
      </motion.div>

      {/* =====================================================
          HUGE FOOTER NAME
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="overflow-hidden mt-10 md:mt-14"
      >
        <motion.h2
          initial={{
            y: "100%",
          }}
          whileInView={{
            y: "0%",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-[17vw] md:text-[16vw]
                     font-semibold
                     leading-[0.72]
                     tracking-[-0.07em]
                     text-white
                     whitespace-nowrap
                     select-none"
        >
          NISHANTH
        </motion.h2>
      </motion.div>

    </footer>
  );
};

export default Footer;