import React from 'react'
// import heroBg from '../assets/hero.jfif'
import { Code2, ArrowUpRight, Bot } from "lucide-react";
import heroBg from '../assets/HeroBg.jpeg'
const Hero = () => {
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
                        <h1 className="tracking-widest">FULL STACK DEVELOPER</h1>
                    </div>

                    <div className="description-container mt-18 text-[13px] -tracking-tight text-[#f5e9dfcc]">
                        <div className="small-top-border w-12 h-[2px] mb-3 bg-[#f5e9dfb9]"></div>
                        <h1>BUILDING MODERN WEB APPLICATIONS</h1>
                        <h1>WITH CLEAN CODE, CREATIVE SOLUTIONS</h1>
                        <h1>AND A PASSION FOR TECHNOLODY.</h1>
                    </div>
                </div>

                <div className="tech-card-container absolute top-[41%] space-y-2  right-14">
                    <div className="w-[230px] h-[50px] border border-[#71352d]  px-3 flex items-center justify-between">

                        {/* Left side */}
                        <div className="flex items-center gap-3">
                            {/* Icon box */}
                            <div className="text-[#e56b3f] w-9 border-r">
                                <Code2 size={24} strokeWidth={1.5} />
                            </div>

                            {/* Text */}
                            <div className="flex flex-col leading-none gap-1">
                                <span className="text-[9px] tracking-[0.15em] text-gray-300 font-medium">
                                    MERN STACK
                                </span>

                                <span className="text-[9px] tracking-[0.15em] text-gray-300 font-medium">
                                    NEXT.JS
                                </span>
                            </div>
                        </div>

                        {/* Arrow */}
                        <ArrowUpRight
                            size={18}
                            strokeWidth={1.2}
                            className="text-gray-200"
                        />
                    </div>
                    <div className="w-[230px] h-[50px] border border-[#71352d]  px-3 flex items-center justify-between">

                        {/* Left side */}
                        <div className="flex items-center gap-3">
                            {/* Icon box */}
                            <div className="text-[#e56b3f] w-9 border-r">
                                <Bot size={24} strokeWidth={1.5} />
                            </div>

                            {/* Text */}
                            <div className="flex flex-col leading-none gap-1">
                                <span className="text-[9px] tracking-[0.15em] text-gray-300 font-medium">
                                    AI AGENTS
                                </span>

                                <span className="text-[9px] tracking-[0.15em] text-gray-300 font-medium">
                                    RAG SYSTEMS
                                </span>
                            </div>
                        </div>

                        {/* Arrow */}
                        <ArrowUpRight
                            size={18}
                            strokeWidth={1.2}
                            className="text-gray-200"
                        />
                    </div>
                </div>

                <div className="absolute bottom-3 right-22 z-10 h-16 w-16 rotate-45 border border-orange-500/40" />


            </div>
        </>
    )
}

export default Hero