import React from 'react';
import IconCard from './IconCard';
import {
    FaBootstrap,
    FaCss3,
    FaFigma,
    FaGit,
    FaGithub,
    FaHtml5,
    FaJava,
    FaJsSquare,
    FaNodeJs,
    FaPython,
    FaReact,
} from "react-icons/fa";
import {
    SiAmazonaws,
    SiApachemaven,
    SiDjango,
    SiExpress,
    SiFlask,
    SiGradle,
    SiJquery,
    SiMongodb,
    SiMongoose,
    SiMui,
    SiMysql,
    SiNextdotjs,
    SiOpenai,
    SiPostgresql,
    SiPostman,
    SiPrisma,
    SiRedux,
    SiSocketdotio,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
    SiVisualstudiocode,
} from "react-icons/si";

const Card = () => {
    return (
        <div className="flex xl:flex-row flex-col w-full hover:shadow-xl rounded-xl transform transition-all duration-500">
            <div className=" xl:rounded-tr-none xl:rounded-l-xl rounded-t-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md font-semibold">
                <h3 className="text-xl p-3  text-left dark:border-gray-700 font-semibold text-gray-800 dark:text-gray-400">
                    FRONTEND
                </h3>

                <div className="p-3 flex flex-wrap gap-3 items-center justify-center dark:text-gray-300">
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
                </div>
            </div>

            <div className=" bg-white dark:bg-gray-800 xl:border-y border-x border-gray-300 dark:border-gray-700 shadow-md font-semibold">
                <h3 className="text-xl p-3 border-gray-300 dark:border-gray-700 text-left font-semibold text-gray-800 dark:text-gray-400">
                    BACKEND
                </h3>

                <div className="p-3 flex flex-wrap gap-3 items-center justify-center dark:text-gray-300">
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
                </div>
            </div>

            <div className=" xl:rounded-r-xl xl:rounded-bl-none rounded-b-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md font-semibold">
                <h3 className="text-xl p-3 border-gray-300 dark:border-gray-700 text-left font-semibold text-gray-800 dark:text-gray-400">
                    OTHER
                </h3>

                <div className=" p-3 flex flex-wrap gap-3 items-center justify-center dark:text-gray-300">
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
                </div>
            </div>
        </div>
    );
}

export default Card;