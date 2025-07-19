'use client';

import React from 'react';

interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function Button({ label, icon, className = '' }: ButtonProps) {
  return (
    <button
      className={`flex items-center gap-1 text-[13.5px] font-sans  bg-primary text-white rounded transition ${className}`}
    >
      <h4>{label}</h4>
      {icon && (
        <span className="w-5 h-5 group-hover:ml-4 transition-all duration-300">
          {icon}
        </span>
      )}
    </button>
  );
}
