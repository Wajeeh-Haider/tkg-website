'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const navLinks = [
  { title: 'Home', href: '/' },
  {
    title: 'Our Services',
    subLinks: [
      { label: 'Home Euthanasia', href: '/au/how-it-works' },
      { label: 'Pet Collection', href: '/au/how-it-works' },
      { label: 'Cremation / Aftercare', href: '/au/aftercare-services' },
    ],
  },
  { title: 'About Us', href: '/about-us' },
  { title: 'Pricing', href: '/pricing' },
  { title: 'Locations', href: '/locations' },
  { title: 'FAQs', href: '/faqs' },
  { title: 'Quality of Life Scale', href: '/quality-of-life' },
  { title: 'Contact', href: '/contact' },
  { title: 'Call Us - 1300 799 452', href: '/call-us' },
];

function Navbarhome({ country = 'au' }: { country?: 'uk' | 'au' }) {
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
        {/* Hamburger Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative h-6 w-6 mr-4 xl:hidden"
          type="button"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#404040]"
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
              className="w-6 h-6 text-[#404040]"
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

        {/* Logo with Scroll-Based Image Switch */}
        <Link href="/" className="block cursor-pointer py-1.5">
          <div className="p-1 rounded">
            <Image
              src={isScrolled ? '/images/logo.png' : '/images/logo.png'}
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
            className={`flex items-center gap-6 text-sm font-semibold font-sans transition-colors duration-300 ${
              isScrolled ? 'text-[#404040]' : 'text-[#404040]'
            }`}
          >
            {navLinks.map((item, index) => (
              <li key={index} className="relative group">
                {item.subLinks ? (
                  <>
                    <button
                      className={`relative flex items-center gap-1 transition-all duration-300 ${
                        isScrolled ? 'text-[#404040]' : 'text-[#404040]'
                      } group-hover:text-primary cursor-pointer 
              after:content-[''] after:absolute after:left-0 after:bottom-[-63px] 
              after:h-[2px] after:w-full after:bg-primary 
              after:scale-x-0 group-hover:after:scale-x-100 
              after:origin-left after:transition-transform after:duration-300`}
                    >
                      {item.title}
                      <ChevronDownIcon
                        className={`w-4 h-4 transition-colors duration-300 ${
                          isScrolled ? 'text-[#404040]' : 'text-[#404040]'
                        } group-hover:text-primary`}
                      />
                    </button>
                    <ul className="absolute right-0 mt-2 bg-primary shadow-md rounded-md w-48 py-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 z-50">
                      {item.subLinks.map((sub, i) => (
                        <li key={i}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-background hover:text-foreground"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={`/${country}${item.href}` || '#'}
                    className={`relative block transition-all duration-300 ${
                      isScrolled
                        ? 'text-[#404040] after:bottom-[-37px]'
                        : 'text-[#404040] after:bottom-[-62px]'
                    } hover:text-primary 
            after:content-[''] after:absolute after:left-0  
            after:h-[2px] after:w-full after:bg-primary 
            after:scale-x-0 hover:after:scale-x-100 
            after:origin-left after:transition-transform after:duration-300`}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Appointment Button */}
        <div className="">
          <Link
            href="/request-appointment"
            className="px-4 py-3 lg:px-6 lg:py-4 text-[10px] md:text-sm xl:text-[12px] font-semibold text-white bg-primary rounded-md transition"
          >
            REQUEST AN APPOINTMENT
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbarhome;
