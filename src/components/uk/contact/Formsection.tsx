'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import Input from '@/components/input/Input';

type FormsectionProps = {
  hideImage?: boolean;
  customLabels?: {
    name?: string;
    message?: string;
  };
};

const options = [
  { value: '', label: 'Select an option' },
  { value: 'phone', label: 'Phone Call' },
  { value: 'sms', label: 'Text Message / SMS' },
];

function Formsection({ customLabels }: FormsectionProps): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: '',
    message: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFormErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const errors: any = {};
    if (!formData.name) errors.name = 'This field is required.';
    if (!formData.email) errors.email = 'This field is required.';
    if (!formData.phone) errors.phone = 'This field is required.';
    if (!formData.contactMethod)
      errors.contactMethod = 'Please select a contact method';
    if (!formData.message) errors.message = 'This field is required.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className=" mx-auto xl:pl-46 pb-10 relative z-10 overflow-hidden min-h-screen gap-8 flex flex-col md:flex-row items-start justify-center p-4 xl:ml-12">
      <div className="absolute right-0 bottom-50 w-[300px] h-[300px] pointer-events-none">
        <Image
          src="/images/decor5.svg"
          alt="Decorative Background"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      <div className="w-full ">
        <h3 className="text-[20.5px] md:text-[22.5px] xl:text-[24px] font-serif text-[#404040]">
          Phone{' '}
          <Link href="tel:03302366999" className="hover:underline">
            0330 2366 999
          </Link>
        </h3>

        {/* Social Links */}
        <div className="flex gap-4 px-6 mt-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary transition"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.5-3.89 3.8-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12Z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary transition"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
            </svg>
          </a>
        </div>

        <div className="w-full h-[1px] bg-gray-300 my-7" />

        <h2 className="text-[20.5px] md:text-[26.5px] xl:text-[32px] font-serif text-[#404040] mb-6">
          Contact Form
        </h2>
        <p className="mb-6 text-sm xl:text-[17px] font-sans text-[#404040]">
          If you would like to speak to us about your pet’s quality of life or
          have any other questions about our service, please complete the
          contact form below and one of our vets will call you back ASAP.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              label={customLabels?.name || 'Your Name'}
              name="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              error={formErrors.name}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              error={formErrors.email}
            />
            <Input
              label="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              error={formErrors.phone}
            />
          </div>

          {/* Dropdown */}
          <div className="relative w-full">
            <label
              className={`block mb-1 font-sans text-[#404040] text-sm font-medium  lg:text-[16px] ${
                formErrors.contactMethod
                  ? 'text-[#f44336]'
                  : 'border-[#68c6a89f] hover:border-[#306060] focus:ring-[#CEE1DF]'
              }`}
            >
              Please advise your preferred method of initial contact
            </label>
            <div
              tabIndex={0}
              role="button"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpen(!open);
                }
              }}
              className={`w-full h-12 px-4 border rounded-md flex items-center justify-between cursor-pointer transition-shadow ${
                formErrors.contactMethod
                  ? 'border-[#f44336]'
                  : 'border-[#68c6a89f] hover:border-[#306060] focus:ring-[#CEE1DF]'
              }`}
            >
              <span>
                {options.find((o) => o.value === formData.contactMethod)
                  ?.label || 'Select an option'}
              </span>
              <svg
                className={`w-4 h-4 ml-2 text-[#306060] transition-transform ${
                  open ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {open && (
              <ul className="absolute w-full bg-white border rounded-md mt-1 z-10 font-sans">
                {options.map((opt) => (
                  <li
                    key={opt.value}
                    onClick={() => {
                      handleChange('contactMethod', opt.value);
                      setOpen(false);
                    }}
                    className="px-4 py-2 font-sans hover:bg-[#406060] hover:text-white cursor-pointer"
                  >
                    {opt.label}
                  </li>
                ))}
              </ul>
            )}
            {formErrors.contactMethod && (
              <p className="text-[#f44336] text-sm mt-1">
                {formErrors.contactMethod}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              className={`block mb-1 font-sans text-[#404040] text-sm font-medium  lg:text-[16px] ${
                formErrors.message ? 'text-[#f44336]' : 'text-gray-700'
              }`}
            >
              {customLabels?.message || 'Message'}
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className={`w-full h-[200px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                formErrors.message
                  ? 'border-[#f44336] focus:ring-[#f44336]'
                  : 'border-[#68c6a89f] hover:border-[#306060] focus:ring-[#CEE1DF]'
              }`}
            />
            {formErrors.message && (
              <p className="text-[#f44336] text-sm mt-1">
                {formErrors.message}
              </p>
            )}
          </div>

          {/* Submit + Loader */}
          <div className="relative flex items-center">
            <Button
              label="SUBMIT"
              className={`flex items-center cursor-pointer gap-2 text-[13px] bg-[#0e797d] text-white lg:text-[15px] font-medium px-4 py-3 lg:px-6 lg:py-3 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            />
            {isSubmitting && (
              <div className="absolute right-70 md:right-60 lg:right-88 xl:right-105">
                <svg
                  className="animate-spin h-5 w-5 text-[#0e797d]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right-side Image */}
      <div className="w-full flex px-5 mt-10 md:mt-0 mb-12 z-[99999]">
        <Image
          src="/images/dog2.jpg"
          alt="Form illustration"
          width={500}
          height={500}
          className="object-cover  max-w-full h-auto"
        />
      </div>
    </div>
  );
}

export default Formsection;
