import React from "react";

const ProjectMockup = ({ project }) => {
    return (
        <div
            className={`
                group
                relative
                h-full
                w-full
                flex
                items-center
                justify-center
                transition-all
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${project.rotate}
                hover:rotate-0
                hover:scale-[1.04]
            `}
        >

            {/* Glow behind mockup */}
            <div
                className="
                    absolute
                    h-[70%]
                    w-[70%]
                    rounded-full
                    bg-cyan-400/10
                    blur-[80px]
                    transition-all
                    duration-700
                    group-hover:bg-cyan-400/20
                "
            />

            {/* Browser Mockup */}
            <div
                className="
                    relative
                    z-10
                    w-[90%]
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/20
                    bg-[#111827]
                    shadow-[0_30px_80px_rgba(0,0,0,0.55)]
                    transition-all
                    duration-700
                    group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.75)]
                "
            >

                {/* Browser Header */}
                <div
                    className="
                        flex
                        h-8
                        items-center
                        gap-1.5
                        border-b
                        border-white/10
                        bg-[#171d29]
                        px-3
                    "
                >
                    {/* Traffic lights */}
                    <span className="h-2 w-2 rounded-full bg-red-400/80" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
                    <span className="h-2 w-2 rounded-full bg-green-400/80" />

                    {/* Address bar */}
                    <div
                        className="
                            ml-3
                            h-4
                            flex-1
                            rounded-md
                            bg-white/5
                        "
                    />
                </div>

                {/* Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden bg-white">

                    <img
                        src={project.image}
                        alt={project.title}
                        className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-1000
                            ease-out
                            group-hover:scale-105
                        "
                    />

                    {/* Reflection */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-br
                            from-white/10
                            via-transparent
                            to-black/20
                        "
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectMockup;