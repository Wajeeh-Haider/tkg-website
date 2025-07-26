'use client';

import Button from '@/components/Button';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div>
      <div
        className="relative w-full h-screen bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-10 z-10" />
        {/* Navbar */}
        <nav
          className={`block w-full sticky top-0 z-[9999]  transition-all duration-300 ${
            isScrolled
              ? 'bg-white shadow-md border-gray-300'
              : 'bg-transparent border-b border-gray-400'
          }`}
        >
          <div className="container-fluid px-8 flex flex-wrap items-center justify-between relative">
            {/* Mobile Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative h-6 w-6 mr-4 select-none rounded-lg text-center text-xs font-medium uppercase text-inherit transition-all lg:hidden"
              type="button"
            >
              {menuOpen ? (
                // Close (X) icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 ${
                    isScrolled ? 'text-black' : 'text-white'
                  } lg:text-inherit`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 ${
                    isScrolled ? 'text-black' : 'text-white'
                  } lg:text-inherit`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            {/* Logo */}
            <Link
              href="/uk"
              className="block cursor-pointer py-1.5 text-base font-semibold"
            >
              <Image
                src="/images/The-Kindest-Goodbye-Logo.png"
                alt="Logo"
                width={160}
                height={130}
                className={`
    transition-all duration-300 ease-in-out
    ${
      isScrolled
        ? 'w-[68px] lg:w-[98px] xl:w-[98px]'
        : 'w-[68px] lg:w-[98px] xl:w-[160px]'
    }
    ${
      isScrolled
        ? 'brightness-100 grayscale-0 invert-0'
        : 'brightness-[10%] grayscale invert opacity-90'
    }
  `}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:block ml-auto">
              <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                {['Australia', 'UK'].map((item) => {
                  const path = item === 'Australia' ? '/au' : '/uk';
                  return (
                    <li
                      key={item}
                      className={`flex items-center font-sans font-semibold p-1 text-[14px] gap-x-2 transition-colors duration-300 ${
                        isScrolled ? 'text-[#404040]' : 'text-secondary'
                      }`}
                    >
                      <Link href={path} className="flex items-center">
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden fixed top-0 left-[-2] h-screen w-[70%] max-w-xs bg-white shadow-md z-[9998] transform transition-transform duration-300 ease-in-out ${
              menuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="p-4">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-700  flex items-center gap-1 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

                <h3 className="text-gray-700 font-sans text-[12.25px]">
                  CLOSE
                </h3>
              </button>
              <p className="text-primary font-sans text-sm py-5 ml-2">
                1300 799 452
              </p>
              <hr className="my-2 border-gray-300" />
            </div>

            <ul className="flex flex-col px-4 py-3 gap-8">
              {['Australia', 'UK'].map((item) => (
                <li
                  key={item}
                  className="text-gray-800 font-sans font-semibold text-base"
                >
                  <Link
                    href="#"
                    className="block w-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 px-6 mt-6">
              {/* Facebook */}
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary transition"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.5-3.89 3.8-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12Z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary transition"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Header */}
        <div className="relative z-10 flex flex-col justify-center container mx-auto text-white px-0 lg:px-4 h-screen">
<<<<<<< HEAD
          <div className="xl:pb-30">
            <Image
              src="/images/Google-Reviews.png"
              alt="Hero Image"
              width={110}
              height={55}
              className="ml-6 overflow-hidden"
            />
            <h1 className="text-[40px] font-serif lg:text-[56px] xl:text-[72px] font-bold md:w-[60%] lg:w-[66%] xl:w-[55%] leading-[1.1] mx-6 my-4 pt-2">
              Peaceful euthanasia for
              <span className="text-primary"> beloved pets </span>in the comfort
              of home
            </h1>
            <div className="flex gap-2 py-4 ml-6">
              <Link href="/uk/booking-request">
                <Button
                  label="UK"
                  icon={<ChevronRightIcon className="w-5 h-5" />}
                  className="hover:gap-2 bg-[#0e797d] text-white hover:opacity-80 px-6 py-3 lg:px-6 lg:py-3"
                />
              </Link>
              <Link href="/au">
                <Button
                  label="Australia"
                  icon={<ChevronRightIcon className="w-5 h-5" />}
                  className="hover:gap-2 bg-[#0e797d] text-white hover:opacity-80 px-6 py-3 lg:px-6 lg:py-3"
                />
              </Link>
            </div>
=======
          <Image
            src="/images/google-review.png"
            alt="Hero Image"
            width={110}
            height={55}
            className="ml-6 overflow-hidden"
          />
          <h1 className="text-[40px] font-serif lg:text-[56px] xl:text-[72px] font-semibold md:w-[60%] lg:w-[66%] xl:w-[62%] leading-[1.1] mx-6 my-4 pt-2">
            Peaceful euthanasia for
            <span className="text-primary"> beloved pets </span>in the comfort
            of home
          </h1>
          <div className="flex gap-2 py-4 ml-6">
            <Link href="/uk">
              <Button
                label="UK"
                icon={<ChevronRightIcon className="w-5 h-5" />}
                className="hover:gap-2 bg-[#0e797d] text-white hover:opacity-80 px-6 py-3 lg:px-6 lg:py-3"
              />
            </Link>
            <Link href="/au">
              <Button
                label="Australia"
                icon={<ChevronRightIcon className="w-5 h-5" />}
                className="hover:gap-2 bg-[#0e797d] text-white hover:opacity-80 px-6 py-3 lg:px-6 lg:py-3"
              />
            </Link>
>>>>>>> 96d8ceefdf4aaa4ec7c2fa4be2fd89d8e520c6a0
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
            <button
              onClick={scrollToSection}
              className="group relative w-7 h-12 lg:w-8 lg:h-14 mb-15 lg:mb-30 xl:mb-35 border-2 lg:border-4 border-white rounded-full flex justify-center items-start transition-all duration-300 hover:scale-105"
            >
              <span className="dot w-2 h-2 bg-white rounded-full mt-2 transition-all duration-500 group-hover:translate-y-6"></span>
            </button>
          </div>
        </div>
      </div>
      {/* Top Content */}
      <div className="bg-primary ">
        <div className="container mx-auto text-white px-6 py-15">
          <h2 className="text-[27.5px] md:text-[39px] font-serif xl:text-[59px] w-full md:w-[50%] font-semibold lg:ml-6 lg:py-6 leading-snug">
            In-home pet euthanasia for your beloved friend
          </h2>
          <div className="lg:mx-6 mt-16 lg:mt-10 border-t border-white/20" />
        </div>
      </div>
      {/* Footer Section */}
      <div ref={contentRef} className="bg-primary">
        <div className="container mx-auto md:text-center">
          <Image
            src="/images/The-Kindest-Goodbye-Logo.png"
            alt="Logo"
            width={135}
            height={85}
            className="brightness-[10%] grayscale invert opacity-90 ml-6 lg:ml-10 mb-16"
          />
          <div className="md:flex md:justify-between md:items-center text-white px-6 py-4 lg:ml-6">
            <h3 className="font-sans text-[13px] pb-12 md:pb-0">
              ©The Kindest Goodbye 2025
            </h3>
            <p className="font-sans text-[13px]">
              Website by &nbsp;
              <Link href="#" className="underline hover:text-white/80">
                SGD
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
