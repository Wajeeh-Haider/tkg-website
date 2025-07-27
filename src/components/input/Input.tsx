'use client';

import React from 'react';

export interface InputFieldProps {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  name,
  placeholder = '',
  value,
  onChange,
  error,
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className={`block mb-1 font-sans text-sm font-medium lg:text-[16px] ${
          error ? 'text-[#f44336]' : 'text-[#404040]'
        }`}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full h-12 px-4 border rounded-md focus:outline-none focus:ring-2 transition-all duration-200 ${
          error
            ? 'border-[#f44336] focus:ring-[#f44336]'
            : 'border-[#68c6a89f] hover:border-[#306060] focus:ring-[#CEE1DF]'
        }`}
      />
      {error && <p className="text-[#f44336] text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
