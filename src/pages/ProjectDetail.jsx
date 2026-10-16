import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* =========================================================
   DEVICE MOCKUP
========================================================= */

const LaptopMockup = ({ image, title }) => {
  return (
    <div className="relative w-full">
      {/* Laptop */}
      <div className="relative mx-auto w-[94%] max-w-[1000px]">

        {/* Screen */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[18px]
            border-[5px]
            border-[#151a21]
            bg-[#090d12]
            shadow-[0_35px_100px_rgba(0,0,0,0.6)]
          "
        >
          {/* Browser bar */}
          <div className="absolute left-0 right-0 top-0 z-20 flex h-8 items-center gap-2 bg-[#11161d] px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />

            <div className="ml-4 flex-1 rounded-full bg-white/[0.05] px-4 py-1 text-[8px] text-white/30">
              {title?.toLowerCase().replaceAll(" ", "-")}.com
            </div>
          </div>

          {/* Website */}
          <div className="relative aspect-[16/10] overflow-hidden bg-[#f5f3ee] pt-8">
            <motion.img
              src={image}
              alt={title}
              initial={{
                scale: 1.08,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 1.8,
                ease,
              }}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            {/* Screen reflection */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-white/[0.12]
                via-transparent
                to-transparent
              "
            />
          </div>
        </div>

        {/* Laptop base */}
        <div
          className="
            relative
            mx-auto
            h-5
            w-[82%]
            rounded-b-[50%]
            bg-gradient-to-b
            from-[#454c56]
            to-[#171b20]
            shadow-[0_20px_40px_rgba(0,0,0,0.5)]
          "
        />

        <div
          className="
            mx-auto
            h-2
            w-[70%]
            rounded-b-full
            bg-[#080b0e]
          "
        />
      </div>
    </div>
  );
};


/* =========================================================
   TABLET
========================================================= */

const TabletMockup = ({ image, title }) => {
  return (
    <div
      className="
        relative
        w-[260px]
        rotate-[-7deg]
        rounded-[25px]
        border-[7px]
        border-[#171c23]
        bg-[#080b0f]
        p-1
        shadow-[0_30px_60px_rgba(0,0,0,0.55)]
      "
    >
      <div className="overflow-hidden rounded-[17px]">
        <img
          src={image}
          alt={`${title} tablet`}
          className="aspect-[4/3] h-full w-full object-cover"
        />
      </div>

      {/* Camera */}
      <div className="absolute left-1/2 top-1 -translate-x-1/2">
        <div className="h-1.5 w-1.5 rounded-full bg-[#252b32]" />
      </div>
    </div>
  );
};


/* =========================================================
   PHONE
========================================================= */

const PhoneMockup = ({ image, title }) => {
  return (
    <div
      className="
        relative
        w-[145px]
        rotate-[8deg]
        rounded-[25px]
        border-[6px]
        border-[#11161b]
        bg-[#05070a]
        p-1
        shadow-[0_30px_60px_rgba(0,0,0,0.65)]
      "
    >
      {/* Dynamic island */}
      <div
        className="
          absolute
          left-1/2
          top-2
          z-10
          h-4
          w-14
          -translate-x-1/2
          rounded-full
          bg-black
        "
      />

      <div className="overflow-hidden rounded-[19px]">
        <img
          src={image}
          alt={`${title} mobile`}
          className="aspect-[9/18] h-full w-full object-cover"
        />
      </div>
    </div>
  );
};


/* =========================================================
   SECTION
========================================================= */

const Section = ({ title, children }) => {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="
        grid
        gap-8
        border-t
        border-white/10
        py-16
        md:grid-cols-12
        md:py-24
      "
    >
      <motion.div
        variants={fadeUp}
        className="md:col-span-4"
      >
        <span
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.2em]
            text-[#871304]
            md:text-xs
          "
        >
          {title}
        </span>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="md:col-span-8"
      >
        {children}
      </motion.div>
    </motion.section>
  );
};


/* =========================================================
   META
========================================================= */

const Meta = ({ label, children }) => {
  return (
    <div>
      <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>

      <div className="text-sm text-white md:text-base">
        {children}
      </div>
    </div>
  );
};


/* =========================================================
   MAIN PAGE
========================================================= */

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const index = projects.findIndex(
    (project) => project.id === id
  );

  const project = projects[index];

  /* ---------------- Scroll ---------------- */

  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.35],
    [0, -120]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.35],
    [1, 0.92]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    [1, 0]
  );

  /* ---------------- Mouse Parallax ---------------- */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const laptopRotateY = useTransform(
    smoothX,
    [-1, 1],
    [-4, 4]
  );

  const laptopRotateX = useTransform(
    smoothY,
    [-1, 1],
    [3, -3]
  );

  const floatingX = useTransform(
    smoothX,
    [-1, 1],
    [-15, 15]
  );

  const floatingY = useTransform(
    smoothY,
    [-1, 1],
    [-12, 12]
  );

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width;

    const y =
      (event.clientY - rect.top) / rect.height;

    mouseX.set((x - 0.5) * 2);
    mouseY.set((y - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  /* ---------------- Project check ---------------- */

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020b16] text-white">
        <div className="text-center">
          <h1 className="mb-6 text-4xl">
            Project not found
          </h1>

          <button
            onClick={() => navigate("/projects")}
            className="
              rounded-full
              bg-[#871304]
              px-6
              py-3
              text-xs
              uppercase
              tracking-wider
            "
          >
            Back to projects
          </button>
        </div>
      </main>
    );
  }

  const next =
    projects[(index + 1) % projects.length];

  const stack = project.stack || [];
  const features = project.features || [];

  return (
    <main className="min-h-screen overflow-hidden bg-[#020b16] text-white">

      {/* =====================================================
          SCROLL PROGRESS
      ===================================================== */}

      <motion.div
        style={{
          scaleX: progress,
        }}
        className="
          fixed
          left-0
          top-0
          z-[100]
          h-[3px]
          w-full
          origin-left
          bg-[#871304]
        "
      />

      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <motion.div
          style={{
            x: floatingX,
            y: floatingY,
          }}
          className="
            absolute
            left-[10%]
            top-[20%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#871304]/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-[5%]
            top-[35%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-blue-900/10
            blur-[140px]
          "
        />
      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <motion.section
        style={{
          y: heroY,
          scale: heroScale,
          opacity: heroOpacity,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="
          relative
          mx-auto
          flex
          min-h-screen
          w-[92%]
          max-w-[1250px]
          flex-col
          justify-center
          pb-20
          pt-24
        "
      >

        {/* Back */}
        <motion.button
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          onClick={() => navigate("/projects")}
          className="
            mb-12
            flex
            items-center
            gap-2
            text-xs
            uppercase
            tracking-[0.15em]
            text-white/45
            transition-colors
            hover:text-white
          "
        >
          <span>←</span>
          All projects
        </motion.button>


        {/* Project information */}

        <div className="relative z-10 max-w-[900px]">

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease,
            }}
            className="
              mb-5
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-[#871304]
              md:text-xs
            "
          >
            {project.year} · {project.category}
          </motion.p>


          {/* TITLE */}

          <h1
            className="
              overflow-hidden
              text-5xl
              font-medium
              leading-[0.95]
              tracking-[-0.055em]
              sm:text-6xl
              md:text-8xl
            "
          >
            {project.title.split(" ").map((word, i) => (
              <span
                key={i}
                className="mr-4 inline-block overflow-hidden pb-2"
              >
                <motion.span
                  initial={{
                    y: "110%",
                  }}
                  animate={{
                    y: 0,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 + i * 0.08,
                    ease,
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>


          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease,
            }}
            className="
              mt-7
              max-w-[650px]
              text-base
              leading-7
              text-white/55
              md:text-lg
              md:leading-8
            "
          >
            {project.tagline}
          </motion.p>


          {/* LIVE BUTTON */}

          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.9,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#871304]
              px-6
              py-3
              text-xs
              font-medium
              uppercase
              tracking-[0.1em]
              text-white
              shadow-[0_10px_40px_rgba(135,19,4,0.25)]
            "
          >
            {project.linkLabel || "View live project"}

            <motion.span
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              →
            </motion.span>
          </motion.a>
        </div>


        {/* =================================================
            DEVICE SHOWCASE
        ================================================= */}

        <div className="relative mt-20 md:mt-28">

          {/* glow */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[300px]
              w-[70%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#871304]/10
              blur-[100px]
            "
          />

          {/* Laptop */}

          <motion.div
            style={{
              rotateX: laptopRotateX,
              rotateY: laptopRotateY,
            }}
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.3,
              delay: 0.8,
              ease,
            }}
            className="
              relative
              z-10
              [transform-style:preserve-3d]
            "
          >
            <LaptopMockup
              image={project.image}
              title={project.title}
            />
          </motion.div>


          {/* Tablet */}

          <motion.div
            style={{
              x: floatingX,
              y: floatingY,
            }}
            initial={{
              opacity: 0,
              x: -100,
              y: 100,
              rotate: -15,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: -7,
            }}
            transition={{
              duration: 1.2,
              delay: 1.15,
              ease,
            }}
            className="
              absolute
              -bottom-8
              left-[-2%]
              z-20
              hidden
              md:block
            "
          >
            <TabletMockup
              image={project.image}
              title={project.title}
            />
          </motion.div>


          {/* Phone */}

          <motion.div
            style={{
              x: floatingX,
              y: floatingY,
            }}
            initial={{
              opacity: 0,
              x: 100,
              y: 80,
              rotate: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 8,
            }}
            transition={{
              duration: 1.2,
              delay: 1.3,
              ease,
            }}
            className="
              absolute
              -bottom-10
              right-[2%]
              z-20
              hidden
              md:block
            "
          >
            <PhoneMockup
              image={project.image}
              title={project.title}
            />
          </motion.div>

        </div>


        {/* Scroll indicator */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2,
          }}
          className="
            mt-24
            flex
            flex-col
            items-center
            gap-3
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-white/30
          "
        >
          Scroll to explore

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="h-8 w-px bg-white/20"
          />
        </motion.div>

      </motion.section>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          w-[92%]
          max-w-[1100px]
          pb-32
        "
      >

        {/* QUICK INFO */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="
            grid
            grid-cols-2
            gap-8
            border-y
            border-white/10
            py-12
            md:grid-cols-4
          "
        >

          <motion.div variants={fadeUp}>
            <Meta label="Role">
              {project.role || "Full Stack Developer"}
            </Meta>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Meta label="Year">
              {project.year}
            </Meta>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Meta label="Type">
              {project.category}
            </Meta>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Meta label="Stack">

              <div className="mt-2 flex flex-wrap gap-2">
                {stack.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{
                      y: -3,
                      scale: 1.05,
                    }}
                    className="
                      rounded-full
                      border
                      border-white/15
                      px-3
                      py-1
                      text-[11px]
                      text-white/70
                    "
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

            </Meta>
          </motion.div>

        </motion.div>


        {/* PROBLEM */}

        <Section title="The problem">
          <p
            className="
              max-w-[700px]
              text-lg
              leading-8
              text-white/65
              md:text-xl
              md:leading-9
            "
          >
            {project.problem}
          </p>
        </Section>


        {/* FEATURES */}

        <Section title="What it does">

          <div className="grid gap-4 sm:grid-cols-2">

            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[20px]
                  bg-[#f5f3ee]
                  p-6
                  text-sm
                  leading-7
                  text-[#222]
                  shadow-[0_15px_50px_rgba(0,0,0,0.2)]
                "
              >

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-20
                    w-20
                    translate-x-8
                    -translate-y-8
                    rounded-full
                    bg-[#871304]/10
                    blur-2xl
                    transition-transform
                    duration-500
                    group-hover:scale-[2]
                  "
                />

                <span
                  className="
                    relative
                    mb-5
                    block
                    text-xs
                    font-medium
                    text-[#871304]
                  "
                >
                  0{index + 1}
                </span>

                <span className="relative">
                  {feature}
                </span>

              </motion.div>
            ))}

          </div>

        </Section>


        {/* CHALLENGE */}

        <Section title="Biggest challenge">

          <p
            className="
              max-w-[700px]
              text-lg
              leading-8
              text-white/65
              md:text-xl
              md:leading-9
            "
          >
            {project.challenge}
          </p>

        </Section>


        {/* OUTCOME */}

        <Section title="Outcome">

          <p
            className="
              max-w-[700px]
              text-lg
              leading-8
              text-white/65
              md:text-xl
              md:leading-9
            "
          >
            {project.outcome}
          </p>

        </Section>


        {/* =================================================
            NEXT PROJECT
        ================================================= */}

        <motion.button
          onClick={() =>
            navigate(`/projects/${next.id}`)
          }
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          whileHover={{
            scale: 1.015,
          }}
          className="
            group
            relative
            mt-10
            flex
            w-full
            items-center
            justify-between
            overflow-hidden
            rounded-[25px]
            bg-[#f5f3ee]
            p-7
            text-left
            md:p-12
          "
        >

          {/* Hover glow */}

          <div
            className="
              absolute
              right-0
              top-0
              h-full
              w-1/2
              translate-x-full
              bg-[#871304]/10
              blur-3xl
              transition-transform
              duration-700
              group-hover:translate-x-0
            "
          />

          <div className="relative">

            <span
              className="
                block
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#871304]/70
              "
            >
              Next project
            </span>

            <span
              className="
                mt-2
                block
                text-3xl
                font-medium
                tracking-[-0.04em]
                text-[#111]
                md:text-6xl
              "
            >
              {next.title}
            </span>

          </div>

          <motion.span
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
              relative
              text-4xl
              text-[#871304]
              md:text-6xl
            "
          >
            →
          </motion.span>

        </motion.button>

      </div>

    </main>
  );
};

export default ProjectDetail;