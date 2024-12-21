import Image from "next/image";
import AboutPFP from "../../public/AboutPFP.png";

const About = () => {
    return (
        <div id="about" className="xl:flex-nowrap xl:justify-between flex-wrap  gap-12 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-3 sm:p-6 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-500">
            <Image
                alt="Zachary"
                src={AboutPFP}
                width={300}
                height={300}
                className="rounded-md border-4 border-gradient-to-br from-blue-500 to-indigo-600 dark:border-gradient-to-br dark:from-gray-500 dark:to-gray-700"
            />
            <div className="space-y-6 ">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 hover:text-blue-600 transition-colors">
                    About Me
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                    I’m a Full Stack Web Developer skilled in Java, Python, and JavaScript,
                    driven by a passion for crafting innovative digital solutions.
                    I excel in collaborative projects and continuously stay ahead of industry trends,
                    ensuring each build meets evolving business and customer needs. Whether Front-End,
                    Back-End, or Full-Stack, I deliver high-quality, user-focused applications that
                    seamlessly blend visual appeal and robust functionality.
                </p>
            </div>
        </div>
    );
};

export default About;
