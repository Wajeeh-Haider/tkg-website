'use client';

import Button from '@/components/Button';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import Image from 'next/image';

function Herosection() {
  const scrollToSection = () => {
    const section = document.getElementById('scroll-target');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="relative z-10 flex flex-col justify-center h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    >
      <div className="relative z-10 flex flex-col justify-center container mx-auto text-white px-0 lg:px-4 h-screen">
        <Image
          src="/images/google-review.png"
          alt="Hero Image"
          width={110}
          height={55}
          className="ml-6 overflow-hidden"
        />
        <h1 className="text-[40px] font-serif lg:text-[56px] 2xl:text-[72px] font-medium md:w-[63%] lg:w-[68%] xl:w-[54%] 2xl:w-[58%] leading-[1.1] mx-6 my-4 pt-2">
          Peaceful Pet Euthanasia for
          <span className="text-primary"> beloved pets </span>in the comfort of
          home
        </h1>

        {/* Buttons */}
        <div className="flex gap-2 py-4 ml-6">
          <Link href="/uk">
            <Button
              label="REQUEST A HOME EUTHANASIA"
              className="hover:gap-2 hover:opacity-80 cursor-pointer  bg-[#0e797d] text-white font-sans text-[13.125px] font-semibold lg:text-[15px] px-4 py-3 lg:px-6 lg:py-3"
            />
          </Link>
          <Link href="/au">
            <Button
              label="CALL US NOW"
              icon={<ChevronRightIcon className="w-5 h-5" />}
              className="hover:gap-2 hover:opacity-80 cursor-pointer bg-transparent font-sans text-[14px] font-semibold lg:text-[15px] text-white px-2 py-3 lg:px-6 lg:py-3"
            />
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
          <button
            onClick={scrollToSection}
            className="group relative cursor-pointer w-7 h-12 lg:w-8 lg:h-14 mb-5 lg:mb-0 border-2 lg:border-4 border-white rounded-full flex justify-center items-start transition-all duration-300 hover:scale-105"
          >
            <span className="dot w-2 h-2 bg-white rounded-full mt-2 transition-all duration-500 group-hover:translate-y-6"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
