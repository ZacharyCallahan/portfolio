import React from "react";

const Footer = () => {
    return (
        <div className="bg-white dark:bg-gray-800 p-10 mt-32 rounded-t-xl shadow-inner">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Get in Touch
            </h2>

            <form className="space-y-6">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-gray-700 dark:text-gray-300">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-3 mt-2 rounded-md border dark:border-gray-600 focus:outline-none focus:border-blue-500 dark:bg-gray-700"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-gray-700 dark:text-gray-300">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-3 mt-2 rounded-md border dark:border-gray-600 focus:outline-none focus:border-blue-500 dark:bg-gray-700"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="block text-gray-700 dark:text-gray-300">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        className="w-full p-3 mt-2 rounded-md border dark:border-gray-600 focus:outline-none focus:border-blue-500 dark:bg-gray-700"
                        required></textarea>
                </div>
                <button
                    
                    type="submit"
                    className="w-full py-2 mt-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:bg-blue-700 transition duration-200">
                    Submit
                </button>
            </form>

            <div className="mt-10 text-center text-gray-600 dark:text-gray-400">
                <p>
                    &copy; {new Date().getFullYear()} Zachary.dev. All rights
                    reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
