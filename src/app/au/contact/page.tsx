import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbarhome from '@/components/au/Homes/Navbarhome';
const page = () => {
  return (
    <div>
      <Navbarhome country="au" />
      {/* Header Section */}
      <div className="bg-[#E5F2F2]">
        <div className="container mx-auto lg:pt-67 pt-35 p-3  lg:pb-30 pb-10 ">
          <h1 className="text-[40px] lg:text-[72px] font-serif text-primary">
            Quality of Life Scale for Pets
          </h1>
        </div>
      </div>
      <div className="bg-[#F5F5F5]">
        <div className="relative w-full h-full z-10">
          <Image
            src={'/images/decor2.svg'}
            alt="decor"
            height={400}
            width={400}
            className="absolute bottom-0 right-0 -z-1"
          />
          <div className="container mx-auto lg:pt-30 pt-10 lg:pb-30 pb-10 z-20">
            <div className="flex flex-col lg:flex-row  justify-center gap-10 p-6 md:p-10  max-w-8xl mx-auto">
              {/* Form Section */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-[20.5px] md:text-[24.5px] font-serif text-[#404040]">
                  Phone{' '}
                  <Link
                    href="tel:1300799452"
                    className="text-primary hover:underline hover:text-teal-800 decoration-[1px] underline-offset-8"
                  >
                    1300 799 452
                  </Link>
                </h3>
                {/* Social Links */}
                <div className="flex gap-4 px-4 mt-5">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-primary text-white hover:bg-teal-600 transition"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.5-3.89 3.8-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12Z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-primary text-white hover:bg-teal-600 transition"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                    </svg>
                  </a>
                </div>
                <div className="w-full h-[1px] bg-gray-300 my-7" />

                <h2 className="text-[22.88px] lg:text-[32.16px] font-serif mb-4">
                  Contact Form
                </h2>
                <p className="mb-6 text-gray-500 font-sans  text-[14px] lg:text-[17px] ">
                  If you would like to speak to us about your pet’s quality of
                  life, or have any other questions about our service, please
                  complete the contact form below and one of our vets will call
                  you back ASAP.
                </p>

                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-900 font-semibold font-sans  text-[14px] lg:text-[17px] mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded px-6 py-4 focus:outline-none focus:ring focus:border-blue-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full">
                      <label className="block text-gray-700 font-sans  text-[14px] lg:text-[17px] mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        className="w-full border border-gray-300 rounded px-6 py-4 focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="w-full">
                      <label className="block text-gray-700 font-sans  text-[14px] lg:text-[17px] mb-1">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        className="w-full border border-gray-300 rounded px-6 py-4 focus:outline-none focus:ring focus:border-blue-500"
                        placeholder="Enter your phone"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-sans  text-[14px] lg:text-[17px] mb-1">
                      Please advise your preferred method of initial contact{' '}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full border border-gray-300 text-gray-500 rounded px-6 py-4 focus:outline-none focus:ring focus:border-blue-500"
                      required
                    >
                      <option>Phone call</option>
                      <option>Text message/SMS</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700  font-sans  text-[14px] lg:text-[17px] mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      className="w-full border border-gray-300 rounded px-6 py-4 focus:outline-none focus:ring focus:border-blue-500"
                      placeholder="Write your message..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-4 rounded font-sans font-semibold hover:bg-teal-800 transition-all"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative w-full overflow-hidden ">
                  <img
                    src="/images/call-us-image.jpg" // You can replace this with your uploaded image path
                    alt="Dog sitting on couch"
                    className="w-full h-auto object-cover"
                  />
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
