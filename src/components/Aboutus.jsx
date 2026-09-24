import {
    Globe2,
    ShoppingBag,
    CloudCog,
    Blocks,
    PanelTop,
    RefreshCw,
} from "lucide-react";
import aboutImg from '../assets/aboutBg.png'
import HorizontalLine from './HorizontalLine'
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
            <div className="main-container mt-16 grid grid-cols-12 gap-4 px-14">
                <div className="first-container col-span-7  flex flex-col justify-center">
                    <div className="heading flex items-center gap-2">
                        <HorizontalLine />
                        <h1 className="font-medium mb-2 text-xl text-[#871304]">About Me</h1>
                    </div>
                    <div className="content text-3xl text-[#101820]">
                        <h1 className='font-semibold  -tracking-tight uppercase'>I'm Nishanth, <span className="text-[#871304]">Full stack developer</span></h1>
                        <h1 className="font-semibold -tracking-tight">I BUILD DIGITAL EXPERIENCES THAT MATTER</h1>

                        <p className="text-sm mt-4">I enjoy turning ideas into clean, responsive, and scalable web applications. I focus on writing maintainable code and creating experiences that are simple, intuitive, and built to perform. I work closely with clients to understand their goals, transform ideas into practical digital solutions, and deliver products that create real value. From business websites and e-commerce platforms to custom software and SaaS products, I’m passionate about building solutions that are reliable, modern, and designed to grow with your business.</p>
                    </div>

                    <div className="tab-container mt-3 flex flex-wrap gap-2">
                        {cardData.map((item) => {
                            const Icon = item.icon;
                            return <div className="card w-fit shadow flex items-center gap-2 bg-white/30 px-2 py-2 rounded-lg">
                                <div className={`icon-container flex items-center justify-center rounded-md`}>
                                    <Icon weight="fill" size={16} className="text-[#e03e0e]" />
                                </div>
                                <div className="content">
                                    <p className="font-medium text-sm">{item.title}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className="second-container col-span-5 ">
                    <img src={aboutImg} alt="aboutUs" className="w-full h-[450px] object-cover" />
                </div>

            </div>
        </>
    )
}

export default Aboutus