import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProjectCard = ({ title, description, image, imageOnLeft, codeLink, siteLink, children }) => {
    return (
        <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-6 rounded-md shadow-md hover:shadow-xl transform transition-all duration-500">
            {imageOnLeft ? (
                <Image
                    alt="project"
                    src={image}
                    width={1080}
                    height={1920}
                    className="rounded-md shadow-sm w-2/5 h-2/5"
                />
            ) : null}
            <div className="flex flex-col justify-between text-center items-center w-6/12 space-y-4">
                <div>
                    <h5 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                        {title}
                    </h5>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {description}
                    </p>
                </div>
                <div className="text-4xl flex gap-6 text-gray-800 dark:text-gray-400">
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
            {!imageOnLeft ? (
                <Image
                    alt="project"
                    src={image}
                    width={600}
                    height={300}
                    className="rounded-md shadow-sm"
                />
            ) : null}
        </div>
    );
};

export default ProjectCard;
