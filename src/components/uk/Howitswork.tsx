'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

const WorkData = [
  {
    title: 'Making a Booking',
    description:
      'Simply click on the ‘Request an Appointment’ button in the site menu to request a visit and we can assist you with your booking.',
    cta: 'BOOK NOW',
    number: '1',
  },
  {
    title: 'At Home Pet Euthanasia',
    description:
      "One of our dedicated vets will visit you to peacefully perform your pet euthanasia at home. Everything is done to ensure your pet's end-of-life journey is gentle and stress-free as possible.",
    cta: 'READ MORE',
    number: '2',
  },
  {
    title: 'Aftercare',
    description:
      'We offer a wide range of after-care options through our crematorium partners. Or if you wish, we can leave your pet in your care to make your own arrangements.',
    cta: 'READ MORE',
    number: '3',
  },
];

export default function HowItsWork() {
  return (
    <div className="bg-[#FEFBF8]">
      <div className="container mx-auto px-4">
        <h2 className="text-[27.5px] md:text-[38.5px] xl:text-[57px] font-serif text-[#306060] mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 ">
          {WorkData.map((step) => (
            <div
              key={step.number}
              className="relative md:p-4 xl:p-6 bg-[#FEFBF8]"
            >
              {/* Background Number */}
              <span className="absolute text-[200px] xl:text-[250px] font-serif text-[#f0ede9] top-0 -left-2 z-0 select-none leading-none -translate-y-6 pointer-events-none">
                {step.number}
              </span>

              {/* Card Content */}
              <div className="relative z-10 mt-12 xl:mt-6">
                <h3 className="text-[25px] md:text-[32px] xl:text-[43px] w-full xl:w-[90%] font-serif text-gray-700 mb-4">
                  {step.title}
                </h3>
                <p className="text-sm xl:text-[17px] text-[#727171] leading-relaxed font-sans mb-8">
                  {step.description}
                </p>
                <Link
                  href="#"
                  className="text-primary text-sm xl:text-[17px] font-semibold flex items-center group"
                  aria-label={step.cta}
                >
                  {step.cta}
                  <span className="ml-2 group-hover:ml-4 transition-all duration-300">
                    &gt;
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-px bg-[#40404026] mt-6" />

        <Link href="/uk" className="items-center flex justify-center mt-8">
          <Button
            label="LEARN MORE"
            className="hover:gap-2 hover:opacity-80 border border-[#0e797d] text-[#0e797d] text-[13px] lg:text-[15px] font-medium px-4 py-3 lg:px-6 lg:py-3"
          />
        </Link>
      </div>
    </div>
  );
}
