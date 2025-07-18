"use client";
import React from "react";

const steps = [
  {
    title: "Making a Booking",
    description:
      "Simply click on the ‘Make a Booking’ button in the site menu and follow the prompts, entering a few details to allow us to prepare for our visit.",
    cta: "BOOK NOW",
    number: "1",
  },
  {
    title: "At Home Pet Euthanasia",
    description:
      "One of our dedicated vets will visit you to peacefully perform your pet euthanasia at home. Everything is done to ensure your pet's end-of-life journey is gentle and stress-free as possible.",
    cta: "READ MORE",
    number: "2",
  },
  {
    title: "Aftercare",
    description:
      "We offer a wide range of after-care options through our crematorium partners. Or if you wish, we can leave your pet in your care to make your own arrangements.",
    cta: "READ MORE",
    number: "3",
  },
  {
    title: "Pet Collection",
    description:
      "If your pet has passed away at home, we can assist to collect them and transfer them to our cremation partners with dignity and care.",
    cta: "BOOK NOW",
    number: "4",
  },
];

const HowItWorks = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-8xl font-serif text-primary mb-10 text-left">How It Works</h2>

      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="relative flex-1 min-w-[250px] p-6 bg-white overflow-hidden">
            {/* Background number */}
            <span className="absolute text-[300px] font-serif text-[#f0ede9] top-0 left-0 z-0 select-none leading-none">
              {step.number}
            </span>

            {/* Card content */}
            <div className="relative z-10 mt-20">
              <h3 className="text-5xl font-serif text-gray-700 mb-10">{step.title}</h3>
              <p className="text-[17px] text-[#727171] leading-[2.2] font-sans mb-4">
                {step.description}
              </p>
              <a
                href="#"
                className="text-primary text-lg font-semibold rounded cursor-pointer flex items-center group"
              >
                {step.cta}
                <span className="ml-2 group-hover:ml-4 transition-all duration-300">
                  &gt;
                </span>
              </a>
            </div>
          </div>
        ))}
        <div className="w-full h-[1px] bg-neutral-400"></div>
      </div>

      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-block px-7 py-4 bg-white border-2 text-primary font-bold rounded hover:bg-teal-700 hover:text-white transition"
        >
          LEARN MORE
        </a>
      </div>
    </div>
  );
};

export default HowItWorks;
