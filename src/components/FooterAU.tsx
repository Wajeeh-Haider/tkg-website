'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
const Footer = () => {
    return (
        <footer className="bg-primary text-white py-8 mt-15 w-full">
            <div className='container mx-auto px-15 mt-12'>
                <h1 className="font-serif mb-15" style={{ fontSize: '3.61rem' }}>
                    In-home pet euthanasia for <br /> your beloved friend
                </h1>

                <div className="w-full h-[1px] bg-neutral-100 my-4 mt-20"></div>

                <div className="flex flex-row space-y-4 mt-25 gap-55">
                    <div className="brightness-[10%] grayscale invert opacity-90 ">
                        <img src="/images/logo.png" alt="" className="h-30"/>
                    </div>

                    <div>
                        <nav className="flex flex-col space-y-2 gap-6">
                            <Link href="/about" className="hover:underline text-white font-sans">How It Works</Link>
                            <Link href="/services" className="hover:underline text-white font-sans">About Us</Link>
                            <Link href="/about" className="hover:underline text-white font-sans">Locations</Link>
                            <Link href="/pricing" className="hover:underline text-white font-sans">Pricing</Link>
                            <Link href="/locations" className="hover:underline text-white font-sans">Blog</Link>
                            <Link href="/faqs" className="hover:underline text-white font-sans">FAQs</Link>
                        </nav>
                    </div>

                    <div>
                        <nav className="flex flex-col space-y-2 gap-6">
                            <Link href="/about" className="hover:underline text-white font-sans">Book Your Pet's Home Euthanasia</Link>
                            <Link href="/services" className="hover:underline text-white font-sans">Book Your Pet's Collection</Link>
                            <Link href="/about" className="hover:underline text-white font-sans">Aftercare Service</Link>
                            <Link href="/pricing" className="hover:underline text-white font-sans">Term of Service</Link>
                            <Link href="/locations" className="hover:underline text-white font-sans">Privacy Policy</Link>
                            <Link href="/faqs" className="hover:underline text-white font-sans">Contact</Link>
                            <Link href="/faqs" className="hover:underline text-white font-sans">Popular Searches</Link>
                        </nav>
                    </div>

                    <div className="flex flex-col space-y-2 gap-6">
                        <div className="flex flex-row gap-6 ">
                            <div className='rounded-full p-2 bg-[#1a8f94] flex items-center justify-center'>
                                <FaFacebookF className="text-xl" />
                            </div>
                            <div className='rounded-full p-2 bg-[#1a8f94] flex items-center justify-center'>
                                <BiLogoInstagramAlt className="text-xl" />
                            </div>
                        </div>
                        <div>
                            <p className="hover:underline text-white font-sans text-2xl">
                                1300 799 452
                            </p>
                        </div>
                    </div>
                </div>
                <div className= "flex justify-between items-center mt-20 mb-10 mr-22 text-white font-sans">
                    <div><p>©The Kindest Goodbye 2025</p></div>
                    <div><p>Website By SGD</p></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
