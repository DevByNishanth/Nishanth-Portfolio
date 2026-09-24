import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// ============================================================
// Images
// ============================================================

import arunaImage from "../assets/aruna.png";
import shadowArrowImage from "../assets/shadowArrow.png";
import avatarImage from "../assets/avatar.png";
import exploreMunnarImage from "../assets/exploremunnar.png";
import exploreMunnarDashboardImage from "../assets/exploreMunnarDashboard.png";
import hrmsImage from "../assets/hrms.png";
import eventsImage from "../assets/events.png";
import appraisalImage from "../assets/appraisal.jpg";
import lmsImage from "../assets/lms.png";
import bookMyCabsImage from "../assets/bookmycabs.png";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

// ============================================================
// Projects data (outside the component so it isn't recreated)
// ============================================================

const projects = [
  {
    title: "Aruna Caterer",
    year: "2025",
    category: "Web Application",
    description:
      "A complete catering management platform designed to manage bookings, customers, menus and day-to-day catering operations.",
    image: arunaImage,
  },
  {
    title: "Shadow Arrow",
    year: "2025",
    category: "Web Application",
    description:
      "A modern business platform built with a focus on clean user experience, responsive interfaces and efficient application workflows.",
    image: shadowArrowImage,
  },
  {
    title: "Avatar Public School",
    year: "2025",
    category: "Education",
    description:
      "A school management platform designed to provide students, parents and administrators with a simple and centralized digital experience.",
    image: avatarImage,
  },
  {
    title: "Explore Munnar",
    year: "2025",
    category: "Travel Platform",
    description:
      "A travel platform that helps users explore destinations, discover attractions and experience the beauty of Munnar through an engaging interface.",
    image: exploreMunnarImage,
  },
  {
    title: "Explore Munnar Admin",
    year: "2025",
    category: "Admin Dashboard",
    description:
      "An administration dashboard for managing destinations, attractions, bookings and content for the Explore Munnar platform.",
    image: exploreMunnarDashboardImage,
  },
  {
    title: "HRMS",
    year: "2025",
    category: "Management System",
    description:
      "A human resource management system designed to streamline employee management, attendance, leave and organizational workflows.",
    image: hrmsImage,
  },
  {
    title: "Events Management System",
    year: "2025",
    category: "Management System",
    description:
      "A centralized platform for creating, managing and tracking events with dedicated workflows for event requests and approvals.",
    image: eventsImage,
  },
  {
    title: "Appraisal System",
    year: "2025",
    category: "HR Management",
    description:
      "An employee appraisal platform that simplifies performance reviews, evaluations and organizational assessment workflows.",
    image: appraisalImage,
  },
  {
    title: "Learning Management System",
    year: "2025",
    category: "Education Platform",
    description:
      "A learning management platform that enables organizations to manage courses, learning content, users and educational workflows.",
    image: lmsImage,
  },
  {
    title: "Book My Cabs",
    year: "2025",
    category: "Transportation",
    description:
      "A cab booking platform designed to connect users with transportation services through a simple and efficient booking experience.",
    image: bookMyCabsImage,
  },
];

// ============================================================
// Projects Component
// ============================================================

