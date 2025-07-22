import React from 'react';
import Image from 'next/image';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { LuClock5 } from 'react-icons/lu';
import Navbarhome from '@/components/au/Homes/Navbarhome';
const page = () => {
  return (
    <div>
      <Navbarhome country="au" />
      <div className="bg-[#E5F2F2]">
        <div className="container mx-auto lg:pt-67 pt-35 p-3  lg:pb-30 pb-10 ">
          <h1 className="text-[40px] lg:text-[72px] font-serif text-primary">
            Pricing
          </h1>
        </div>
      </div>
      <div className="bg-[#FEFBF8]">
        <div className="container mx-auto lg:pt-20 pt-10  lg:pb-15 pb-5">
          <h1 className="lg:text-[43px] text-[25.12px] font-serif text-black p-3">
            How much does a home euthanasia cost?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Monday to Friday */}
            <div className="bg-[#E5F2F2] p-10 pt-15 pb-15 ">
              <h3 className="text-[25.12px] lg:text-[43.1px] font-serif text-primary mb-3">
                Monday to Friday
              </h3>
              <ul className="space-y-2 text-[#1F3F3D] text-[16px]">
                <li className="flex text-[17px] font-sans items-start gap-2">
                  <MdOutlineHealthAndSafety className="text-[20px]" />
                  <span>Pricing includes sedation prior to euthanasia</span>
                </li>
                <li className="flex text-[17px] mt-6 font-sans items-start gap-2">
                  <LuClock5 className="text-[20px]" />
                  <span>
                    8AM – 6PM{' '}
                    <em className="text-gray-500">excluding public holidays</em>
                  </span>
                </li>
              </ul>
              <div className="mt-6 space-y-2 text-primary text-[24px] font-serif">
                <p>$399 – Pocket Pets (Mice, Rats, Guinea Pigs, Rabbits etc)</p>
                <p>$449 – Cats & Dogs under 40kg</p>
                <p>$474 – Dogs 40kg & Over</p>
              </div>
              <button className="mt-15 text-[13.125px] lg:text-[17px] bg-primary text-white px-8 py-5 rounded font-semibold transition duration-300 hover:bg-[#20B1B7] cursor-pointer">
                MAKE A BOOKING
              </button>
            </div>

            {/* After Hours */}
            <div className="bg-[#E8EFF4] p-10 pt-15 pb-15 ">
              <h3 className="text-[25.12px] lg:text-[43.1px] font-serif text-[#406D9C] mb-3">
                After Hours
              </h3>
              <ul className="space-y-2 text-[#406D9C] text-[16px]">
                <li className="flex text-[17px] font-sans items-start gap-2">
                  <MdOutlineHealthAndSafety className="text-[20px]" />
                  <span>Pricing includes sedation prior to euthanasia</span>
                </li>
                <li className="flex text-[17px] font-sans mt-6 items-start gap-2">
                  <LuClock5 className="text-[20px] " />
                  <span>
                    Weekdays 6PM – 10PM and 7 – 8AM and{' '}
                    <em>Weekends 7AM – 10PM</em>
                  </span>
                </li>
              </ul>
              <div className="mt-6 space-y-2 text-[#406D9C] text-[24px] font-serif">
                <p>$549 – Pocket Pets (Mice, Rats, Guinea Pigs, Rabbits etc)</p>
                <p>$599 – Cats & Dogs under 40kg</p>
                <p>$624 – Dogs 40kg & Over</p>
              </div>
              <button className="mt-15 bg-[#2C456B] text-[13.125px] lg:text-[17px]  text-white px-8 py-5 rounded font-semibold transition duration-300 hover:bg-[#20B1B7] cursor-pointer">
                MAKE A BOOKING
              </button>
            </div>
          </div>
          <div className=" text-gray-500 font-sans mt-10 lg:py-10 py-0 p-3 text-center font-lightbold">
            <p className="lg:text-[17px] text-[14px]  leading-[2.5] italic">
              For{' '}
              <b>
                public holiday and emergency overnight appointments (10pm-7am)
              </b>{' '}
              and where a vet is able to attend an additional $150 charge
              applies in addition to normal
            </p>
            <p className="lg:text-[17px] text-[14px] leading-[2.5] italic">
              After Hours pricing
            </p>
            <p className="lg:text-[17px] text-[14px] leading-[2.5] italic">
              In the rare instance where <b>multiple pets</b> are being put to
              sleep together, additional pets are charged at $300 per additional
              pet. For bookings for multiple pets, please
            </p>
            <p className="lg:text-[17px] text-[14px] leading-[2.5] italic">
              contact our team on{' '}
              <span className="text-primary">1300 799 452</span>
            </p>
          </div>
        </div>

        {/* cards */}
        <div className="relative w-full h-full z-10 pb-26">
          <Image
            src={'/images/decor1.svg'}
            alt="decor"
            height={550}
            width={655}
            className="absolute top-0 -z-1"
          />
          <div className="container mx-auto   lg:pb-15 pb-5 z-20">
            <div className="flex flex-col md:flex-row gap-7 max-w-8xl mx-auto py-10">
              {/* Card 1 */}
              <div className="flex-1  bg-cream xl:p-8 p-2 rounded ">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <img
                    src="/images/Petlove.svg"
                    alt="Home Icon"
                    className="xl:w-35 xl:h-35 mt-1 "
                  />
                  <div>
                    <h3 className="xl:text-4xl text-3xl font-serif lg:mt-10 mt-5">
                      Private Cremation
                    </h3>
                    <p className="font-sans text-gray-500 lg:text-[18px] text-[14px] leading-[2] mb-4 mt-5">
                      Private cremation with the return of your pet’s ashes and
                      a selection of memorial options are available at
                      additional cost from $390.{' '}
                      <a href="#" className="text-primary hover:underline">
                        Click here
                      </a>{' '}
                      to learn more about our available aftercare options in
                      your area.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex-1  bg-cream  xl:p-8 p-2 rounded">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <img
                    src="/images/pet.svg" // replace with your own path or use <Image />
                    alt="Aftercare Icon"
                    className="lg:w-35 lg:h-35 mt-1"
                  />
                  <div>
                    <h3 className=" xl:text-4xl text-3xl font-serif lg:mt-10 mt-5">
                      Companion Cremation
                    </h3>
                    <p className="font-sans text-gray-500  lg:text-[18px] text-[14px]  leading-[2] mb-4 mt-5">
                      Companion cremation is available for just $170 if you do
                      not wish your pet’s ashes to be returned. Alternatively,
                      if you wish to bury your pet at home or organise your own
                      cremation service we can leave your pet in your care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
