import React, { type ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-4 active:scale-95 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 tracking-wide";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary/30",
    secondary: "bg-background text-gray-800 hover:bg-gray-200 focus:ring-gray-200",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/30"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
