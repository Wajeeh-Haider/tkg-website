'use client';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

const Euthanasiaservice = () => {
  return (
    <div className="bg-[#FEFBF8] py-20">
      <div className="container mx-auto px-4 md:px-6 ">
        <div className="text-center mb-6">
          <h1 className="text-[27px] md:text-[32.5px] lg:text-[38.5px] xl:text-[57px] px-3 font-serif text-primary leading-tight">
            In-Home Pet Euthanasia Services
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="bg-secondary p-6 sm:p-8 md:px-5 rounded-xl shadow-md">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <Image
                  src="/images/pet.svg"
                  alt="Home Icon"
                  width={64}
                  height={64}
                  className="w-32 h-32 md:w-15 md:h-15 lg:w-20 lg:h-20 xl:w-30 xl:h-30"
                />
              </div>
              <div className="lg:mt-8">
                <h3 className="text-[22.5px] md:text-[26.5px] font-serif text-[#404040]">
                  At-Home Pet Euthanasia
                </h3>
                <p className="font-sans text-[#404040] text-[14px] xl:text-[17px] leading-relaxed mt-4 pb-4">
                  One of our devoted veterinarians will come to your home to
                  carry out at-home pet euthanasia. From the moment we arrive,
                  we focus on making the experience as peaceful and stress-free
                  as possible for both you and your beloved pet. We ensure they
                  receive the kindest of goodbyes with our gentle, in-home pet
                  euthanasia service.
                </p>
                <Link href="/uk">
                  <Button
                    label="Request An Appointment Now"
                    icon={<ChevronRightIcon className="w-5 h-5 " />}
                    className="hover:gap-2 hover:opacity-80 text-[14px] lg:text-[15px] font-medium px-4 py-3 lg:px-6 lg:py-3"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#E8EFF4] p-6 sm:p-8 md:px-5 rounded-xl shadow-md">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <Image
                  src="/images/Petlove.svg"
                  alt="Aftercare Icon"
                  width={64}
                  height={64}
                  className="w-32 h-32 md:w-15 md:h-15 lg:w-20 lg:h-20 xl:w-30 xl:h-30"
                />
              </div>
              <div className="lg:mt-8">
                <h3 className="text-[22.5px] md:text-[26.5px] font-serif text-[#404040]">
                  Aftercare Services
                </h3>
                <p className="font-sans text-[#404040] text-[14px] xl:text-[17px] leading-relaxed mt-4 pb-4">
                  We offer a wide range of individual cremation options through
                  our crematorium partners. Cremation without the return of
                  ashes is also available, or we can leave your pet in your care
                  if you wish to make your own arrangements. Our compassionate
                  approach to<strong> pet euthanasia </strong> extends beyond
                  the moment of passing, with tailored aftercare options to suit
                  your needs.
                </p>
                <Link href="/uk">
                  <Button
                    label="LEARN MORE"
                    icon={<ChevronRightIcon className="w-5 h-5 " />}
                    className="hover:gap-2 hover:opacity-80 text-[14px] lg:text-[15px] font-medium px-4 py-3 lg:px-6 lg:py-3"
                  />
                </Link>
                {/* <span className="ml-2 group-hover:ml-4 transition-all duration-300">
                  &gt;
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Euthanasiaservice;
