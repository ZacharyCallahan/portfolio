import {
    SiAmazonaws,
    SiApachemaven,
    SiGithub,
    SiLinkedin,
    SiMui,
    SiVisualstudiocode,
} from "react-icons/si";
import Card from "./Card";
import Image from "next/image";
import pfp from "../../public/pfp.jpeg";
import IconCard from "./IconCard";
import {
    FaReact,
    FaJsSquare,
    FaPython,
    FaJava,
    FaHtml5,
    FaCss3,
    FaGithub,
    FaGit,
    FaFigma,
    FaBootstrap,
    FaNodeJs,
} from "react-icons/fa";
import {
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiRedux,
    SiJquery,
    SiMongodb,
    SiMysql,
    SiDjango,
    SiSocketdotio,
    SiMongoose,
    SiPrisma,
    SiExpress,
    SiFlask,
    SiPostgresql,
    SiPostman,
    SiOpenai,
    SiVercel,
    SiGradle,
} from "react-icons/si";
import Link from "next/link";

const HomePage = () => {
    return (
        <div className="w-10/12 m-auto gap-56 flex flex-col h-screen justify-center ">
            <div className="bg-white dark:bg-gray-900 p-12 rounded-2xl shadow-2xl border dark:border-gray-700 transition-all transform hover:-translate-y-2 duration-300">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex-shrink-0 mb-8 md:mb-0">
                        <Image
                            alt="Stefan Topalovic"
                            src={pfp}
                            width={250}
                            height={250}
                            className="rounded-full border-4 border-blue-500 dark:border-blue-300 shadow-md"
                        />
                    </div>
                    <div className="md:ml-8 text-center md:text-left">
                        <h1 className="text-5xl font-bold tracking-tighter text-gray-900 dark:text-gray-100 mb-4 hover:text-blue-600 transition-colors duration-300">
                            Zachary Callahan
                        </h1>
                        <p className="text-3xl font-medium leading-snug text-blue-600 dark:text-blue-400 mb-6">
                            Full-Stack Developer
                        </p>
                        <div className="">
                            <p className="text-lg font-light leading-relaxed text-gray-800 dark:text-gray-400 ">
                                {'"'}If something{"'"}s important enough, you
                                should try. <br /> Even if - the probable
                                outcome is failure.{'"'}
                            </p>
                            <p className="mb-6 text-lg font-light leading-relaxed text-gray-800 dark:text-gray-400 ">
                                - Elon Musk
                            </p>
                        </div>
                        <div className="flex space-x-6 justify-start">
                            <Link
                                target="_blank"
                                href="https://www.linkedin.com/in/zachary-callahan-9a08b7254/"
                                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600 transition-colors duration-300">
                                <SiLinkedin size={32} />
                            </Link>
                            <Link
                                target="_blank"
                                href="https://github.com/ZacharyCallahan"
                                className="text-gray-800 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-500 transition-colors duration-300">
                                <SiGithub size={32} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between gap-10">
                {/* Front-end Card */}
                <Card title="Front-end">
                    <IconCard
                        IconComponent={FaReact}
                        color="#61DAFB"
                        size={32}
                    />
                    <IconCard
                        IconComponent={FaJsSquare}
                        color="#F7DF1E"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiTypescript}
                        color="#3178C6"
                        size={32}
                    />
                    <IconCard
                        IconComponent={FaHtml5}
                        color="#E34F26"
                        size={32}
                    />
                    <IconCard
                        IconComponent={FaCss3}
                        color="#1572B6"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiJquery}
                        color="#0769AD"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiNextdotjs}
                        color="#000000"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiTailwindcss}
                        color="#06B6D4"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiRedux}
                        color="#764ABC"
                        size={32}
                    />
                    <IconCard IconComponent={SiMui} color="#0081CB" size={32} />
                    <IconCard
                        IconComponent={FaBootstrap}
                        color="#7952B3"
                        size={32}
                    />
                </Card>
                <Card title="Back-end">
                    <IconCard
                        IconComponent={FaNodeJs}
                        color="#339933"
                        size={32}
                    />
                    <IconCard
                        IconComponent={FaPython}
                        color="#3776AB"
                        size={32}
                    />
                    <IconCard
                        IconComponent={FaJava}
                        color="#007396"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiExpress}
                        color="#000000"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiFlask}
                        color="#000000"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiDjango}
                        color="#092E20"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiMongoose}
                        color="#880000"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiPrisma}
                        color="#2D3748"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiSocketdotio}
                        color="#010101"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiMongodb}
                        color="#47A248"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiPostgresql}
                        color="#336791"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiMysql}
                        color="#4479A1"
                        size={32}
                    />
                </Card>

                <Card title="Other">
                    <IconCard IconComponent={FaGit} color="#F05032" size={32} />
                    <IconCard
                        IconComponent={FaGithub}
                        color="#181717"
                        size={32}
                    />
                    <IconCard
                        IconComponent={FaFigma}
                        color="#F24E1E"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiVisualstudiocode}
                        color="#007ACC"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiPostman}
                        color="#FF6C37"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiOpenai}
                        color="#2C2C32"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiAmazonaws}
                        color="#232F3E"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiVercel}
                        color="#000000"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiApachemaven}
                        color="#C71A36"
                        size={32}
                    />
                    <IconCard
                        IconComponent={SiGradle}
                        color="#02303A"
                        size={32}
                    />
                </Card>
            </div>
        </div>
    );
};

export default HomePage;
