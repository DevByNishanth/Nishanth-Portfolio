import React from 'react'
// import heroBg from '../assets/hero.jfif'
import { useEffect, useState } from "react";
import { Code2, ArrowUpRight, Bot } from "lucide-react";
import heroBg from '../assets/HeroBg.jpeg'
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
            <div className="hero-main-container w-full lg:h-[90vh] relative">
                <div className="img-container w-full h-full">
                    <img src={heroBg} className="w-full h-full object-cover" />
                </div>
                <div className="name-container absolute top-[38%] left-14 text-[#f5e9df]">
                    <h1 className="text-2xl  ">{"</>"}</h1>
                    <h1 className="text-[80px] -mt-5 font-bold tracking-wide  ">NISHANTH</h1>

                    <div className="title-container flex items-center gap-2 -mt-2">
                        <div className="vertical-line">
                            |
                        </div>

                        <h1 className="-tracking-tighter">
                            {text}
                            <span className="animate-pulse">|</span>
                        </h1>
                    </div>

                    <div className="description-container mt-18 text-[13px] -tracking-tight text-[#f5e9dfcc]">
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
                <div className="absolute bottom-3 right-22 z-10 h-16 w-16 rotate-45 border border-orange-500/40" />


            </div>
        </>
    )
}

export default Hero