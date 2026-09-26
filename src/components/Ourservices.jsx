import {
    Globe2,
    CloudCog,
    Blocks,
    ShoppingBag,
    PanelTop,
    RefreshCw,
    ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import HorizontalLine from "./HorizontalLine";

/* =========================================================
   DATA
========================================================= */

const cardData = [
    {
        title: "Business Websites",
        desc: "Fast, responsive websites built to turn visitors into paying customers.",
        icon: Globe2,
    },
    {
        title: "SaaS Products",
        desc: "End-to-end SaaS platforms engineered to scale with your growing user base.",
        icon: CloudCog,
    },
    {
        title: "Custom Software",
        desc: "Purpose-built software tailored to your exact workflows and business logic.",
        icon: Blocks,
    },
    {
        title: "E-Commerce Stores",
        desc: "Conversion-focused online stores that make selling effortless and scalable.",
        icon: ShoppingBag,
    },
    {
        title: "Landing Pages",
        desc: "High-converting pages crafted to capture attention and turn clicks into leads.",
        icon: PanelTop,
    },
    {
        title: "Website Redesign",
        desc: "Modern redesigns that elevate your brand and sharpen the user experience.",
        icon: RefreshCw,
    },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const cardReveal = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
};

const headerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const listContainer = {
    hidden: {},
    visible: {
        transition: { delayChildren: 0.35, staggerChildren: 0.1 },
    },
};

const rowEntrance = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const iconVariant = {
    rest: {
        scale: 1,
        rotate: 0,
        backgroundColor: "rgba(255,255,255,0.04)",
        borderColor: "rgba(255,255,255,0.08)",
    },
    hover: {
        scale: 1.1,
        rotate: 8,
        backgroundColor: "rgba(135,19,4,0.18)",
        borderColor: "rgba(135,19,4,0.5)",
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
};

const titleVariant = {
    rest: { color: "rgba(255,255,255,0.4)", x: 0 },
    hover: {
        color: "#ffffff",
        x: 10,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
};

const arrowVariant = {
    rest: { opacity: 0, x: -12, rotate: 0, scale: 0.7 },
    hover: {
        opacity: 1,
        x: 0,
        rotate: 45,
        scale: 1,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
};

const barVariant = {
    rest: { scaleY: 0, opacity: 0 },
    hover: {
        scaleY: 1,
        opacity: 1,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
};

const washVariant = {
    rest: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0.5 } },
};

const OurServices = () => {
    return (
        <section
            id="our-services"
            className="relative w-full bg-[#020a15] py-16 md:py-16 px-4 sm:px-6 md:px-14 overflow-hidden"
        >
            <motion.div
                className="relative mx-auto  rounded-[1.75rem] md:rounded-[2.5rem] border border-white/[0.06] bg-white/[0.015] p-6 sm:p-10 md:p-14 overflow-hidden"
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                {/* =========================================================
                    AMBIENT GLOW BLOBS
                ========================================================= */}
                <motion.div
                    className="pointer-events-none absolute -top-32 -left-24 h-[380px] w-[380px] rounded-full bg-[#871304]/25 blur-[130px]"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, 20, 0],
                        opacity: [0.6, 0.9, 0.6],
                    }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="pointer-events-none absolute -bottom-40 -right-24 h-[420px] w-[420px] rounded-full bg-[#16d7a1]/15 blur-[150px]"
                    animate={{
                        x: [0, -25, 0],
                        y: [0, -25, 0],
                        opacity: [0.5, 0.85, 0.5],
                    }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="pointer-events-none absolute top-1/3 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#1677b8]/10 blur-[130px]"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* faint grid texture */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />

                {/* =========================================================
                    HEADER
                ========================================================= */}
                <motion.div
                    className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-6"
                    variants={headerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div>
                        <motion.div
                            className="flex items-center gap-2 mb-4"
                            variants={fadeUp}
                        >
                            <HorizontalLine />
                            <h2 className="font-medium text-xl text-[#871304]">
                                Our Service
                            </h2>
                        </motion.div>

                        <motion.h1
                            className="font-semibold -tracking-tight uppercase text-3xl sm:text-4xl md:text-5xl text-white leading-[1.05]"
                            variants={fadeUp}
                        >
                            What <span className="text-[#871304]">Services</span>
                        </motion.h1>
                        <motion.h1
                            className="font-semibold -tracking-tight uppercase text-3xl sm:text-4xl md:text-5xl text-white leading-[1.05]"
                            variants={fadeUp}
                        >
                            We&apos;re Offering
                        </motion.h1>
                    </div>

                    <motion.div
                        className="flex items-center gap-6 md:max-w-sm"
                        variants={fadeUp}
                    >
                        <p className="text-sm text-white/50 leading-relaxed">
                            We build digital products that help businesses grow online —
                            from the first line of code to the final pixel, every service
                            below is designed around real business outcomes.
                        </p>

                        <motion.a
                            href="#our-services"
                            className="hidden sm:flex shrink-0 h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white"
                            whileHover={{
                                scale: 1.08,
                                rotate: 45,
                                borderColor: "rgba(224,87,74,0.6)",
                                backgroundColor: "rgba(224,87,74,0.12)",
                            }}
                            animate={{ rotate: [0, 0] }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <ArrowUpRight size={20} />
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* =========================================================
                    SERVICES LIST
                ========================================================= */}
                <motion.div
                    className="relative z-10 mt-10 md:mt-14"
                    variants={listContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {cardData.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                className="border-t border-white/[0.08] last:border-b"
                                variants={rowEntrance}
                            >
                                <motion.div
                                    className="group relative cursor-pointer py-6 md:py-8 px-2 sm:px-4 rounded-xl"
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                >
                                    {/* hover background wash */}
                                    <motion.div
                                        className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-[#871304]/10 via-[#871304]/[0.03] to-transparent"
                                        variants={washVariant}
                                    />

                                    {/* left accent bar */}
                                    <motion.span
                                        className="pointer-events-none absolute left-0 top-0 h-full w-[3px] origin-top rounded-full bg-gradient-to-b from-[#e0574a] to-transparent"
                                        variants={barVariant}
                                    />

                                    <div className="relative flex items-center justify-between gap-4 md:gap-8">
                                        <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                                            <motion.div
                                                className="flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full border"
                                                variants={iconVariant}
                                            >
                                                <Icon
                                                    size={20}
                                                    className="text-[#e0574a]"
                                                    strokeWidth={1.8}
                                                />
                                            </motion.div>

                                            <div className="min-w-0">
                                                <motion.h3
                                                    className="text-lg sm:text-2xl md:text-4xl font-semibold uppercase tracking-tight truncate"
                                                    variants={titleVariant}
                                                >
                                                    {item.title}
                                                </motion.h3>

                                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                                                    <div className="overflow-hidden">
                                                        <p className="mt-2 max-w-md text-xs sm:text-sm text-white/45 leading-relaxed">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <motion.div
                                            className="hidden sm:flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white"
                                            variants={arrowVariant}
                                        >
                                            <ArrowUpRight size={20} />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default OurServices;
