import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectCard = ({
    title,
    description,
    image,
    imageOnLeft,
    codeLink,
    siteLink,
    children,
}) => {
    return (
        <div
            className={`${
                imageOnLeft ? "flex-row" : "flex-row-reverse"
            } flex gap-6 flex-wrap justify-center  xl:flex-nowrap xl:justify-between items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-3 sm:p-6 rounded-md shadow-md hover:shadow-xl transform transition-all duration-500`}>
            <Image
                alt="project"
                src={image}
                width={480}
                height={720}
                className="rounded-md shadow-sm"
            />

            <div className="flex flex-col justify-between text-center items-center space-y-4">
                <div>
                    <h5 className="text-3xl font-bold text-gray-800 dark:text-white hover:text-blue-600 transition-colors duration-300 mb-6">
                        {title}
                    </h5>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {description}
                    </p>
                </div>
                <div className="text-4xl flex xl:flex-nowrap xl:justify-between flex-wrap justify-center gap-6 text-gray-800 dark:text-gray-400">
                    {children}
                </div>
                <div className="flex gap-9 pt-6">
                    <Link
                        target="_blank"
                        href={`${codeLink}`}
                        className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-500">
                        Code{" "}
                        <FaGithub
                            size={32}
                            className="text-black dark:text-gray-300"
                        />
                    </Link>
                    {siteLink != false ? (
                        <Link
                            target="_blank"
                            href={`${siteLink}`}
                            className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-500">
                            Live Demo{" "}
                            <HiOutlineExternalLink
                                size={32}
                                className="text-black dark:text-gray-300"
                            />
                        </Link>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
