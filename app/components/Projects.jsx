import Image from "next/image";
import {
    FaJsSquare,
    FaNodeJs,
    FaPython,
    FaReact,
} from "react-icons/fa";
import {
    SiFlask,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiPostgresql,
    SiPrisma,
    SiRailway,
    SiRedux,
    SiStripe,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si";
import AiVorce from "../../public/AiVorce.png";
import GlitchGuard from "../../public/GlitchGuard.png";
import GroovyGear from "../../public/GroovyGear.png";
import TeslaClone from "../../public/TeslaClone.png";
import AiFinancial from "../../public/AiFinancial.png";
import SixShooter from "../../public/SixShooter.jpeg";
import NextAuth from "../../public/NextAuth.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div id="projects">
            <div className="pb-12 w-fit">
                <h4 className="text-4xl font-bold text-gray-900  dark:text-gray-100 mb-4 hover:text-blue-600 transition-colors duration-300">
                    Projects
                </h4>
                <p className="text-xl font-light leading-relaxed text-gray-800 dark:text-gray-400">
                    Crafted with passion, executed with precision.
                </p>
            </div>

            <div className=" flex flex-col  gap-16">
                <ProjectCard
                    title="6ixShooter Basketball Training"
                    description="I collaborated with TikTok basketball sensation 6ixShooter (Seth McCoy) 
                    to revamp his website, capturing his high-energy court presence in a sleek digital 
                    experience. Using Next.js, React, Tailwind CSS, Prisma, PostgreSQL, NextAuth.js, Stripe, 
                    Vercel, and Railway, I built a modern “digital arena” that immerses fans in Seth’s flair 
                    for basketball, while providing an engaging online coaching course."
                    fullyDeveloped={true}
                    imageOnLeft={false}
                    image={SixShooter}
                    codeLink={"https://github.com/6ixShooterLLC/6ix-shooter"}
                    siteLink={"https://www.6ixshooter.net/"}>
                    <SiNextdotjs color="#000000" size={32} />
                    <FaReact color="#61DAFB" size={32} />
                    <SiTailwindcss color="#06B6D4" size={32} />
                    <FaJsSquare color="#F7DF1E" size={32} />
                    <SiPrisma color="#2D3748" size={32} />
                    <SiPostgresql color="#336791" size={32} />
                    <SiTailwindcss color="#06B6D4" size={32} />
                    <Image alt="auth" src={NextAuth} width={32} height={32} />
                    <SiStripe color="#008CDD" size={32} />
                    <SiVercel size={32} />
                    <SiRailway size={32} />
                </ProjectCard>
                <ProjectCard
                    title="Tesla Clone"
                    description="
                    Teslaclone captures my passion for web development and Tesla’s 
                    forward-thinking ethos. Built with Next.js, React, and Tailwind 
                    CSS, it delivers efficient server-side rendering, a dynamic UI, 
                    and a sleek, responsive design that echoes Tesla’s modern style—showcasing 
                    my dedication to creating engaging, high-quality web experiences.
                    "
                    fullyDeveloped={true}
                    imageOnLeft={true}
                    image={TeslaClone}
                    codeLink={"https://github.com/ZacharyCallahan/tesla-clone"}
                    siteLink={"https://tesla-clone-dev.vercel.app"}>
                    <SiNextdotjs color="#000000" size={32} />
                    <FaReact color="#61DAFB" size={32} />
                    <SiTailwindcss color="#06B6D4" size={32} />
                </ProjectCard>
                <ProjectCard
                    title="Ai-Financial"
                    description="
                    Ai-Financial was born from my frustration with pricey budgeting tools. 
                    Determined to skip hefty fees, I built a solution using Next.js, React,
                     Tailwind CSS, Prisma, PostgreSQL, and NextAuth.js, ensuring a sleek
                      front-end and robust, secure back-end. GPT-3 offers personalized
                       financial advice, while the Plaid API directly and securely connects to user bank data.
                    "
                    fullyDeveloped={true}
                    imageOnLeft={false}
                    image={AiFinancial}
                    codeLink={"https://github.com/ZacharyCallahan/finance-tracker"}
                    siteLink={"https://aifinancial.vercel.app/"}>
                    <FaJsSquare color="#F7DF1E" size={32} />
                    <SiNextdotjs color="#000000" size={32} />
                    <FaReact color="#61DAFB" size={32} />
                    <SiPrisma color="#2D3748" size={32} />
                    <SiPostgresql color="#336791" size={32} />
                    <SiTailwindcss color="#06B6D4" size={32} />
                    <Image alt="auth" src={NextAuth} width={32} height={32} />

                </ProjectCard>
                <ProjectCard
                    title="Ai-Vorce"
                    description="Ai-Vorce is a full-stack therapy platform for couples seeking 
                    better communication. Powered by ChatGPT, it provides therapy-focused 
                    insights on-demand, addressing rising divorce rates and limited therapeutic 
                    resources by offering 24/7 accessible support.
                    "
                    fullyDeveloped={true}
                    imageOnLeft={true}
                    image={AiVorce}
                    codeLink={"https://github.com/ZacharyCallahan/ai-vorce"}
                    siteLink={"https://ai-vorce.vercel.app/"}>
                    <FaJsSquare color="#F7DF1E" size={32} />
                    <SiNextdotjs color="#000000" size={32} />
                    <FaReact color="#61DAFB" size={32} />
                    <SiPrisma color="#2D3748" size={32} />
                    <SiPostgresql color="#336791" size={32} />
                    <SiTailwindcss color="#06B6D4" size={32} />
                    <Image alt="auth" src={NextAuth} width={32} height={32} />
                </ProjectCard>
                <ProjectCard
                    title="GroovyGear"
                    description="GroovyGear is a full-stack e-commerce platform that 
                    pairs Next.js with Stripe for smooth payment handling. 
                    As my first full-stack build, it has been a valuable learning 
                    experience—one I’m continually improving and refining."
                    fullyDeveloped={true}
                    imageOnLeft={false}
                    image={GroovyGear}
                    codeLink={
                        "https://github.com/ZacharyCallahan/EcommerceWebsite"
                    }
                    siteLink={"https://groovygear.vercel.app/"}>
                    <FaJsSquare color="#F7DF1E" size={32} />
                    <FaReact color="#61DAFB" size={32} />
                    <FaNodeJs color="#339933" size={32} />
                    <SiTailwindcss color="#06B6D4" size={32} />
                    <SiMongodb color="#47A248" size={32} />
                    <FaPython color="#3776AB" size={32} />
                    <SiFlask color="#000000" size={32} />
                    <SiMysql color="#4479A1" size={32} />
                </ProjectCard>
                <ProjectCard
                    title="GlitchGuard"
                    description="
                    GlitchGuard is a full-stack bug tracking platform that 
                    empowers developers to pinpoint and fix website glitches.
                     Built on Next.js for server-side rendering and NextAuth.js 
                     for secure authentication, it streamlines issue reporting 
                     and resolution—making it an essential tool for any web project.
                    "
                    imageOnLeft={true}
                    fullyDeveloped={true}
                    image={GlitchGuard}
                    codeLink={"https://github.com/ZacharyCallahan/glitchguard"}
                    siteLink={false}>
                    <SiTypescript color="#3178C6" size={32} />
                    <SiNextdotjs color="#000000" size={32} />
                    <FaReact color="#61DAFB" size={32} />
                    <SiRedux color="#764ABC" size={32} />
                    <SiPrisma color="#2D3748" size={32} />
                    <SiPostgresql color="#336791" size={32} />
                    <SiTailwindcss color="#06B6D4" size={32} />
                    <Image alt="auth" src={NextAuth} width={32} height={32} />
                </ProjectCard>
            </div>
        </div>
    );
};

export default Projects;
