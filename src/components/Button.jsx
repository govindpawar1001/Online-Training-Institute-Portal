const Button = ({
    children,
    variant = 'primary',
    className,
    onClick,
    type = 'button'
}) => {
    const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-green-600 text-white hover:bg-green-700",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
        white: "bg-white text-blue-600 hover:bg-gray-100"
    };

    return (
        <button
            type={type}
            className={`${baseStyles} ${variants[variant]} ${className || ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
