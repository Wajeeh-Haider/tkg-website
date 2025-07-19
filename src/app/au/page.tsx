"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GoogleReviews from "@/components/au/GoogleReview";
import PetAtHome from "@/components/au/PetAtHome";
import EuthanasiaServices from "@/components/au/EuthanasiaServices";
import HowItWorks from "@/components/au/HowItWork";
import FaqSection from "@/components/au/FaqSection";
import Blogs from "@/components/au/Blogs";
// import Footer from "@/components/Footer";

const Page = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent hydration mismatch

  return (
    <div>
      {/* Background and main content */}
      <div
        className="bg-[url('/images/background.jpg')] bg-cover bg-center h-screen text-white"
      >
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-start space-y-6">
          {/* Google Review Image */}
          <Image
            src="/images/google-review.png"
            alt="Google Review"
            width={110}
            height={40}
            priority
          />

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl font-serif">
            Peaceful euthanasia for <br />
            <span className="text-primary">beloved pets</span> in the <br />
            comfort of home
          </h1>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <Link href="/book-home-euthanasia">
              <button className="bg-primary text-white px-6 py-3 rounded font-semibold transition duration-300 hover:bg-teal-600 cursor-pointer">
                BOOK A HOME EUTHANASIA
              </button>
            </Link>
            <Link href="/book-pet-collection">
              <button className="text-white font-semibold px-6 py-3 rounded hover:px-7 transition-all duration-300 cursor-pointer flex items-center group">
                BOOK A PET COLLECTION{" "}
                <span className="ml-2 group-hover:ml-4 transition-all duration-300">
                  &gt;
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Google Reviews Section */}
      <GoogleReviews />
      <PetAtHome />
      <EuthanasiaServices/>
      <HowItWorks />
      <FaqSection />
      <Blogs />

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Page;