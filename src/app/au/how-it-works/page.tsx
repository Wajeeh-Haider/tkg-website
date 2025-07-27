"use client";

import Navbarhome from "@/components/uk/Homes/Navbarhome";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const WorkData = [
  {
    title: "Book or Request an Appointment",
    description: `We have two methods by which you can book our service. Our <a href="/au/contact" class="text-primary hover:underline font-semibold cursor-pointer">instant booking system</a> allows you to view and book available appointments online. Please note however that not all of our vets use this system, so if we are not showing availability for your preferred date and time, it is quite likely we may still be able to assist. In this instance, or if you prefer to submit a request/make an enquiry for a potential appointment, simply click on the <a href="/au/contact" class="text-primary hover:underline cursor-pointer font-semibold">‘Booking Request/Enquiry’</a> button in the site menu, follow the prompts and we will get back to you ASAP with suitable availability.<br/><br/> If you prefer or are having any difficulties with the booking process, you can also call us on <span class="text-primary font-semibold">1300 799 452</span> and we can assist you over the phone with your booking request.<br/><br/> If you have any general questions about euthanasia for your pet, or would like to discuss your pet’s quality of life, please complete our <a href="/au/contact" class="text-primary hover:underline cursor-pointer font-semibold">contact form</a> and one of our caring team will call you back as soon as possible for a phone consultation free-of-charge.`,
    number: "1",
    Image: "/images/howitwork1.jpg",
  },
  {
    title: "Peaceful Home Euthanasia",
    description: `One of our dedicated vets will visit your home to perform your pet’s peaceful euthanasia. Sedation prior to the procedure is available at no additional cost and is highly recommended to help make your pet’s end of life journey as gentle and stress-free as possible.<br/><br/> If you have any special requests for your pet’s euthanasia, you can include this information when making your booking, or discuss with your vet when they arrive at your home. At every stage of the process, we can take as much time as you need.<br/><br/> After your pet has passed, and you feel ready, we can take them with us when we leave to organise their cremation. If you prefer to bury them at home, or make your own cremation arrangements, we will leave them in your care.`,
    number: "2",
    Image: "/images/howitswork2.jpg",
  },
  {
    title: "Aftercare",
    description: `We have a variety of <a href="/au/aftercare-services" class="text-primary hover:underline cursor-pointer font-semibold">aftercare options</a> available. Private* (guaranteed individual) cremation for your pet with the return of their ashes can be organised at additional cost with a wide range of options to choose from. Prices vary depending on your pet’s weight. Your booking confirmation email includes a link to enable you to select your preferred options at your convenience.<br/><br/> If you would like to bury your pet at home or make your own cremation arrangements, we will leave them in your care.<br/><br/> Finally, communal cremation (without the return of ashes) is also available if this is your preference. <br/><br/>*Unlike some other cremation companies, our crematorium partners cremate all pets booked for private cremation in their own private chamber, not individually by sectioning off with refractory bricks. This guarantees that only your pet’s ashes are returned to you.`,
    number: "3",
    Image: "/images/howitswork3.jpg",
  },
];

function page() {
  return (
    <div>
      <Navbarhome country="au" />
      <div className="bg-[#E5F2F2]">
        <div className="container mx-auto lg:pt-67 pt-35 p-3 lg:pb-30 pb-10">
          <h1 className="text-[40px] lg:text-[72px] font-serif text-primary">
            How It Works
          </h1>
        </div>
      </div>

      <div className="bg-[#FEFBF8]">
        <div className="container mx-auto space-y-20 lg:pt-25 pt-10 lg:pb-25 pb-10 p-2">
          {WorkData.map((step) => {
            const isEven = parseInt(step.number) % 2 === 0;
            const isFirstImage = step.Image === "/images/howitwork1.jpg";
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                ref={ref}
                key={step.number}
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center pb-0 px-5"
              >
                {/* Text */}
                <div
                  className={`relative pl-2 order-1 ${
                    isEven ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <span className="absolute text-[210px] md:text-[255px] font-serif text-[#f0ede9] top-0 -left-4 z-0 select-none leading-none -translate-y-10 pointer-events-none">
                    {step.number}
                  </span>

                  <div className="relative z-10 mt-16">
                    <h3 className="text-[28px] md:text-[38px] xl:text-[57.76px] font-serif text-gray-700 mb-4">
                      {step.title}
                    </h3>
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
                ${isEven ? "md:order-1" : "md:order-2"}
                relative flex justify-center items-center lg:justify-start lg:items-start
              `}
                >
                  <div
                    className={`relative w-full max-w-[677px] ${
                      isFirstImage ? "top-0 md:-top-130 lg:-top-45" : ""
                    }`}
                  >
                    <Image
                      src={step.Image}
                      alt={step.title}
                      className="w-full h-auto object-cover pt-10"
                      layout="responsive"
                      width={677}
                      height={500}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="w-full h-[270px] lg:h-[335px] xl:h-[412px] bg-[#e8eff4] flex items-center justify-center mt-16">
          <div className="text-center">
            <h2 className="text-[27.8px] lg:text-[57.76px] md:text-[38.72px] text-gray-700 font-serif mb-5">
              Request an Appointment
            </h2>
            <Link href="/" passHref>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-primary text-[16px] text-white px-6 py-4 rounded font-sans font-semibold hover:bg-teal-600 transition-all cursor-pointer"
                >
                  REQUEST NOW
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
}

export default page;
