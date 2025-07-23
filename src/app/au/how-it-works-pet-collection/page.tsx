'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavbarPetCollection from '@/components/au/Homes/NavbarPetCollection';

const WorkData = [
  {
    title: 'Collection & Transfer of Your Pet',
    description:
      'If your pet has passed away at home, we can assist to collect them and transfer them to our cremation partners with dignity and care..<br/><br/> There are two methods by which you can book our collection service. Our <a href="/au/contact" class="text-primary font-semibold hover:underline cursor-pointer">instant booking system</a> allows you to view and book available collection times online. Please note however that not all of our providers use this system, so if we are not showing availability when you require assistance or if you simply prefer to speak to us, please call us on <span class="text-primary font-semibold">1300 799 452</span> and we can organise your booking directly.<br/><br/>Please note that for the collection of <span class="font-semibold">dogs weighing 60kg or over,</span> you will need to call us as we will usually require two staff members to assist in this instance for health and safety reasons.',
    number: '1',
    Image: '/images/Pet-Euthanasia-At-Home.jpg',
  },
  {
    title: 'Aftercare',
    description:
      'We have a variety of <a href="/au/aftercare-services" class="text-primary font-semibold hover:underline cursor-pointer">aftercare options</a> available. <span class="font-semibold">Private* (guaranteed individual)</span>  cremation for your pet with the return of their ashes can be organised at additional cost with a wide range of options to choose from. Pricesvary depending on your pet’s weight. Your booking confirmation email includes a link to enable you to select your preferred options at your convenience.<br/><br/> Alternatively, <span class="font-semibold">communal cremation</span> (without the return of ashes) is also available for just $150 if this is your preference.<br/><br/>*Unlike some other cremation companies, our crematorium partners cremate all pets booked for private cremation in their own private chamber, not individually by sectioning off with refractory bricks. This guarantees that only your pet’s ashes are returned to you.',
    number: '2',
    Image: '/images/howitswork3.jpg',
  },
];

const Page = () => {
  return (
    <div>
      <NavbarPetCollection country="au" />

      <div className="bg-[#1F6567]">
        <div className="container mx-auto lg:pt-67 pt-35 p-3 lg:pb-30 pb-10">
          <h1 className="text-[40px] lg:text-[72px] font-serif text-white">
            Pet Collection & Aftercare Services
          </h1>
        </div>
      </div>

      <div className="bg-[##E5F2F2]">
        <div className="container mx-auto space-y-20 lg:pt-25 pt-10 lg:pb-25 pb-10 p-2">
            {WorkData.map((step) => {
              const isEven = parseInt(step.number) % 2 !== 0;
      
              return (
                <div
                  key={step.number}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center pb-0 px-5"
                >
                  {/* Text Content */}
                  <div
                    className={`
                relative pl-2 
                order-1 
                ${isEven ? 'md:order-2' : 'md:order-1'}
              `}
                  >
                    {/* Background Number */}
                    <span className="absolute text-[210px] md:text-[255px] font-serif text-[#f0ede9] top-0 -left-4 z-0 select-none leading-none -translate-y-10 pointer-events-none">
                      {step.number}
                    </span>
      
                    <div className="relative z-10 mt-16">
                      <h3 className="text-[28px] md:text-[38px] xl:text-[57.76px] font-serif text-gray-700 mb-4">
                        {step.title}
                      </h3>
                  <span className="hidden text-primary hover:underline" />
                    <p
                      className="text-[14px] md:text-[17px] xl:text-[17px] text-[#727171] leading-[1.8] font-sans"
                      dangerouslySetInnerHTML={{ __html: step.description }}
                    />
                    </div>
                  </div>
      
                  {/* Image */}
                  <div
                    className={`
          w-full h-full 
          order-2 
          ${isEven ? 'md:order-1' : 'md:order-2'}
          flex justify-center items-center lg:justify-start lg:items-start
        `}
                  >
                    <Image
                      src={step.Image}
                      alt={step.title}
                      className="w-full h-auto object-cover"
                      layout="responsive"
                      width={677}
                      height={500}
                    />
                  </div>
                </div>
              );
            })}
        </div>

        <div className="w-full h-[270px] lg:h-[335px] xl:h-[412px] bg-[#E5F2F2] flex items-center justify-center mt-16">
          <div className="text-center">
            <h2 className="text-[27.8px] lg:text-[57.76px] md:text-[38.72px] text-gray-700 font-serif mb-5">
              Book Your Pet’s Collection
            </h2>

            <Link href="/" passHref>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-primary text-[16px] text-white px-6 py-4 rounded font-sans font-semibold hover:bg-teal-600 transition-all cursor-pointer"
                >
                  BOOK NOW
                </button>
              </div>
            </Link>

            <p className="mt-4 text-[14px] xl:text-[17px] text-gray-500">or</p>

            <p className="mt-1 font-sans text-[14px] xl:text-[17px] text-gray-500">
              Call us &nbsp;
              <Link
                href="tel:03302366999"
                className="text-[14px] xl:text-[17px] font-sans text-primary hover:underline hover:text-teal-900"
              >
                1300 799 452
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;