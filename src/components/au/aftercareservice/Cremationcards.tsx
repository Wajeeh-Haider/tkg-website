import React from 'react';
import Image from 'next/image';

const cardsData = [
  {
    title: 'Companion Cremation',
    description:
      'If you do not wish to have your pet’s ashes returned to you, we can organise for companion cremation (without the return of ashes). Pricing varies depending on your location.',
    imageSrc: '/images/pet.svg',
    alt: 'pethouse Icon',
    bgColor: '#F6F0EA',
    buttonLabel: 'Learn More',
    buttonHref: '/services/cremation',
  },
  {
    title: 'Memorial Planning',
    description:
      'If you have provision to and would prefer to bury your pet at home, we will leave them in your care once they have passed. Please ensure that you are aware of and abiding by local regulations regarding the burial of pets on your property.s',
    imageSrc: '/images/Petlove.svg',
    alt: 'petlove Icon',
    bgColor: '#F6F0EA',
  },
];

function CremationCards() {
  return (
    <div className=" relative overflow-hidden py-30 px-6 md:px-8 lg:px-12">
      {/* Background Image on the Left */}
      <div className="absolute left-0 top-0 w-[500px] h-[400px] pointer-events-none z-0">
        <Image
          src="/images/decor1.svg"
          alt="Decorative Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Foreground Cards */}
      <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 xl:px-15">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="p-8 sm:p-8 md:px-5"
            style={{ backgroundColor: card.bgColor }}
          >
            <div className="flex flex-col sm:flex-row items-start gap-6 pb-8">
              <div className="flex-shrink-0">
                <Image
                  src={card.imageSrc}
                  alt={card.alt}
                  width={30}
                  height={30}
                  className="w-32 h-32 md:w-15 md:h-15 lg:w-20 lg:h-20 xl:w-32 xl:h-32 object-contain"
                />
              </div>
              <div className="pt-4">
                <h3 className="text-[20.5px] md:text-[22.5px] font-serif text-[#404040]">
                  {card.title}
                </h3>
                <p className="font-sans text-[#404040] text-[14px] xl:text-[17px] leading-relaxed mt-4 pb-4">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CremationCards;
