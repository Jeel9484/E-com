"use client";
import React from "react";

type IconButtonProps = {
  "aria-label": string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

export default function IconButton({
  "aria-label": ariaLabel,
  isActive,
  onClick,
  className = "",
  children,
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-md border text-sm transition hover:bg-black hover:text-white ${
        isActive ? "bg-black text-white" : "bg-transparent"
      } ${className}`}
    >
      {children}
    </button>
  );
}
