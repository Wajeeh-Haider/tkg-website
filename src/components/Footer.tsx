'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navigationLinks1 = [
  { label: 'How It Works', href: '/about' },
  { label: 'About Us', href: '/services' },
  { label: 'Locations', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/locations' },
  { label: 'FAQs', href: '/faqs' },
];

const navigationLinks2 = [
  { label: "Book Your Pet's Home Euthanasia", href: '/about' },
  { label: "Book Your Pet's Collection", href: '/services' },
  { label: 'Aftercare Service', href: '/about' },
  { label: 'Terms of Service', href: '/pricing' },
  { label: 'Privacy Policy', href: '/locations' },
  { label: 'Contact', href: '/faqs' },
  { label: 'Popular Searches', href: '/faqs' },
];

const au = {
  navigationLinks1,
  navigationLinks2,
};

const uk = {
  navigationLinks1: [
    { label: 'Request an appointment', href: '/request-appointment' },
    { label: 'How It Works', href: '/uk/how-it-works' },
    { label: 'About Us', href: '/uk/about-us' },
    { label: 'Locations', href: '/uk/locations' },
    { label: 'Pricing', href: '/uk/pricing' },
    { label: 'FAQs', href: '/uk/faqs' },
  ],
  navigationLinks2: [
    { label: 'Contact', href: '/uk/contact' },
    { label: 'Aftercare Services', href: '/uk/aftercare-services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Terms of Service', href: '/uk/terms-of-service' },
    { label: 'Privacy Policy', href: '/uk/privacy-policy' },
    { label: 'Popular Searches', href: '' },
  ],
};

const Footer = () => {
  const data = usePathname();
  const country = data.split('/')[1] === 'au' ? au : uk;

  return (
    <footer className="bg-primary text-[#FEFBF8] pt-8 w-full ">
      <div className="container mx-auto px-6">
        <h1 className="font-serif mb-12 text-[27.5px] md:text-[38.5px] xl:text-[57px] pr-7 py-5 md:w-[55%]">
          In-home pet euthanasia for your beloved friend
        </h1>

        <div className="w-full h-[0.5px] bg-[#ffffffa1] my-8"></div>

        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10 pt-4 lg:pt-12 xl:pt-18 lg:pb-8">
          <Image
            src="/images/The-Kindest-Goodbye-Logo.png"
            alt="Logo"
            width={135}
            height={85}
            className="brightness-[10%] w-[135px] h-[110px] grayscale invert opacity-90"
          />
          <div>
            <ul className="flex flex-col space-y-5 md:pt-3">
              {country?.navigationLinks1.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:underline text-[#fefbf8] text-sm xl:text-[16px] font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul className="flex flex-col space-y-5 pt-3">
              {country?.navigationLinks2.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:underline text-[#fefbf8] text-sm xl:text-[16px] font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-4 px-3 mt-2">
              {/* Facebook */}
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a8f94] text-[#fefbf8] hover:bg-primary transition"
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
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a8f94] text-[#fefbf8] hover:bg-primary transition"
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
            <p className="text-[#fefbf8] font-sans text-[15.5px] xl:text-[20px]">
              0330 2366 999
            </p>
          </div>
        </div>

        <div className="md:flex md:justify-between md:items-center text-white pb-4 pt-18 lg:ml-6">
          <h3 className="font-sans text-[13px] xl:text-[14px] pb-12 md:pb-0">
            ©The Kindest Goodbye 2025
          </h3>
          <p className="font-sans text-[13px] xl:text-[14px]">
            Website by &nbsp;
            <Link href="#" className="underline hover:text-white/80">
              SGD
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
