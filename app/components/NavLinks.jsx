"use client";
import Link from "next/link";

const NavLinks = ({ label, link, elementId }) => {
    const handleScrollTo = (elementId) => (event) => {
        event.preventDefault();
        const el = document.getElementById(elementId);
        if (el) {
            const rect = el.getBoundingClientRect();
            const absoluteElementTop = rect.top + window.pageYOffset;
            const offsetPosition = absoluteElementTop - 128; // Adjust for your offset
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <Link
            href={link}
            onClick={handleScrollTo(elementId)}
            className="text-lg font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 transition-colors">
            {label}
        </Link>
    );
};

export default NavLinks;
