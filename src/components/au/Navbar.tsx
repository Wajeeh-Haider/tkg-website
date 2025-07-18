"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-b ${
                    isScrolled ? 'bg-white text-black py-0 border-gray-300 ' : 'bg-transparent bg-opacity-10 text-white py-4 border-white'
                }`}
            >
                <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center">
                        <Image
                            className={`transition-all duration-300 ${
                                isScrolled ? 'brightness-100' : 'brightness-[10%] grayscale invert opacity-90'
                            }`}
                            src="/images/logo.png"
                            alt="The Kindest Goodbye Logo"
                            width={isScrolled ? 110 : 150}
                            height={isScrolled ? 40 : 60}
                            priority
                        />
                    </div>
                    <nav className="flex space-x-4 sm:space-x-10 font-sans">
                        <Link
                            href="/au"
                            className={`hover:text-primary font-medium transition-colors duration-300 relative ${
                                pathname === '/au' ? 'text-primary' : isScrolled ? 'text-black' : 'text-white'
                            }`}
                        >
                            Home
                            {pathname === '/au' && (
                                <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-white"></span>
                            )}
                        </Link>
                        <Link
                            href="/about"
                            className={`hover:text-primary font-medium transition-colors duration-300 ${
                                isScrolled ? 'text-black' : 'text-white'
                            }`}
                        >
                            Our Services
                        </Link>
                        <Link
                            href="/about"
                            className={`hover:text-primary font-medium transition-colors duration-300 ${
                                isScrolled ? 'text-black' : 'text-white'
                            }`}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/about"
                            className={`hover:text-primary font-medium transition-colors duration-300 ${
                                isScrolled ? 'text-black' : 'text-white'
                            }`}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/services"
                            className={`hover:text-primary font-medium transition-colors duration-300 ${
                                isScrolled ? 'text-black' : 'text-white'
                            }`}
                        >
                            Locations
                        </Link>
                        <Link
                            href="/locations"
                            className={`hover:text-primary font-medium transition-colors duration-300 ${
                                isScrolled ? 'text-black' : 'text-white'
                            }`}
                        >
                            FAQs
                        </Link>
                        <Link
                            href="/pricing"
                            className={`hover:text-primary font-medium transition-colors duration-300 ${
                                isScrolled ? 'text-black' : 'text-white'
                            }`}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/contact"
                            className={`hover:text-primary font-medium transition-colors duration-300 ${
                                isScrolled ? 'text-black' : 'text-white'
                            }`}
                        >
                            Quality of Life Scale
                        </Link>
                        <Link
                            href="/contact"
                            className={`hover:text-primary font-medium transition-colors duration-300 ${
                                isScrolled ? 'text-black' : 'text-white'
                            }`}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/contact"
                            className={`hover:text-primary font-medium transition-colors duration-300 ${
                                isScrolled ? 'text-black' : 'text-white'
                            }`}
                        >
                            Call Us – 1300 799 452
                        </Link>
                    </nav>
                    <button
                        className={`${
                            isScrolled ? 'bg-primary text-white' : 'bg-primary text-white'
                        } ml-8 p-4 font-medium hover:bg-teal-600 cursor-pointer transition-colors duration-300`}
                    >
                        <b>REQUEST AN APPOINTMENT</b>
                    </button>
                </div>
               
             
            </header>
        </div>
    );
};

export default Navbar;