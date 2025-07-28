'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

type NavItem = {
  title: string;
  href?: string;
  subLinks?: { label: string; href: string }[];
};

const navLinksMap: Record<'uk' | 'au', NavItem[]> = {
  uk: [
    { title: 'Home', href: '/uk' },
    {
      title: 'Our Services',
      subLinks: [
        { label: 'Home Euthanasia', href: '/uk/how-it-works' },
        { label: 'Cremation / Aftercare', href: '/uk/aftercare-services' },
      ],
    },
    { title: 'About Us', href: '/uk/about-us' },
    { title: 'Pricing', href: '/uk/pricing' },
    { title: 'Locations', href: '/uk/locations' },
    { title: 'FAQs', href: '/uk/faqs' },
    { title: 'Quality of Life Scale', href: '/uk/quality-of-life' },
    { title: 'Contact', href: '/uk/contact' },
    { title: 'Call Us - 0330 2366 999', href: '/uk/call-us' },
  ],
  au: [
    { title: 'Home', href: '/au' },
    {
      title: 'Our Services',
      subLinks: [
        { label: 'Home Euthanasia', href: '/au/how-it-works' },
        { label: 'Pet Collection', href: '/au/how-it-works-pet-collection' },
        { label: 'Cremation / Aftercare', href: '/au/aftercare-services' },
      ],
    },
    { title: 'About Us', href: '/au/about-us' },
    { title: 'Pricing', href: '/au/pricing' },
    { title: 'Locations', href: '/au/locations' },
    { title: 'FAQs', href: '/au/faqs' },
    { title: 'Quality of Life Scale', href: '/au/quality-of-life' },
    { title: 'Contact', href: '/au/contact' },
    { title: 'Call Us - 1300 799 452', href: '/call-us' },
  ],
};

function Navbarhome({ country = 'uk' }: { country?: 'uk' | 'au' }) {
  const navLinks = navLinksMap[country];
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-b ${
        isScrolled
          ? 'bg-white py-0 border-gray-300'
          : 'bg-transparent bg-opacity-10 border-white'
      }`}
    >
      <div className="container-fluid px-4 md:px-8 flex flex-wrap items-center justify-between relative">
        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative h-7 w-7 mr-4 select-none rounded-lg text-center text-xs font-medium uppercase text-inherit transition-all xl:hidden"
          type="button"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`}
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
              className={`w-6 h-6 ${isScrolled ? 'text-black' : 'text-white'}`}
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
        <Link href="/" className="block cursor-pointer py-1.5">
          <div className="p-1 rounded">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={160}
              height={130}
              className={`transition-all duration-300 ease-in-out ${
                isScrolled
                  ? 'w-[68px] lg:w-[98px]'
                  : 'w-[68px] lg:w-[98px] xl:w-[160px]'
              }`}
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex flex-1 justify-center">
          <ul
            className={`flex items-center gap-10 text-sm xl:text-[18px] font-semibold font-sans transition-colors duration-300 ${
              isScrolled ? 'text-[#404040]' : 'text-[#404040]'
            }`}
          >
            {navLinks.map((item, index) => (
              <li key={index} className="relative group">
                {item.subLinks ? (
                  <>
                    <button className="relative flex items-center gap-1 group-hover:text-primary">
                      {item.title}
                      <ChevronDownIcon className="w-4 h-4 group-hover:text-primary" />
                    </button>
                    <ul className="absolute right-0 mt-2 bg-primary backdrop-blur-sm shadow-md rounded-md w-48 py-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 z-50">
                      {item.subLinks.map((sub, i) => (
                        <li key={i}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-white hover:text-white hover:bg-white/40"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={item.href!} className="hover:text-primary">
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div>
          <Link
            href="/request-appointment"
            className="px-4 py-3 lg:px-6 lg:py-4 cursor-pointer font-sans text-[11.4px] md:text-sm xl:text-[12px] font-semibold text-white bg-primary rounded-md transition"
          >
            REQUEST AN APPOINTMENT
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden fixed top-0 left-0 h-screen w-[70%] max-w-xs bg-white shadow-md z-[9998] transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-gray-700"
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
            <h3 className="text-[#404040] cursor-pointer font-medium font-sans text-[12.25px]">
              CLOSE
            </h3>{' '}
          </button>

          <p className="text-background font-sans text-sm py-5 ml-2">
            0330 2366 999
          </p>

          <ul className="flex flex-col gap-4 mt-6">
            {navLinks.map((item, index) => (
              <li key={index}>
                {item.subLinks ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="w-full text-left text-[17.5px] flex justify-between items-center"
                    >
                      {item.title}
                      <div
                        className={`ml-2 w-8 h-8 rounded-full bg-white border flex items-center justify-center transition-transform ${
                          openDropdown === index ? 'rotate-180' : ''
                        }`}
                      >
                        <ChevronDownIcon className="w-6 h-6 text-primary" />
                      </div>
                    </button>
                    {openDropdown === index && (
                      <ul className="ml-4 mt-2">
                        {item.subLinks.map((sub, i) => (
                          <li key={i}>
                            <Link
                              href={sub.href}
                              className="block py-1 text-[16px]"
                              onClick={() => setMenuOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className="block text-[17.5px]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="flex gap-4 px-2 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.5-3.89 3.8-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12Z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbarhome;
