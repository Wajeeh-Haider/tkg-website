'use client';
import React from 'react';
import { MdOutlinePets } from 'react-icons/md';
import Button from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';

const Petathome = () => {
  return (
    <div className="relative bg-[#FEFBF8] mx-6 xl:mx-0 overflow-hidden py-16">
      <div className="absolute left-0 bottom-0 w-[500px] h-[400px] md:w-[600px] md:h-[500px] md:top-40 lg:top-0 pointer-events-none z-0">
        <Image
          src="/images/decor1.svg"
          alt="Decorative Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Main Content  */}
      <div className="relative z-10 container mx-auto xl:grid lg:grid-cols-2 xl:grid-cols-3 items-start">
        <div className="w-full md:w-[65%] xl:w-[100%] xl:pr-1">
          <h2 className="text-[40px] md:text-[38.5px] lg:text-[56px] text-[#306060] font-serif leading-12 xl:leading-15">
            Pet Euthanasia At Home
          </h2>
          <p className="font-sans text-[#404040] md:w-[90%] my-6 pr-[3.5px] text-sm xl:text-[16px] leading-[1.8]">
            The Kindest Goodbye is a network of dedicated and experienced vets
            providing caring in-home pet euthanasia services across Australia.
          </p>
          <Link href="/au">
            <Button
              label="READ MORE"
              className="hover:gap-2 hover:opacity-80 bg-[#0e797d] text-white text-[13px] lg:text-[15px] font-medium px-4 py-3 lg:px-6 lg:py-3"
            />
          </Link>
        </div>
        <div className="md:flex col-span-2 xl:pl-8">
          {/* Column 2 */}
          <div className="py-8 xl:py-0">
            <Image
              src="/images/Pet-Euthanasia-At-Home.jpg"
              alt="Pet Euthanasia"
              width={352}
              height={282}
              className="w-full md:w-[352px] lg:w-[580px] h-auto"
            />
          </div>

          {/* Column 3 */}
          <div className="bg-[#F6F0EA] space-y-8 p-12 relative md:top-16 xl:top-8 md:right-5 md:w-[55%] lg:w-[60%] xl:w-[80%]">
            {/* Card 1 */}
            <div>
              <div className="flex items-center gap-4">
                <MdOutlinePets className="text-primary w-6 h-6 -rotate-10" />
                <h3 className="text-[20.5px] font-serif text-[#404040]">
                  The Kindest Goodbye
                </h3>
              </div>
              <p className="text-[14px] xl:text-[16px] pt-4 ml-10 font-sans leading-[2] text-[#404040]">
                Putting your pet to sleep in the comfort of home, with loved
                ones by their side and away from the stress of the vet clinic is
                the kindest goodbye you can give your beloved friend.
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <div className="flex items-center gap-4">
                <MdOutlinePets className="text-primary w-6 h-6 -rotate-10" />
                <h3 className="text-[20.5px] font-serif text-[#404040]">
                  Experienced Vets
                </h3>
              </div>
              <p className="text-[14px] xl:text-[16px] pt-4 ml-10 font-sans leading-[2] text-[#404040]">
                As a team of pet lovers, we understand what it’s like to love
                and lose your pet. We believe that your pet’s end-of-life
                journey should be just as caring, loving and unique as they are.
                Our vets offer mobile pet euthanasia so your pet can feel safe
                and loved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Petathome;
