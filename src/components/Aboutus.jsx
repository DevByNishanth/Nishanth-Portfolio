import {
    Globe2,
    ShoppingBag,
    CloudCog,
    Blocks,
    PanelTop,
    RefreshCw,
} from "lucide-react";
import { motion } from "framer-motion";
import aboutImg from '../assets/aboutBg.png'
import HorizontalLine from './HorizontalLine'


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

const serviceContainer = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.12,
        },
    },
};

const serviceCard = {
    hidden: {
        opacity: 0,
        y: 25,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

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

const Aboutus = () => {

    const cardData = [
        {
            title: "Business Websites",
            desc: "Professional websites for your business.",
            icon: Globe2,
        },
        {
            title: "SaaS Products",
            desc: "Scalable software products built for growth.",
            icon: CloudCog,
        },
        {
            title: "Custom Software",
            desc: "Software tailored to your unique workflows.",
            icon: Blocks,
        },
        {
            title: "E-Commerce Stores",
            desc: "Online stores designed to sell effectively.",
            icon: ShoppingBag,
        },
        {
            title: "Landing Pages",
            desc: "High-converting pages for your campaigns.",
            icon: PanelTop,
        },
        {
            title: "Website Redesign",
            desc: "Modern websites with improved user experience.",
            icon: RefreshCw,
        },
    ];

    return (
        <>
            <motion.div
                className="main-container mt-3 grid grid-cols-12 gap-4 px-14"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
            >
                {/* LEFT SECTION */}
                <motion.div
                    className="first-container col-span-7 flex flex-col justify-center"
                    variants={aboutContainer}
                >
                    {/* Section heading */}
                    <motion.div
                        className="heading flex items-center gap-2"
                        variants={fadeUp}
                    >
                        <HorizontalLine />

                        <h1 className="font-medium mb-2 text-xl text-[#871304]">
                            About Me
                        </h1>
                    </motion.div>

                    {/* Main content */}
                    <motion.div
                        className="content text-3xl text-[#101820]"
                        variants={aboutContainer}
                    >
                        <motion.h1
                            className="font-semibold -tracking-tight uppercase"
                            variants={fadeUp}
                        >
                            I'm Nishanth,{" "}
                            <span className="text-[#871304]">
                                Full stack developer
                            </span>
                        </motion.h1>

                        <motion.h1
                            className="font-semibold -tracking-tight"
                            variants={fadeUp}
                        >
                            I BUILD DIGITAL EXPERIENCES THAT MATTER
                        </motion.h1>

                        <motion.p
                            className="text-sm mt-4"
                            variants={fadeUp}
                        >
                            I enjoy turning ideas into clean, responsive, and scalable
                            web applications. I focus on writing maintainable code and
                            creating experiences that are simple, intuitive, and built
                            to perform. I’m passionate about transforming business ideas
                            into reliable digital products that deliver real value.
                        </motion.p>
                    </motion.div>

                    {/* SERVICE CARDS */}
                    <motion.div
                        className="tab-container mt-3 flex flex-wrap gap-2"
                        variants={serviceContainer}
                    >
                        {cardData.map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    variants={serviceCard}
                                    whileHover={{
                                        y: -4,
                                        scale: 1.03,
                                        transition: {
                                            duration: 0.2,
                                        },
                                    }}
                                    className="relative w-fit overflow-hidden rounded-lg p-[2px] group"
                                >
                                    {/* Animated border */}
                                    <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] bg-[conic-gradient(from_90deg_at_50%_50%,#e03e0e_0%,transparent_8%,transparent_100%)]" />

                                    {/* Card */}
                                    <div className="relative flex items-center gap-2 rounded-lg bg-white/50 px-2 py-2 backdrop-blur-xl">
                                        <div className="icon-container flex items-center justify-center rounded-md">
                                            <Icon
                                                weight="fill"
                                                size={16}
                                                className="text-[#e03e0e]"
                                            />
                                        </div>

                                        <div className="content">
                                            <p className="font-medium text-sm">
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* RIGHT SECTION */}
                <motion.div
                    className="second-container col-span-5"
                    variants={imageAnimation}
                >
                    <motion.img
                        src={aboutImg}
                        alt="aboutUs"
                        className="w-full h-[450px] object-cover"
                        initial={{ scale: 1.08 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    />
                </motion.div>
            </motion.div>
        </>
    )
}

export default Aboutus