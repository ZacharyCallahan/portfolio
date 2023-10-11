import Image from "next/image";
import AboutPFP from "../../public/AboutPFP.png";

const About = () => {
    return (
        <div className="  gap-12 flex items-center justify-center bg-white dark:bg-gray-800 p-10 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-500">
            <Image
                alt="Zachary"
                src={AboutPFP}
                width={300}
                height={300}
                className="rounded-md border-4 border-gradient-to-br from-blue-500 to-indigo-600 dark:border-gradient-to-br dark:from-gray-500 dark:to-gray-700"
            />
            <div className="space-y-6 ml-10">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    About Me
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                    As a driven Full Stack Web Developer, I bring a solid
                    foundation in Java, Python, and JavaScript to the table. My
                    journey in the realm of web development is fueled by a
                    passion for creating innovative solutions. I continuously
                    seek exciting opportunities in the Full-Stack, Back-End, or
                    Front-End developer fields to apply my skills. I thrive on
                    collaborative projects, and I{"'"}m dedicated to delivering
                    high-quality results that meet the evolving needs of
                    businesses and customers alike.
                </p>
                <p className="text-lg  leading-relaxed text-gray-600 dark:text-gray-400">
                    Technology is my canvas, and I use code as my brush to craft
                    digital experiences. With a deep commitment to staying
                    current with industry trends and a knack for
                    problem-solving, I{"'"}m ready to tackle any challenge that
                    comes my way. My goal is to create user-friendly, visually
                    appealing, and robust web applications that cater to
                    evolving business and customer needs, all while ensuring a
                    seamless and engaging user experience.
                </p>
            </div>
        </div>
    );
};

export default About;
