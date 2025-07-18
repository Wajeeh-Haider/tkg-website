'use client';

import Button from '@/components/Button';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  const scrollToSection = () => {
    const section = document.getElementById('scroll-target');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className="relative z-10 flex flex-col justify-center h-screen text-white container mx-auto px-0 lg:px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    >
      {/* Google Reviews Image */}
      <Image
        src="/images/Google-Reviews.png"
        alt="Google Reviews"
        width={110}
        height={55}
        className="ml-6 mt-4"
        priority
      />

      {/* Heading */}
      <h1 className="text-[40px] lg:text-[56px] xl:text-[72px] font-extrabold font-serif leading-[1.1] mx-6 my-4 pt-2 md:w-[55%] lg:w-[66%] xl:w-[50%]">
        Peaceful euthanasia for
        <span className="text-primary"> beloved pets </span>in the comfort of
        home
      </h1>

      {/* Buttons */}
      <div className="flex gap-2 py-4 ml-6">
        <Link href="/uk">
          <Button
            label="REQUEST A HOME EUTHANASIA"
            className="hover:gap-2 hover:opacity-80"
          />
        </Link>
        <Link href="/au">
          <Button
            label="CALL US NOW"
            icon={<ChevronRightIcon className="w-5 h-5" />}
            className="hover:gap-2 hover:opacity-80"
          />
        </Link>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <button
          onClick={scrollToSection}
          className="group relative w-7 h-12 lg:w-8 lg:h-14 border-2 lg:border-4 border-white rounded-full flex justify-center items-start transition-all duration-300 hover:scale-105"
        >
          <span className="dot w-2 h-2 bg-white rounded-full mt-2 transition-all duration-500 group-hover:translate-y-6" />
        </button>
      </div>
    </header>
  );
}

export default Header;
