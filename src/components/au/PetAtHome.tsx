"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdOutlinePets } from "react-icons/md";
const PetAtHome = () => {
  return (
    <div className="bg-[#FEFBF8] ">
      <div className="relative w-full h-full z-10">
        <Image
          src={"/images/decor1.svg"}
          alt="decor"
          height={700}
          width={750}
          className="absolute top-20 -z-1"
        />

        <div className="container mx-auto pt-10 xl:pb-60 pb-5 lg:pr-0 pr-2 lg:pl-0 pl-2 z-20">
          <div className="flex xl:flex-row lg:flex-col md:flex-col flex-col gap-6 items-center mb-6">
            <div className="w-full md:w-1/2 md:mr-auto md:ml-7">
              <h1 className="xl:text-7xl lg:text-[56px] text-[40px] text-primary font-serif">
                Pet <br />
                Euthanasia At <br />
                Home
              </h1>
              <p className="font-sans text-gray-400 mt-10 mb-10 text-[14px] xl:text-[17px] leading-[1.8]">
                The Kindest Goodbye is a network of dedicated and experienced
                vets providing caring in-home pet
                <br /> euthanasia services across Australia.
              </p>
              <Link
                href="/au/about-us"
                className="inline-flex justify-center items-center text-white text-sm uppercase font-bold leading-[1.5] px-6 py-3 border-2 border-primary bg-primary rounded text-center no-underline cursor-pointer transition duration-300 ease-in-out hover:bg-teal-600 hover:border-teal-600"
              >
                Read More
              </Link>
            </div>

            <div className="flex flex-col lg:flex-row md:flex-row lg:gap-0 md:gap-0 gap-10 md:pb-10">
              <div className="relative left-0 top-0 md:left-7 md:top-0 xl:left-10 xl:top-20 lg:top-0 lg:left-40">
                <img
                  src="/images/Pet-Euthanasia-At-Home.jpg"
                  alt="Pet at Home"
                  className="xl:w-320 xl:h-110 md:w-420 md:h-75 w-100 h-60"
                />
              </div>
              <div className="relative lg:top-30 md:top-10 top-0">
                <div className="box-border xl:w-[500]  xl:p-10 p-5 bg-cream ">
                  <div className="flex flex-row justify-center h-full">
                    <div className="mr-4 xl:text-3xl text-2xl">
                      <MdOutlinePets className="text-primary" />
                    </div>
                    <div>
                      <h4 className="xl:text-3xl text-[20.8px] text-[#404040] font-serif mb-5">
                        The Kindest Goodbye
                      </h4>
                      <p className="xl:text-[17px] text-[14px] text-[#404040] mt-2 font-sans leading-[1.8] mb-5">
                        Putting your pet to sleep in the comfort of home, with
                        loved ones by their side and away from the stress of the
                        vet clinic is the kindest goodbye you can give your
                        beloved friend.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center h-full">
                    <div className="mr-4 xl:text-3xl text-2xl">
                      <MdOutlinePets className="text-primary" />
                    </div>
                    <div>
                      <h4 className="xl:text-3xl text-[20.8px] text-[#404040] font-serif mb-5">
                        Experienced Vets
                      </h4>
                      <p className="xl:text-[17px] text-[14px] text-[#404040] mt-2 font-sans leading-[1.8] mb-5">
                        As a team of pet lovers, we understand what it’s like to
                        love and lose your pet. We believe that your pet’s
                        end-of-life journey should be just as caring, loving and
                        unique as they are. Our vets offer mobile pet euthanasia
                        so your pet can feel safe and loved.
                      </p>
                    </div>
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

export default PetAtHome;
