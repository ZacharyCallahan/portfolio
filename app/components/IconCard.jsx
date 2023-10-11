
const IconCard = ({ IconComponent, color, size }) => {
    return (
        <div className="p-2 transform transition-transform duration-300 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-700  rounded">
            <IconComponent className="text-gray-600 dark:text-gray-300" size={size} />
        </div>
    );

};

export default IconCard;