const Projects = () => {
  const sectionRef = useRef(null);

  // ========================================================
  // GSAP STACK ANIMATION
  // ========================================================

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".project-card");
      if (!cards.length) return;

      const total = cards.length;
      const stackOffset = 15; // px between stacked cards
      const scaleStep = 0.03; // scale lost per stacked card
      const visibleDepth = 4; // how many cards show behind the active one

      // Static z-order: earlier cards are always above later ones
      cards.forEach((card, i) => {
        gsap.set(card, { zIndex: total - i, force3D: true });
      });

      // Position every card based on progress (0 → total - 1)
      const render = (progress) => {
        cards.forEach((card, i) => {
          const offset = i - progress;

          // 1. Already gone
          if (offset <= -1) {
            gsap.set(card, { autoAlpha: 0 });
            return;
          }

          // 2. Leaving: fully opaque, slides down
          if (offset < 0) {
            const t = -offset;
            gsap.set(card, {
              autoAlpha: 1,
              yPercent: 130 * t * t,
              scale: 1 + 0.03 * t,
            });
            return;
          }

          // 3. Too deep in the stack: hidden (no fading)
          if (offset > visibleDepth) {
            gsap.set(card, { autoAlpha: 0 });
            return;
          }

          // 4. In the stack: always fully opaque
          gsap.set(card, {
            autoAlpha: 1,
            yPercent: 0,
            y: -stackOffset * offset,
            scale: 1 - scaleStep * offset,
          });
        });
      };

      // Each card holds still for the first part of its scroll,
      // then moves away smoothly during the rest.
      const withHold = (p) => {
        const i = Math.floor(p);
        const f = p - i;
        const hold = 0.31;

        if (f < hold) return i;

        const t = (f - hold) / (1 - hold);
        const eased = t * t * (3 - 2 * t); // smoothstep
        return i + eased;
      };

      render(0);

      const state = { progress: 0 };

      gsap.to(state, {
        progress: total - 1,
        ease: "none",
        onUpdate: () => render(withHold(state.progress)),
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * (total - 1)}`,
          scrub: 0.6,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Re-measure once everything has loaded, so the pin is accurate
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);

      return () => window.removeEventListener("load", refresh);
    },
    { scope: sectionRef },
  );

  // ========================================================
  // RETURN
  // ========================================================

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#020b16]"
    >
      <div className="flex h-full w-full items-center justify-center  ">
        <div className="cards relative h-[460px] w-[92%] max-w-[1100px] md:h-[500px] lg:h-[590px]">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="
                project-card
                absolute left-0 top-0
                h-full w-full
                overflow-hidden
                rounded-[22px]
                border border-black/10
                bg-[#f5f3ee]
                shadow-[0_8px_24px_rgba(0,0,0,0.18)]
                will-change-transform
                [backface-visibility:hidden]
              "
            >
              <div className="grid h-full grid-cols-1 md:grid-cols-12">
                {/* ===================== LEFT SIDE ===================== */}

                <div className="flex h-full flex-col justify-between p-7 md:col-span-5 md:p-9 lg:p-12">
                  <div>
                    {/* Project Number */}
                    <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-[#871304]/20 text-xs font-medium text-[#871304] md:mb-10">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Year + Category */}
                    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[#871304]/70 md:text-xs">
                      {project.year}
                      <span className="mx-2">•</span>
                      {project.category}
                    </p>

                    {/* Project Title */}
                    <h2 className="max-w-[550px] text-3xl font-medium leading-[1] tracking-[-0.04em] text-[#111] md:text-4xl lg:text-5xl xl:text-6xl">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-5 max-w-[480px] text-xs leading-5 text-[#555] md:text-sm md:leading-6 lg:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="mt-6">
                    <button
                      type="button"
                      className="
                        group
                        inline-flex items-center gap-3
                        rounded-full
                        border border-[#871304]/25
                        px-5 py-2.5
                        text-[10px] font-medium uppercase tracking-[0.08em]
                        text-[#871304]
                        transition-all duration-300
                        hover:bg-[#871304] hover:text-white
                        md:px-6 md:py-3 md:text-xs
                      "
                    >
                      View project
                      <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>

                {/* ================== RIGHT SIDE — IMAGE ================== */}

                <div className="relative hidden p-4 md:col-span-7 md:block md:p-5 lg:p-6">
                  <div className="relative h-full w-full overflow-hidden rounded-[16px] bg-[#ddd]">
                    <img
                      src={project.image}
                      alt={project.title}
                      decoding="async"
                      className="
                        absolute inset-0
                        h-full w-full
                        object-cover
                        transition-transform duration-700
                        hover:scale-[1.03]
                      "
                    />

                    {/* Image Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
