'use client'
import React, { useState } from "react";
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

const IconCard = ({ iconName, color, size, label }) => {
    const [isHovered, setIsHovered] = useState(false);

    const renderIcon = () => {
        const icons = {
            FaReact: (
                <FaReact
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            FaJsSquare: (
                <FaJsSquare
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiTypescript: (
                <SiTypescript
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            FaHtml5: (
                <FaHtml5
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            FaCss3: (
                <FaCss3
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiJquery: (
                <SiJquery
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiNextdotjs: (
                <SiNextdotjs
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiTailwindcss: (
                <SiTailwindcss
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiRedux: (
                <SiRedux
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiMui: (
                <SiMui
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            FaBootstrap: (
                <FaBootstrap
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            FaNodeJs: (
                <FaNodeJs
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            FaPython: (
                <FaPython
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            FaJava: (
                <FaJava
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiExpress: (
                <SiExpress
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiFlask: (
                <SiFlask
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiDjango: (
                <SiDjango
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiMongoose: (
                <SiMongoose
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiPrisma: (
                <SiPrisma
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiSocketdotio: (
                <SiSocketdotio
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiMongodb: (
                <SiMongodb
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiPostgresql: (
                <SiPostgresql
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiMysql: (
                <SiMysql
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            FaGit: (
                <FaGit
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            FaGithub: (
                <FaGithub
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            FaFigma: (
                <FaFigma
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiVisualstudiocode: (
                <SiVisualstudiocode
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiPostman: (
                <SiPostman
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiOpenai: (
                <SiOpenai
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiAmazonaws: (
                <SiAmazonaws
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiVercel: (
                <SiVercel
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiApachemaven: (
                <SiApachemaven
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
            SiGradle: (
                <SiGradle
                    className="text-gray-600 dark:text-gray-300"
                    size={size}
                />
            ),
        };

        return icons[iconName] || null;
    };

    return (
        <div
            className="p-2 transform transition-transform duration-300 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-700 rounded relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {renderIcon()}
            {isHovered && (
                <p className="text-center absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    {label}
                </p>
            )}
        </div>
    );
};

export default IconCard;
