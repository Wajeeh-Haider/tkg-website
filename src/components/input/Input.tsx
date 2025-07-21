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
    <div className="flex flex-col w-full">
      <div className="flex items-center">
        <label
          htmlFor={name}
          className="text-sm font-sans text-[#404040] pb-0.5"
        >
          {label}
        </label>
        <div className="text-red-500 ml-1">*</div>
      </div>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`px-4 py-3 rounded-lg border text-sm font-sans text-[#404040] outline-none transition-all duration-150
          ${
            error
              ? 'border-error500 focus:border-error500 placeholder:text-error500 text-sm font-normal'
              : 'border-grey300 focus:border-primary placeholder:text-[#060606]'
          }`}
      />
      {error && (
        <small className="text-error500 pt-0.5 text-sm font-normal">
          {error}
        </small>
      )}
    </div>
  );
};

export default Input;
