'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type BlogscardProps = {
  title: string;
  content: string;
  date: string;
  image: string;
};

const Blogscard: React.FC<BlogscardProps> = ({
  title,
  content,
  date,
  image,
}) => {
  return (
    <div className="flex flex-col bg-cream h-full overflow-hidden">
      <div className="flex-shrink-0 mb-4">
        <Image
          src={image}
          alt="Blog Image"
          width={500}
          height={300}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="relative flex flex-col justify-between flex-1 bg-cream transition-all duration-700 ease-in-out before:absolute before:inset-0 before:bg-white before:origin-bottom before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:duration-300 before:ease-in-out">
        <div className="relative z-10 flex flex-col justify-between h-full">
          <h2 className="text-[22.88px] md:text-[26.88px] xl:text-[32.16px] font-serif text-[#404040] hover:text-primary hover:underline decoration-[1px] underline-offset-8 cursor-pointer p-4 xl:p-6">
            <Link href="#">{title}</Link>
          </h2>

          <p className="text-sm xl:text-[17px] font-sans text-[#404040] leading-6 p-4 xl:p-6">
            {content}
          </p>

          <div className="flex justify-between items-center bg-white p-4 xl:p-6">
            <span className="text-[12.25px] font-sans text-[#40404080]">
              {date}
            </span>

            <Link
              href="#"
              className="text-primary text-[12.25px] lg:text-13px font-sans xl:font-bold flex items-center"
            >
              READ MORE
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                &gt;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogscard;
