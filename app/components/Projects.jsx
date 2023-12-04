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
    SiRedux,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import AiVorce from "../../public/AiVorce.png";
import GlitchGuard from "../../public/GlitchGuard.png";
import GroovyGear from "../../public/GroovyGear.png";
import TeslaClone from "../../public/TeslaClone.png";
import AiFinancial from "../../public/AiFinancial.png";
import SixShooter from "../../public/SixShooter.png";
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
                    title="Tesla Clone"
                    description="
                    Teslaclone is the embodiment of my dream job in web development, 
                    crafted with a deep appreciation for Tesla's innovation. 
                    This website, designed to captivate Tesla enthusiasts, 
                    is built using a combination of Next.js, React, and Tailwind CSS. 
                    The use of Next.js ensures efficient server-side rendering, while React 
                    aids in creating a dynamic and interactive user interface. Tailwind CSS 
                    adds a layer of sleek, responsive design, mirroring Tesla's modern aesthetic. 
                    Together, these technologies make Teslaclone a testament to my dedication to developing 
                    engaging and high-quality web experiences.
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
                    Ai-Financial, my custom-built budgeting app, sprang from my desire to dive 
                    into budgeting without the hefty fees. Frustrated by other sites charging 
                    $20-$50 just for automatic bank data imports, I decided to create a solution
                     myself. Combining Next.js, React, and Tailwind CSS, I crafted a sleek and 
                     interactive front-end. The back-end is powered by Prisma, PostgreSQL, and 
                     NextAuth.js for robust data management and secure authentication. What sets 
                     Ai-Financial apart is its use of OpenAI's GPT-3 for personalized financial 
                     advice and the Plaid API for direct, secure bank connections. 
                    "
                    fullyDeveloped={false}
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
                    title="6ixShooter Basketball Training"
                    description="Designed for the basketball TikTok sensation 6ixShooter, aka Seth McCoy,
                     this project was a unique opportunity to revamp a website for a rising star in the 
                     sports entertainment world. I dove into creating 
                     a dynamic, visually appealing platform that mirrors Seth's energetic and engaging presence
                      on the court. The website, crafted with Next.js, Tailwind CSS, and React, is a testament 
                      to sleek, modern web design, focusing purely on front-end development. It's not just a 
                      website; it's a digital arena, reflecting 6ixShooter's flair and passion for basketball, 
                      while offering fans an immersive coaching course."
                    fullyDeveloped={true}
                    imageOnLeft={true}
                    image={SixShooter}
                    codeLink={"https://github.com/ZacharyCallahan/6ix-shooter"}
                    siteLink={"https://6ix-shooter.vercel.app/"}>

                    <SiNextdotjs color="#000000" size={32} />
                    <FaReact color="#61DAFB" size={32} />
                    <SiTailwindcss color="#06B6D4" size={32} />

                </ProjectCard>

                <ProjectCard
                    title="Ai-Vorce"
                    description="Ai-Vorce is an innovative full-stack therapeutic platform designed 
                    to assist couples in enhancing their communication. Leveraging the capabilities of ChatGPT,
                     we've tailored it specifically to provide therapy-centric guidance. Recognizing the escalating 
                     divorce rates in the U.S. and the limited availability of therapeutic resources,
                     Ai-Vorce offers couples the opportunity for therapeutic interaction anytime they need.
                    "
                    fullyDeveloped={false}
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
                    description="GroovyGear is a comprehensive full-stack e-commerce platform, 
                    integrating Stripe for seamless payment processing and utilizing Next.js for 
                    efficient server-side rendering. As my initial full-stack project, 
                    it has been a significant learning journey. 
                    I'm actively enhancing its functionalities and addressing any identified issues."
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
                    GlitchGuard serves as a robust full-stack bug tracking platform, 
                    enabling users to pinpoint and report website glitches. Designed to assist 
                    developers in maintaining the integrity of their projects, 
                    his tool facilitates the reporting of issues and allows developers 
                    to monitor, address, and resolve them. With Next.js underpinning its 
                    server-side rendering and NextAuth.js ensuring secure authentication,
                     GlitchGuard stands as an indispensable tool for web development.
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
                    {/* For NextAuth.js, you might want to use a different icon or library */}
                </ProjectCard>
            </div>
        </div>
    );
};

export default Projects;
