'use client';
import React from 'react';

const EuthanasiaServices = () => {
  return (
    <div className="bg-[#FEFBF8]">
    <section className=" container mx-auto xl:pr-0 md:pr-4 pr-2 xl:pl-0 pl-2 md:pl-4">
      <div className="text-center xl:mb-30 mb-10 ">
        <h1 className="text-[35px] md:text[38.72px] xl:text-7xl font-serif text-primary ">
          In-Home Pet Euthanasia Services
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-7 max-w-8xl mx-auto ">
        {/* Card 1 */}
        <div className="flex-1  bg-secondary xl:p-8 p-2 rounded">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <img
              src="/images/pet.svg"
              alt="Home Icon"
              className="xl:w-45 xl:h-45 mt-1 "
            />
            <div>
              <h3 className="xl:text-4xl text-3xl font-serif lg:mt-10 mt-5">
                At-Home Pet Euthanasia
              </h3>
              <p className="font-sans text-gray-500 lg:text-[18px] text-[14px] leading-[2] mb-4 mt-5">
                One of our dedicated vets will visit you to perform your at-home
                pet euthanasia. From the moment of arrival, everything is done
                to make the process as peaceful and stress-free as possible for
                them and you, ensuring we can give your beloved pet the kindest
                goodbye possible.
              </p>
              <a
                href="#"
                className="text-primary lg:text-1xl text-[14px] font-semibold mb-10 mt-10 rounded cursor-pointer flex items-center group"
              >
                BOOK NOW{' '}
                <span className="ml-2 group-hover:ml-4 transition-all duration-300">
                  &gt;
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-[#E4EFF7]  xl:p-8 p-2 rounded">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <img
              src="/images/Petlove.svg" // replace with your own path or use <Image />
              alt="Aftercare Icon"
              className="lg:w-45 lg:h-45 mt-1"
            />
            <div>
              <h3 className=" xl:text-4xl text-3xl font-serif lg:mt-10 mt-5">Aftercare Services</h3>
              <p className="font-sans text-gray-500  lg:text-[18px] text-[14px]  leading-[2] mb-4 mt-5">
                We offer a wide range of individual cremation options through
                our crematorium partners. Cremation without the return of ashes
                is also available, or we can leave your pet in your care if you
                wish to make your own arrangements.
              </p>
              <a
                href="/au/aftercare-services"
                className="text-primary lg:text-1xl text-[14px] font-semibold mb-10 mt-10 rounded cursor-pointer flex items-center group"
              >
                LEARN MORE{' '}
                <span className="ml-2 group-hover:ml-4 transition-all duration-300">
                  &gt;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default EuthanasiaServices;
