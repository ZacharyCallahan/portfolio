import Link from "next/link";
import NavLinks from "./NavLinks";

const Navbar = () => {

    return (
        <nav className=" fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 shadow-md rounded-b-lg p-4">
            <div className="container md:px-32 px-0 m-auto justify-center  flex md:justify-between items-center h-12">
                <span
                    className="hidden md:block text-2xl font-extrabold tracking-tighter text-gray-900 dark:text-gray-100 hover:text-blue-600 transition-colors">
                    Zachary.dev
                </span>
                <ul className="flex items-center gap-12">
                    <li>
                        <NavLinks label={"Home"} link={"#"} elementId={"home"} />
                    </li>
                    <li>
                        <NavLinks
                            label={"About"}
                            link={"#"}
                            elementId={"about"}
                        />
                    </li>
                    <li>
                        <NavLinks
                            label={"Projects"}
                            link={"#"}
                            elementId={"projects"}
                        />
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
