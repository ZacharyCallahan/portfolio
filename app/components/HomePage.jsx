import Image from "next/image";
import Link from "next/link";

import pfp from "../../public/pfp.jpeg";
import Card from "./Card";
import IconCard from "./IconCard";
import { SiGithub, SiLinkedin } from "react-icons/si";

const HomePage = () => {
    return (
        <div className="gap-24 flex flex-col h-fit  justify-center ">
            <div className=" bg-white dark:bg-gray-900 p-12 rounded-2xl shadow-2xl border border-gray-300 dark:border-gray-700 transition-all transform hover:-translate-y-2 duration-300">
                <div className="xl:flex-nowrap xl:justify-between xl:flex-row flex-wrap  flex flex-col items-center justify-between">
                    <div className="flex-shrink-0  mb-8 md:mb-0">
                        <Image
                            alt="Stefan Topalovic"
                            src={pfp}
                            width={250}
                            height={250}
                            className="rounded-full border-4 xl:mb-0 mb-6 border-blue-500 dark:border-blue-300 shadow-md"
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
                                should try. Even if - the probable outcome is
                                failure.{'"'}
                            </p>
                            <p className="mb-6 text-lg font-light leading-relaxed text-gray-800 dark:text-gray-400 ">
                                - Elon Musk
                            </p>
                        </div>
                        <div className="flex space-x-6 md:justify-start justify-center">
                            <Link
                                target="_blank"
                                href="https://www.linkedin.com/in/zachary-callahan-9a08b7254/"
                                className="text-gray-800 dark:text-gray-300 hover:text-blue-800  dark:hover:text-blue-600 transition-colors duration-300">
                                <SiLinkedin size={32} />
                            </Link>
                            <Link
                                target="_blank"
                                href="https://github.com/ZacharyCallahan"
                                className="text-gray-800 dark:text-gray-300 hover:text-blue-800  dark:hover:text-blue-600 transition-colors duration-300">
                                <SiGithub size={32} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="xl:flex-nowrap xl:justify-between flex-wrap  flex justify-center gap-10">

                <Card />
                   
            </div>
        </div>
    );
};

export default HomePage;
