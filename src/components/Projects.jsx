import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
import { projects } from "../data/projects";
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

// ============================================================
// Projects data (outside the component so it isn't recreated)
// ============================================================



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

      let mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          let { isDesktop, isMobile } = context.conditions;

          const stackOffset = isDesktop ? 15 : 10;
          const scaleStep = isDesktop ? 0.03 : 0.02;
          const visibleDepth = isDesktop ? 4 : 3;

          cards.forEach((card, i) => {
            gsap.set(card, { zIndex: total - i, force3D: true });
          });

          const render = (progress) => {
            cards.forEach((card, i) => {
              const offset = i - progress;

              if (offset <= -1) {
                gsap.set(card, { autoAlpha: 0 });
                return;
              }

              if (offset < 0) {
                const t = -offset;
                gsap.set(card, {
                  autoAlpha: 1,
                  yPercent: (isDesktop ? 130 : 110) * t * t,
                  scale: 1 + (isDesktop ? 0.03 : 0.02) * t,
                });
                return;
              }

              if (offset > visibleDepth) {
                gsap.set(card, { autoAlpha: 0 });
                return;
              }

              gsap.set(card, {
                autoAlpha: 1,
                yPercent: 0,
                y: -stackOffset * offset,
                scale: 1 - scaleStep * offset,
              });
            });
          };

          const withHold = (p) => {
            const i = Math.floor(p);
            const f = p - i;
            const hold = 0.31;

            if (f < hold) return i;

            const t = (f - hold) / (1 - hold);
            const eased = t * t * (3 - 2 * t);
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
              end: () =>
                `+=${window.innerHeight * (isDesktop ? total - 1 : (total - 1) * 0.8)}`,
              scrub: isDesktop ? 0.6 : 0.8,
              pin: true,
              pinSpacing: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
        },
      );

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);

      return () => {
        window.removeEventListener("load", refresh);
      };
    },
    { scope: sectionRef },
  );

  // ========================================================
  // RETURN
  // ========================================================

  const navigate = useNavigate();

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#020b16]"
    >
      <div className="flex h-full w-full items-center justify-center  ">
        <div className="cards relative h-[520px] w-[92%] max-w-[1100px] md:h-[500px] lg:h-[590px]">
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
              <div className="flex h-full flex-col md:grid md:grid-cols-12">
                {/* ===================== CONTENT SIDE ===================== */}

                <div className="flex flex-col flex-1 justify-between p-5 sm:p-7 md:col-span-5 md:p-9 lg:p-12 overflow-y-auto custom-scrollbar md:overflow-visible">
                  <div>
                    {/* Project Number */}
                    <div className="mb-4 md:mb-10 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full border border-[#871304]/20 text-[10px] md:text-xs font-medium text-[#871304]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Year + Category */}
                    <p className="mb-2 md:mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[#871304]/70 md:text-xs">
                      {project.year}
                      <span className="mx-2">•</span>
                      {project.category}
                    </p>

                    {/* Project Title */}
                    <h2 className="mb-3 md:mb-0 max-w-[550px] text-2xl sm:text-3xl font-medium leading-[1] tracking-[-0.04em] text-[#111] md:text-4xl lg:text-5xl xl:text-6xl">
                      {project.title}
                    </h2>

                    {/* Mobile Image */}
                    <div className="relative block md:hidden w-full h-[160px] sm:h-[200px] mb-4 rounded-[12px] overflow-hidden bg-[#ddd]">
                      <img
                        src={project.image}
                        alt={project.title}
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />
                    </div>

                    {/* Description */}
                    <p className="mt-2 md:mt-5 max-w-[480px] text-xs leading-5 text-[#555] sm:text-sm md:leading-6 lg:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="mt-4 md:mt-6 mb-2 md:mb-0 flex items-center gap-3">
                    {/* View Project Button */}
                    <motion.button
                      onClick={() =>
                        window.open(
                          project.link,
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                      type="button"
                      className="group inline-flex items-center gap-3 rounded-full border border-[#871304]/25 px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.08em] text-[#871304] transition-all duration-300 hover:bg-[#871304] hover:text-white md:px-6 md:py-3 md:text-xs"
                      whileHover={{
                        scale: 1.05,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        },
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                    >
                      View project
                      <motion.span
                        className="text-base"
                        whileHover={{
                          x: 4,
                          transition: {
                            duration: 0.2,
                            ease: "easeOut",
                          },
                        }}
                      >
                        →
                      </motion.span>
                    </motion.button>

                    {/* View Details Button */}
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        },
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                    >
                      <Link
                        to={`/project/${project.id}`}
                        className="group inline-flex items-center gap-3 rounded-full border border-[#871304]/25 px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.08em] text-[#871304] transition-all duration-300 hover:bg-[#871304] hover:text-white md:px-6 md:py-3 md:text-xs"
                      >
                        View details
                        <motion.span
                          className="text-base"
                          whileHover={{
                            x: 4,
                            transition: {
                              duration: 0.2,
                              ease: "easeOut",
                            },
                          }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </motion.div>
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
