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
      className={`flex items-center gap-1 px-6 py-3 lg:px-6 lg:py-3 text-[13.5px] font-sans  bg-primary text-white rounded transition ${className}`}
    >
      <h4>{label}</h4>
      {icon && <span className="w-5 h-5">{icon}</span>}
    </button>
  );
}
