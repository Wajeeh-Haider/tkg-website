'use client';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

interface CardData {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  bgColor: string;
}

interface EuthanasiaserviceProps {
  title: string;
  cardsData: CardData[];
}

const Euthanasiaservice: React.FC<EuthanasiaserviceProps> = ({
  title,
  cardsData,
}) => {
  return (
    <div className="bg-[#FEFBF8] py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6">
          <h1 className="text-[27px] md:text-[32.5px] lg:text-[38.5px] xl:text-[57px] px-3 font-serif text-primary leading-tight">
            {title}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 md:px-5 rounded-xl shadow-md`}
              style={{ backgroundColor: card.bgColor }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src={card.imageSrc}
                    alt={card.alt}
                    width={64}
                    height={64}
                    className="w-32 h-32 md:w-15 md:h-15 lg:w-20 lg:h-20 xl:w-30 xl:h-30"
                  />
                </div>
                <div className="lg:mt-8">
                  <h3 className="text-[22.5px] md:text-[26.5px] font-serif text-[#404040]">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[#404040] text-[14px] xl:text-[17px] leading-relaxed mt-4 pb-4">
                    {card.description}
                  </p>
                  <Link href={card.buttonHref}>
                    <Button
                      label={card.buttonLabel}
                      icon={<ChevronRightIcon className="w-5 h-5" />}
                      className="hover:gap-2 hover:opacity-80 text-[14px] lg:text-[15px] font-medium px-4 py-3 lg:px-6 lg:py-3"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Euthanasiaservice;
