
const IconCard = ({ IconComponent, color, size }) => {
    return (
        <div className="p-2 transform transition-transform duration-300 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
            <IconComponent color={color} size={size} />
        </div>
    );

};

export default IconCard;
