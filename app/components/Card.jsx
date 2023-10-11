import React from 'react';

const Card = ({title, children}) => {
    return (
        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md hover:shadow-xl w-full rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
                <h3 className="text-xl p-6 border-b-2 border-gray-300 dark:border-gray-700 text-center font-bold text-white">{title}</h3>
            
            <div className="p-6 flex flex-wrap gap-6 items-center justify-center dark:text-gray-300">
                {children}
            </div>
        </div>
    );
}

export default Card;