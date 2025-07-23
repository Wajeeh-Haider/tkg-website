"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PetAtHome from "@/components/au/PetAtHome";
import Blogs from "@/components/au/Blogs";
import Faqs from "@/components/au/Faqs";
import Navbar from "@/components/Navbar";
import Googlereview from "@/components/au/GoogleReview";
import EuthanasiaServices from "@/components/au/EuthanasiaServices";
import HowItWorks from "@/components/au/HowItWork";

const Page = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent hydration mismatch

    const scrollToSection = () => {
    const section = document.getElementById('scroll-target');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar country="au"/>
      {/* Background and main content */}
      <div
        className="bg-[url('/images/background.jpg')] bg-cover bg-center h-screen text-white"
      >
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-start space-y-6 ">
          {/* Google Review Image */}
          <Image
            src="/images/google-review.png"
            alt="Google Review"
            width={110}
            height={40}
            priority
          />

          {/* Heading */}
          <h1 className="text-[40px] md:text-6xl lg:text-7xl  font-bold leading-tight max-w-4xl font-serif">
            Peaceful euthanasia for <br />
            <span className="text-primary">beloved pets</span> in the <br />
            comfort of home
          </h1>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <Link href="/book-home-euthanasia">
              <button className="text-[13.125px] lg:text-[15px] bg-primary text-white px-6 py-3 rounded font-semibold transition duration-300 hover:bg-teal-600 cursor-pointer">
                BOOK A HOME EUTHANASIA
              </button>
            </Link>
            <Link href="/book-pet-collection">
              <button className="text-[13.125px] lg:text-[15px] text-white font-semibold px-6 py-3 rounded hover:px-7 transition-all duration-300 cursor-pointer flex items-center group">
                BOOK A PET COLLECTION{" "}
                <span className="ml-2 group-hover:ml-4 transition-all duration-300">
                  &gt;
                </span>
              </button>
            </Link>
          </div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
          <button
            onClick={scrollToSection}
            className="group relative w-7 h-12 lg:w-8 lg:h-14 mb-5 lg:mb-0 border-2 lg:border-4 border-white rounded-full flex justify-center items-start transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <span className="dot w-2 h-2 bg-white rounded-full mt-2 transition-all duration-500 group-hover:translate-y-6"></span>
          </button>
        </div>
        </div>
      </div>


      <Googlereview />
      <PetAtHome />
      <EuthanasiaServices/>
      <HowItWorks/>
      <Faqs/>
      <Blogs />

    </div>
  );
};

export default Page;