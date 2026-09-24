import React, { useRef } from "react";
import { motion } from "framer-motion";
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
// Projects Component
// ============================================================

const Projects = () => {

    // --------------------------------------------------------
    // Section reference
    // --------------------------------------------------------

    const sectionRef = useRef(null);


    // --------------------------------------------------------
    // Projects data
    // --------------------------------------------------------

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


    // ========================================================
    // GSAP STACK ANIMATION
    // ========================================================

    useGSAP(
        () => {

            const cards = gsap.utils.toArray(".project-card");

            if (!cards.length) {
                return;
            }

            const totalCards = cards.length;

            const scaleStep = 0.15 / totalCards;


            // ------------------------------------------------
            // Set initial card positions
            // ------------------------------------------------

            cards.forEach((card, index) => {

                gsap.set(card, {
                    y: -(15 * index),

                    scale: 1 - scaleStep * index,

                    zIndex: totalCards - index,

                    opacity: 1,
                });

            });


            // ------------------------------------------------
            // Create timeline
            // ------------------------------------------------

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,

                    start: "top top",

                    /*
                     * One viewport of scroll for every
                     * project transition.
                     */
                    end: `+=${window.innerHeight * (totalCards - 1)}`,

                    scrub: 1,

                    pin: true,

                    anticipatePin: 1,

                    invalidateOnRefresh: true,

                    markers: false,
                },
            });


            // ------------------------------------------------
            // Animate every card
            // ------------------------------------------------

            cards.forEach((card, index) => {

                const nextCard = cards[index + 1];


                // Last card has no next card
                if (!nextCard) {
                    return;
                }


                // All cards except current card
                const otherCards = cards.filter(
                    (_, cardIndex) => cardIndex !== index
                );


                // ------------------------------------------------
                // Current card leaves
                // ------------------------------------------------

                timeline.to(
                    card,
                    {
                        opacity: 0,

                        scale: 1.1,

                        y: 35,

                        duration: 1,

                        ease: "none",
                    },
                    "+=0.5"
                );


                // ------------------------------------------------
                // Next card becomes front
                // ------------------------------------------------

                timeline.to(
                    nextCard,
                    {
                        scale: 1,

                        y: 0,

                        zIndex: totalCards + 1,

                        duration: 1,

                        ease: "none",
                    },
                    "<"
                );


                // ------------------------------------------------
                // Other cards move forward
                // ------------------------------------------------

                timeline.to(
                    otherCards,
                    {
                        y: "+=15",

                        scale: `+=${scaleStep}`,

                        zIndex: "+=1",

                        duration: 1,

                        ease: "none",
                    },
                    "<"
                );


                // ------------------------------------------------
                // Put old card behind everything
                // ------------------------------------------------

                timeline.set(card, {
                    zIndex: 0,
                });


                // ------------------------------------------------
                // Move old card to the back
                // ------------------------------------------------

                timeline.to(card, {
                    y: -15 * (totalCards - 1),

                    scale: 0.85,

                    opacity: 1,

                    duration: 0.01,

                    ease: "none",
                });

            });


            // ------------------------------------------------
            // Refresh ScrollTrigger
            // ------------------------------------------------

            ScrollTrigger.refresh();


            // ------------------------------------------------
            // Cleanup
            // ------------------------------------------------

            return () => {
                ScrollTrigger.getAll().forEach((trigger) => {
                    trigger.kill();
                });
            };

        },
        {
            scope: sectionRef,
        }
    );


    // ========================================================
    // Framer Motion
    // ========================================================

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 25,
        },

        visible: {
            opacity: 1,
            y: 0,

            transition: {
                duration: 0.7,

                ease: "easeOut",
            },
        },
    };


    // ========================================================
    // Horizontal Line
    // ========================================================

    const HorizontalLine = () => {
        return (
            <span
                className="
                    block
                    h-[1px]
                    w-10
                    bg-[#871304]/40
                    md:w-16
                "
            />
        );
    };


    // ========================================================
    // RETURN
    // ========================================================

    return (
        <section
            ref={sectionRef}
            className="
                relative
                h-screen
                w-full
                overflow-hidden
                bg-[#020b16]
            "
        >

            <div
                className="
                    flex
                    h-full
                    w-full
                    flex-col
                    items-center
                "
            >

                {/* ====================================================
                    SECTION HEADING
                ===================================================== */}

                <motion.div
                    className="
                        flex
                        items-center
                        justify-center
                        gap-4
                        pt-8
                        md:pt-10
                    "
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                >

                    <HorizontalLine />

                    <h1
                        className="
                            mb-2
                            text-center
                            text-sm
                            font-medium
                            uppercase
                            tracking-[0.3em]
                            text-[#871304]
                            md:text-xl
                        "
                    >
                        My Projects
                    </h1>

                    <HorizontalLine />

                </motion.div>


                {/* ====================================================
                    CARD AREA
                ===================================================== */}

                <div
                    className="
                        mt-8
                        flex
                        w-full
                        flex-1
                        items-center
                        justify-center
                        md:mt-10
                    "
                >

                    <div
                        className="
                            cards
                            relative
                            h-[460px]
                            w-[92%]
                            max-w-[1100px]
                            md:h-[500px]
                            lg:h-[540px]
                        "
                    >

                        {/* =================================================
                            PROJECT CARDS
                        ================================================== */}

                        {projects.map((project, index) => (

                            <article
                                key={project.title}
                                className="
                                    project-card
                                    absolute
                                    left-0
                                    top-0
                                    
                                    h-full
                                    w-full
                                    overflow-hidden
                                    rounded-[22px]
                                    border
                                    border-black/10
                                    bg-[#f5f3ee]
                                    shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                                "
                            >

                                <div
                                    className="
                                        grid
                                        h-full
                                        grid-cols-1
                                      md:grid-cols-12
                                    "
                                >

                                    {/* =====================================
                                        LEFT SIDE
                                    ====================================== */}

                                    <div
                                        className="
                                            flex
                                            h-full
                                            col-span-5
                                            flex-col
                                            justify-between
                                            p-7
                                            md:p-9
                                            lg:p-12
                                        "
                                    >

                                        <div>

                                            {/* --------------------------------
                                                Project Number
                                            --------------------------------- */}

                                            <div
                                                className="
                                                    mb-8
                                                    flex
                                                    h-10
                                                    w-10
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    border
                                                    border-[#871304]/20
                                                    text-xs
                                                    font-medium
                                                    text-[#871304]
                                                    md:mb-10
                                                "
                                            >
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </div>


                                            {/* --------------------------------
                                                Year + Category
                                            --------------------------------- */}

                                            <p
                                                className="
                                                    mb-3
                                                    text-[10px]
                                                    font-medium
                                                    uppercase
                                                    tracking-[0.16em]
                                                    text-[#871304]/70
                                                    md:text-xs
                                                "
                                            >

                                                {project.year}

                                                <span className="mx-2">
                                                    •
                                                </span>

                                                {project.category}

                                            </p>


                                            {/* --------------------------------
                                                Project Title
                                            --------------------------------- */}

                                            <h2
                                                className="
                                                    max-w-[550px]
                                                    text-3xl
                                                    font-medium
                                                    leading-[1]
                                                    tracking-[-0.04em]
                                                    text-[#111]
                                                    md:text-4xl
                                                    lg:text-5xl
                                                    xl:text-6xl
                                                "
                                            >
                                                {project.title}
                                            </h2>


                                            {/* --------------------------------
                                                Description
                                            --------------------------------- */}

                                            <p
                                                className="
                                                    mt-5
                                                    max-w-[480px]
                                                    text-xs
                                                    leading-5
                                                    text-[#555]
                                                    md:text-sm
                                                    md:leading-6
                                                    lg:text-base
                                                "
                                            >
                                                {project.description}
                                            </p>

                                        </div>


                                        {/* =================================
                                            CASE STUDY BUTTON
                                        ================================== */}

                                        <div className="mt-6">

                                            <button
                                                type="button"
                                                className="
                                                    group
                                                    inline-flex
                                                    items-center
                                                    gap-3
                                                    rounded-full
                                                    border
                                                    border-[#871304]/25
                                                    px-5
                                                    py-2.5
                                                    text-[10px]
                                                    font-medium
                                                    uppercase
                                                    tracking-[0.08em]
                                                    text-[#871304]
                                                    transition-all
                                                    duration-300
                                                    hover:bg-[#871304]
                                                    hover:text-white
                                                    md:px-6
                                                    md:py-3
                                                    md:text-xs
                                                "
                                            >

                                                View project

                                                <span
                                                    className="
                                                        text-base
                                                        transition-transform
                                                        duration-300
                                                        group-hover:translate-x-1
                                                    "
                                                >
                                                    →
                                                </span>

                                            </button>

                                        </div>

                                    </div>


                                    {/* =====================================
                                        RIGHT SIDE — IMAGE
                                    ====================================== */}

                                    <div
                                        className="
                                            relative
                                            hidden
                                            p-4
                                             col-span-7
                                            md:block
                                            md:p-5
                                            lg:p-6
                                            
                                        "
                                    >

                                        <div
                                            className="
                                                relative
                                                h-full
                                                w-full
                                                overflow-hidden
                                                rounded-[16px]
                                                bg-[#ddd]
                                            "
                                        >

                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="
                                                    absolute
                                                    inset-0
                                                    h-full
                                                    w-full
                                                    object-cover
                                                    transition-transform
                                                    duration-700
                                                    hover:scale-[1.03]
                                                "
                                            />

                                            {/* Image Overlay */}

                                            <div
                                                className="
                                                    pointer-events-none
                                                    absolute
                                                    inset-0
                                                    bg-gradient-to-tr
                                                    from-black/10
                                                    via-transparent
                                                    to-white/10
                                                "
                                            />

                                        </div>

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Projects;