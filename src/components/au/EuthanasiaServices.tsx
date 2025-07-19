'use client';
import React from 'react';

const EuthanasiaServices = () => {
  return (
    <section className=" container mx-auto mt-20 mb-20">
      <div className="text-center mb-30">
        <h1 className="text-6x1 md:text-7xl font-serif text-primary ">
          In-Home Pet Euthanasia Services
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-7 max-w-8xl mx-auto ">
        {/* Card 1 */}
        <div className="flex-1  bg-secondary p-8 rounded">
          <div className="flex items-start gap-4">
            <img
              src="/images/pet.svg"
              alt="Home Icon"
              className="w-45 h-45 mt-1"
            />
            <div>
              <h3 className="text-4xl font-serif mt-10">
                At-Home Pet Euthanasia
              </h3>
              <p className="font-sans text-gray-500 text-[18px] leading-[2] mb-4 mt-5">
                One of our dedicated vets will visit you to perform your at-home
                pet euthanasia. From the moment of arrival, everything is done
                to make the process as peaceful and stress-free as possible for
                them and you, ensuring we can give your beloved pet the kindest
                goodbye possible.
              </p>
              <a
                href="#"
                className="text-primary text-1xl font-semibold mb-10 mt-10 rounded cursor-pointer flex items-center group"
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
        <div className="flex-1 bg-[#E4EFF7] p-8 rounded">
          <div className="flex items-start gap-4">
            <img
              src="/images/Petlove.svg" // replace with your own path or use <Image />
              alt="Aftercare Icon"
              className="w-45 h-45 mt-1"
            />
            <div>
              <h4 className=" text-4xl font-serif mt-10">Aftercare Services</h4>
              <p className="font-sans text-gray-500 text-[18px] leading-[2] mb-4 mt-5">
                We offer a wide range of individual cremation options through
                our crematorium partners. Cremation without the return of ashes
                is also available, or we can leave your pet in your care if you
                wish to make your own arrangements.
              </p>
              <a
                href="#"
                className="text-primary text-1xl font-semibold mb-10 mt-10 rounded cursor-pointer flex items-center group"
              >
                Learn More{' '}
                <span className="ml-2 group-hover:ml-4 transition-all duration-300">
                  &gt;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EuthanasiaServices;
