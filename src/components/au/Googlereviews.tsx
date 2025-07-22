'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import type { NavigationOptions } from 'swiper/types';
import { StarIcon } from '@heroicons/react/20/solid';

const reviews = [
  {
    id: 1,
    name: 'Vicki Dunne',
    date: '2025-05-18',
    text: 'I have put off this review for a while now because it seemed a little strange but the team at the Kindest Goodbye and the...',
  },
  {
    id: 2,
    name: 'Sahra Ashford',
    date: '2025-05-11',
    text: 'Highly recommend The kindest goodbye.. We had Dr Sha Singh and she was so incredibly warm, caring and kind. The...',
  },
  {
    id: 3,
    name: 'Anoushka Roman',
    date: '2025-05-02',
    text: 'After a heartbreaking decision on Christmas Eve, we had to make a painful decision to say goodbye to our beautiful Kira...',
  },
  {
    id: 4,
    name: 'Monica Keskitalo',
    date: '2025-03-28',
    text: 'Thank you to the team at The Kindest Goodbye. Your service is outstanding.A HUGE thank you to Dr. Sha...',
  },
  {
    id: 5,
    name: 'Melissa Thang',
    date: '2025-03-18',
    text: 'A heartfelt thank you to Dr. Chad Elbaali and the entire team for their incredible care from start to finish. Dr. Chad...',
  },
];

export default function Googlereviews() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[#FEFBF8] py-10">
      <div
        id="scroll-target"
        ref={contentRef}
        className="container mx-auto md:grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 p-6 md:pl-15 lg:pr-15 xl:pr-0 items-center relative"
      >
        <div className="flex flex-col py-6 mb-8 items-center text-center">
          <h2 className="text-2xl font-bold mb-1 font-sans text-gray-800">
            EXCELLENT
          </h2>

          <div className="flex gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="h-7 w-7" />
            ))}
          </div>

          <p className="text-gray-600 text-sm">
            Based on <strong>232+ reviews</strong>
          </p>

          <div className="flex items-center gap-2 mt-4">
            <Image
              src="/images/google_logo.svg"
              alt="Google"
              width={100}
              height={30}
              className="object-contain"
            />
          </div>
        </div>

        <div className="col-span-3 relative">
          <button
            ref={prevRef}
            className="absolute -left-7 top-1/2 hidden lg:block transform -translate-y-1/2 text-[#cccccc] z-10 text-2xl font-bold p-2 border-none"
          >
            &lt;
          </button>
          <button
            ref={nextRef}
            className="absolute -right-5 top-1/2 hidden lg:block transform -translate-y-1/2 text-[#cccccc] z-10 text-2xl font-bold p-2border-none"
          >
            &gt;
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
            loop
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation === 'object'
              ) {
                (swiper.params.navigation as NavigationOptions).prevEl =
                  prevRef.current;
                (swiper.params.navigation as NavigationOptions).nextEl =
                  nextRef.current;
              }
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="p-4 rounded-lg bg-[#f4f4f4] shadow h-60 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-700 text-white font-sans rounded-full flex items-center justify-center font-bold text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold font-sans text-gray-800">
                          {review.name}
                        </p>
                        <p className="text-xs text-gray-500 font-sans">
                          {review.date}
                        </p>
                      </div>
                    </div>
                    <Image
                      src="/images/google-icon.png"
                      alt="Google"
                      width={20}
                      height={20}
                    />
                  </div>

                  {/* Stars + Verified Icon */}
                  <div className="flex items-center mt-2 ">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        aria-hidden="true"
                      />
                    ))}
                    {/* Verified Checkmark */}
                    <svg
                      className="w-4 h-4 text-blue-500 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18.2A8.2 8.2 0 1 1 20.2 12 8.209 8.209 0 0 1 12 20.2Zm3.707-11.507-4.28 4.28-1.707-1.707a1 1 0 0 0-1.414 1.414l2.414 2.414a1 1 0 0 0 1.414 0l4.987-4.987a1 1 0 0 0-1.414-1.414Z" />
                    </svg>
                  </div>

                  {/* Review Text */}
                  <p className="text-[15px] font-sans text-[#000000] mt-2 line-clamp-3">
                    {review.text}
                  </p>

                  {/* Read More Link */}
                  <p className="text-sm font-sans pt-3 text-gray-500 underline cursor-pointer hover:text-gray-700">
                    Read more
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
