'use client';
import React from 'react';
import { MdOutlinePets } from 'react-icons/md';
import Button from '@/components/Button';
import Link from 'next/link';
import Image from 'next/image';

const Petathome = () => {
  return (
    <div className="relative bg-[#FEFBF8] mx-6 xl:mx-0 overflow-hidden py-16">
      <div className="absolute left-0 bottom-0 w-[500px] h-[400px] pointer-events-none z-0">
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
          <h2 className="text-[27.5px] md:text-[38.5px] text-[#306060] font-serif">
            Pet Euthanasia At Home
          </h2>
          <p className="font-sans text-[#404040] my-6 pr-[3.5px] text-sm xl:text-[16px] leading-[1.8]">
            The Kindest Goodbye provides access to a network of dedicated and
            experienced vets providing caring&nbsp;
            <strong>pet euthanasia at home</strong> services across the UK. We
            understand the importance of offering a peaceful, comfortable
            environment for your pet’s final moments, ensuring their passing is
            as gentle as possible.
          </p>
          <Link href="/uk">
            <Button
              label="READ MORE"
              className="hover:gap-2 hover:opacity-80 text-[13px] lg:text-[15px] font-medium px-4 py-3 lg:px-6 lg:py-3"
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
          <div className="bg-[#F6F0EA] space-y-8 p-5 relative md:top-16 xl:top-8 md:right-5 md:w-[55%] lg:w-[60%] xl:w-[80%]">
            {/* Card 1 */}
            <div>
              <div className="flex items-center gap-4">
                <MdOutlinePets className="text-primary w-6 h-6 -rotate-10" />
                <h3 className="text-[20.5px] font-serif text-[#404040]">
                  The Kindest Goodbye
                </h3>
              </div>
              <p className="text-[14px] xl:text-[16px] pt-4 ml-10 font-sans leading-[2] text-[#404040]">
                Whether it’s
                <span className="text-primary"> putting a dog down</span> or
                saying farewell to the family cat, saying goodbye in the comfort
                of home is the kindest farewell. Our{' '}
                <strong>in-home pet euthanasia</strong> services allow your pet
                to remain in familiar surroundings, reducing anxiety and
                creating a peaceful goodbye.
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
                As a team of devoted pet lovers, we truly understand the deep
                bond you have with your pet and the pain of losing them. We
                believe that your pet’s final journey should be as caring,
                loving, and unique as they are. Our veterinarians provide mobile
                pet euthanasia, allowing your pet to feel safe and cherished in
                the comfort of their own home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Petathome;
