import Link from "next/link";

const Navbar = () => {
    return (
        <nav className=" fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 shadow-md rounded-b-lg p-4">
            <div className="container md:px-32 px-0 m-auto justify-center  flex md:justify-between items-center h-12">
                <Link
                    href={"/"}
                    className="hidden md:block text-2xl font-extrabold tracking-tighter text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Zachary.dev
                </Link>
                <ul className="flex items-center gap-12">
                    <li>
                        <Link
                            href={"/"}
                            className="text-lg font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/projects"}
                            className="text-lg font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={"/about"}
                            className="text-lg font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
