import React from "react";

const Button = ({ children, icon, iconPosition = "left", onClick, darkMode, variant = "primary" }) => {
  // Define color classes based on variant and darkMode
  const baseClasses = "inline-flex items-center text-sm px-3 py-1.5 rounded-md transition-colors duration-200 font-medium";
  
  let variantClasses = "";

  if (variant === "primary") {
    variantClasses = darkMode 
      ? "bg-gray-800 hover:bg-gray-700 text-black" 
      : "bg-black hover:bg-gray-800 text-black";
  } else if (variant === "secondary") {
    variantClasses = darkMode 
      ? "bg-black-600 hover:bg-gray-500 text-black" 
      : "bg-gray-200 hover:bg-gray-300 text-black";
  }

  return (
    <button type="button" onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
