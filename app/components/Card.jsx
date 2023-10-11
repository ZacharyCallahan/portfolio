import React from 'react';

const Card = ({title, children}) => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl w-full rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-indigo-700 dark:to-indigo-900 p-5">
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <div className="p-6 flex flex-wrap gap-6 items-center justify-center dark:text-gray-300">
                {children}
            </div>
        </div>
    );
}

export default Card;