import React from "react";
import { motion } from "framer-motion";
import HorizontalLine from "./HorizontalLine";
import skilImg from '../assets/skills.png'
// import skilImg from '../assets/skills2.jfif'
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

const SkillsSection = () => {
    return (
        <div className="main-container px-14  py-12 bg-[#020b16]">

            <motion.div
                className="heading flex items-center justify-center gap-2"
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
                    Skills
                </h1>
            </motion.div>
            <motion.div
                className="content text-3xl text-[#ffffff] mt-3"
                variants={aboutContainer}
            >
                <motion.h1
                    className="font-semibold -tracking-tight uppercase"
                    variants={fadeUp}
                >
                    TECHNOLOGIES I WORK WITH{" "}

                </motion.h1>

                <motion.h1
                    className="font-semibold -tracking-tight"
                    variants={fadeUp}
                >
                    I BUILD, {" "}
                    <span className="text-[#871304]">
                        SHIP & SCALE DIGITAL PRODUCTS
                    </span>
                </motion.h1>

            </motion.div>


        </div>
    );
};

export default SkillsSection;