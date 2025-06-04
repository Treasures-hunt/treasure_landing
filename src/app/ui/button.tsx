import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "px-4 py-2 rounded font-semibold transition-colors focus:outline-none";
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-700",
    secondary: "bg-secondary text-gray-800 hover:bg-gray-300",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
