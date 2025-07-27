"use client";

import React from "react";

interface ButtonProps {
  label: string | React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export default function Button({
  onClick,
  label,
  icon,
  className = "",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-1 text-[13.5px] font-sans rounded transition ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {typeof label === "string" ? <h4>{label}</h4> : label}
      {icon && (
        <span className="w-5 h-5 group-hover:ml-4 transition-all duration-300">
          {icon}
        </span>
      )}
    </button>
  );
}
