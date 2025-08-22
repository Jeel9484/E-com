"use client";
import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  size?: "sm" | "md" | "lg" | "xl" | "xxl" ;
  variant?: "primary" | "secondary" | "outline" | "button"| "inline";
  className?: string;
  children: React.ReactNode;
}

const sizeStyles = {
  sm: "px-4 py-2 text-base",
  md: "px-8 py-3 text-lg",
  lg: "px-12 py-4 text-xl",
  xl: "p-2",
  xxl: "px-10 py-2.5 text-xl"
};

const variantStyles = {
  primary: "bg-[#e9452e] hover:bg-[#c63d28] text-white",
  secondary: "bg-black hover:bg-[#01382e] text-white",
  outline: "bg-transparent border-2 border-[#e9452e] text-[#e9452e] hover:bg-[#e9452e] hover:text-white",
  inline:"bg-black hover:bg-[#c63d28] text-white",
  button: "rounded-full shadow bg-white cursor-pointer"
};

const Button: React.FC<ButtonProps> = ({
  href,
  size = "md",
  variant = "primary",
  className = "",
  children,
  ...rest
}) => {
  const classes = `
    
    ${sizeStyles[size]} ${variantStyles[variant]} ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
