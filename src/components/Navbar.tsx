"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const navLinks = {
  uk: [
    { title: "Home", href: "/uk" },
    {
      title: "Our Services",
      subLinks: [
        { label: "Home Euthanasia", href: "/uk/how-it-works" },
        { label: "Cremation / Aftercare", href: "/uk/aftercare-services" },
      ],
    },
    { title: "About Us", href: "/uk/about-us" },
    { title: "Pricing", href: "/uk/pricing" },
    { title: "Locations", href: "/uk/locations" },
    { title: "FAQs", href: "/uk/faqs" },
    { title: "Quality of Life Scale", href: "/uk/quality-of-life" },
    { title: "Contact", href: "/uk/contact" },
    { title: "Call Us - 0330 2366 999", href: "/uk/call-us" },
  ],
  au: [
    { title: "Home", href: "/au" },
    {
      title: "Our Services",
      subLinks: [
        { label: "Home Euthanasia", href: "/au/how-it-works" },
        { label: "Pet Collection", href: "/au/how-it-works-pet-collection" },
        { label: "Cremation / Aftercare", href: "/au/aftercare-services" },
      ],
    },
    { title: "About Us", href: "/au/about-us" },
    { title: "Pricing", href: "/au/pricing" },
    { title: "Locations", href: "/au/locations" },
    { title: "FAQs", href: "/au/faqs" },
    { title: "Quality of Life Scale", href: "/au/quality-of-life" },
    { title: "Contact", href: "/au/contact" },
    { title: "Call Us - 1300 799 452", href: "/call-us" },
  ],
};

export default function Navbar({ country = "uk" }: { country?: "au" | "uk" }) {
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const links = navLinks[country] || navLinks.uk;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-b ${
        isScrolled
          ? "bg-white text-black py-0 border-gray-300 "
          : "bg-transparent bg-opacity-10 text-white border-white"
      }`}
    >
      <div className="container-fluid px-4 md:px-8 flex flex-wrap items-center justify-between relative">
        {/* Hamburger Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative h-7 w-7 mr-4 select-none rounded-lg text-center text-xs font-medium uppercase text-inherit transition-all xl:hidden"
          type="button"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-7 h-7 ${
                isScrolled ? 'text-black' : 'text-white'
              } xl:text-inherit`}
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
                isScrolled ? "text-black" : "text-white"
              } xl:text-inherit`}
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
          href="#"
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
                  ? "w-[68px] lg:w-[98px] xl:w-[98px]"
                  : "w-[68px] lg:w-[98px] xl:w-[160px]"
              }
              ${
                isScrolled
                  ? "brightness-100 grayscale-0 invert-0"
                  : "brightness-[10%] grayscale invert opacity-90"
              }
            `}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex flex-1 justify-center">
          <ul
            className={`flex items-center gap-6 text-sm 2xl:text-base font-semibold font-sans transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {links.map((item, index) => (
              <li key={index} className="relative group">
                {item.subLinks ? (
                  <>
                    <button
                      className={`relative flex items-center gap-1 transition-all duration-300 ${
                        isScrolled ? "text-gray-800" : "text-white"
                      } group-hover:text-primary cursor-pointer 
              after:content-[''] after:absolute after:left-0 after:bottom-[-62px] 
              after:h-[2px] after:w-full after:bg-primary 
              after:scale-x-0 group-hover:after:scale-x-100 
              after:origin-left after:transition-transform after:duration-300`}
                    >
                      {item.title}
                      <ChevronDownIcon
                        className={`w-4 h-4 transition-colors duration-300 ${
                          isScrolled ? "text-gray-800" : "text-white"
                        } group-hover:text-primary `}
                      />
                    </button>
                    <ul className="absolute right-0 mt-2  bg-primary backdrop-blur-sm w-56 py-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 z-50">
                      {item.subLinks.map((sub, i) => (
                        <li key={i}>
                          <Link
                            href={sub.href}
                            className="block px-4 py-2 text-sm 2xl:text-base text-white hover:text-white hover:bg-white/40"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className={`relative block transition-all duration-300 ${
                      isScrolled
                        ? "text-gray-800 after:bottom-[-37px]"
                        : "text-white after:bottom-[-62px]"
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
            className="px-4 py-3 lg:px-6 lg:py-4 cursor-pointer font-sans text-[11.4px] md:text-sm xl:text-[12px] font-semibold text-white bg-primary rounded-md transition"
          >
            REQUEST AN APPOINTMENT
          </Link>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`xl:hidden fixed top-0 left-[-2] h-screen w-[70%] max-w-xs bg-white shadow-md z-[9998] transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
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
            </h3>
          </button>
          <div>
            <p className="text-[#404040] font-semibold font-sans text-sm py-5 ml-2">
              0330 2366 999
            </p>
            <ul className="flex flex-col gap-4 mt-6">
              {links.map((item, index) => (
                <li key={index}>
                  {item.subLinks ? (
                    <div className="group">
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="w-full text-left cursor-pointer text-[17.5px] font-sans text-[#404040] flex justify-between items-center pr-2"
                      >
                        {item.title}
                        <div
                          className={`ml-2 w-8 h-8 rounded-full bg-white border border-foreground flex items-center justify-center transition-transform duration-300 ${
                            openDropdown === index ? "rotate-180" : ""
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
                                className="block py-1 text-[16px] font-sans text-[#404040]"
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
                      href={item.href || "#"}
                      className="block text-[17.5px] font-sans text-[#404040]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}

              {/* Social Links */}
              <div className="flex gap-4 px-2 mt-6">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center cursor-pointer justify-center rounded-full bg-primary text-white hover:bg-primary transition"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.5-3.89 3.8-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12Z" />
                  </svg>
                </Link>
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
                  >
                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                  </svg>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
