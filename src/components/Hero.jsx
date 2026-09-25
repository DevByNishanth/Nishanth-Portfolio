import React from 'react'
// import heroBg from '../assets/hero.jfif'
import { useEffect, useState } from "react";
import { Code2, ArrowUpRight, Bot } from "lucide-react";
import heroBg from '../assets/HeroBg.jpeg'
import heroPhoto from '../assets/heroPhoto.jpg'
import { motion } from "framer-motion";

const descriptionLines = [
    "BUILDING MODERN WEB APPLICATIONS",
    "WITH CLEAN CODE, CREATIVE SOLUTIONS",
    "AND A PASSION FOR TECHNOLOGY.",
    "TURNING IDEAS INTO DIGITAL PRODUCTS",
    "THAT ARE BUILT TO MAKE AN IMPACT.",
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 80,
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


const Hero = () => {
    const roles = [
        "FULL STACK DEVELOPER",
        "FRONTEND ENTHUSIAST",
        "FREELANCER",
        "PRODUCT THINKER",
    ];

    const profileCardVariants = {
        hidden: {
            opacity: 0,
            x: 100,
            y: 80,
            rotateX: 20,
            rotateY: -12,
            scale: 0.85,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 14,
                mass: 0.8,
                delay: 1.5,
            },
        },
    };

    const profileImageVariants = {
        hidden: {
            opacity: 0,
            scale: 1.3,
            x: -20,
        },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: {
                duration: 0.9,
                delay: 1.9,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const profileContentVariants = {
        hidden: {},
        visible: {
            transition: {
                delayChildren: 2,
                staggerChildren: 0.12,
            },
        },
    };

    const profileItemVariants = {
        hidden: {
            opacity: 0,
            y: 15,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];

        const typingSpeed = isDeleting ? 50 : 100;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setText(currentRole.substring(0, text.length + 1));

                if (text.length === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            } else {
                setText(currentRole.substring(0, text.length - 1));

                if (text.length === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex]);
    return (
        <>
            <div className="hero-main-container w-full lg:h-[100vh] relative">
                <div className="img-container w-full h-full">
                    <img src={heroBg} className="w-full h-full object-cover" />
                </div>
                <div className="name-container absolute top-[38%] left-14 text-[#f5e9df]">
                    <h1 className="text-2xl  ">{"</>"}</h1>
                    <h1 className="text-[88px] -mt-5 font-bold tracking-wide  ">NISHANTH</h1>

                    <div className="title-container flex items-center gap-2 -mt-2">
                        <div className="vertical-line">
                            |
                        </div>

                        <h1 className="-tracking-tighter">
                            {text}
                            <span className="animate-pulse">|</span>
                        </h1>
                    </div>

                    <div className="description-container mt-18 text-[16px] -tracking-tight text-[#f5e9dfcc]">
                        <div className="small-top-border w-12 h-[2px] mb-3 bg-[#f5e9dfb9]" />

                        {descriptionLines.map((line, index) => (
                            <motion.h1
                                key={line}
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
                                    delay: 0.5 + index * 0.8,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {line}
                            </motion.h1>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="tech-card-container absolute top-[41%] space-y-2 right-14"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Card 1 */}
                    <motion.div
                        variants={cardVariants}
                        className="w-[230px] h-[50px] border border-[#71352d] px-3 flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <div className="text-[#e56b3f] w-9 border-r">
                                <Code2 size={24} strokeWidth={1.5} />
                            </div>

                            <div className="flex flex-col leading-none gap-1">
                                <span className="text-[9px] tracking-[0.15em] text-gray-300 font-medium">
                                    MERN STACK
                                </span>

                                <span className="text-[9px] tracking-[0.15em] text-gray-300 font-medium">
                                    NEXT.JS
                                </span>
                            </div>
                        </div>

                        <ArrowUpRight
                            size={18}
                            strokeWidth={1.2}
                            className="text-gray-200"
                        />
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        variants={cardVariants}
                        className="w-[230px] h-[50px] border border-[#71352d] px-3 flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <div className="text-[#e56b3f] w-9 border-r">
                                <Bot size={24} strokeWidth={1.5} />
                            </div>

                            <div className="flex flex-col leading-none gap-1">
                                <span className="text-[9px] tracking-[0.15em] text-gray-300 font-medium">
                                    AI AGENTS
                                </span>

                                <span className="text-[9px] tracking-[0.15em] text-gray-300 font-medium">
                                    RAG SYSTEMS
                                </span>
                            </div>
                        </div>

                        <ArrowUpRight
                            size={18}
                            strokeWidth={1.2}
                            className="text-gray-200"
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="profile-card group absolute bottom-8 z-40 right-14 w-[320px] h-[90px] rounded bg-black/95 px-2 py-2 flex gap-2 overflow-hidden border border-white/10"
                    variants={profileCardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{
                        y: -8,
                        scale: 1.025,
                        rotateX: 2,
                        rotateY: -2,
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                        },
                    }}
                    whileTap={{
                        scale: 0.98,
                    }}
                    style={{
                        perspective: 1000,
                        transformStyle: "preserve-3d",
                    }}
                >
                    {/* Animated glow */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                        initial={{ x: "-100%" }}
                        whileHover={{
                            x: "100%",
                            transition: {
                                duration: 0.8,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        <div className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        className="relative w-[80px] h-full shrink-0 overflow-hidden rounded"
                        variants={profileImageVariants}
                    >
                        <motion.img
                            src={heroPhoto}
                            alt="Nishanth"
                            className="w-full h-full object-cover"
                            whileHover={{
                                scale: 1.12,
                                transition: {
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            }}
                        />

                        {/* Image overlay */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.2, duration: 0.6 }}
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className="content-container relative z-10 w-full flex flex-col justify-between"
                        variants={profileContentVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Top */}
                        <motion.div
                            className="flex items-center justify-between"
                            variants={profileItemVariants}
                        >
                            <div className="flex items-center gap-2">
                                <motion.span
                                    className="block w-1.5 h-1.5 rounded-full bg-green-400"
                                    animate={{
                                        scale: [1, 1.4, 1],
                                        opacity: [1, 0.5, 1],
                                    }}
                                    transition={{
                                        duration: 1.8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />

                                <h1 className="text-gray-400 text-xs tracking-wide">
                                    LET'S TALK
                                </h1>
                            </div>

                            <motion.span
                                className="text-[9px] text-gray-600 tracking-widest"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2.4 }}
                            >
                                AVAILABLE
                            </motion.span>
                        </motion.div>

                        {/* Bottom */}
                        <motion.div
                            className="bottom-section w-full flex items-end justify-between"
                            variants={profileItemVariants}
                        >
                            <div>
                                <motion.h1
                                    className="text-white text-sm font-medium"
                                    whileHover={{
                                        x: 3,
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    Nishanth
                                </motion.h1>

                                <h1 className="text-gray-400 text-xs mt-0.5">
                                    Full Stack Developer
                                </h1>
                            </div>

                            {/* Button */}
                            <motion.button
                                onClick={() => {
                                    document.getElementById("contact")?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }}
                                className="bg-white text-black w-[45px] h-[35px] flex items-center justify-center overflow-hidden"
                                whileHover={{
                                    scale: 1.08,
                                    rotate: -3,
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 15,
                                    },
                                }}
                                whileTap={{
                                    scale: 0.9,
                                }}
                            >
                                <motion.span
                                    className="flex items-center justify-center"
                                    whileHover={{
                                        x: 3,
                                        y: -3,
                                        transition: {
                                            duration: 0.2,
                                        },
                                    }}
                                >
                                    <ArrowUpRight size={19} strokeWidth={1.8} />
                                </motion.span>
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Moving bottom border */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-[1px] bg-orange-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                            delay: 2.1,
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    />
                </motion.div>

                <div className="absolute bottom-3 right-22 z-10 h-16 w-16 rotate-45 border border-orange-500/40" />


            </div>
        </>
    )
}

export default Hero