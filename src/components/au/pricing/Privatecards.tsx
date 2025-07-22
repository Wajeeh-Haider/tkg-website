import React from 'react';
import Image from 'next/image';

const cardsData = [
  {
    title: 'Private Cremation',
    description:
      'Private cremation with the return of your pet’s ashes and a selection of memorial options are available from our cremation partners. We can organise transfer for your pet to the crematorium where needed starting from £70',
    imageSrc: '/images/Petlove.svg',
    alt: 'petlove Icon',
    bgColor: '#F6F0EA',
    buttonLabel: 'Learn More',
    buttonHref: '/services/cremation',
  },
  {
    title: 'Companion Cremation',
    description:
      'Companion cremation is also available if you do not wish your pet’s ashes to be returned.  We can organise transfer for your pet to the crematorium where needed starting from £70.<br/><br/>Alternatively, if you wish to bury your pet at home or organise your own aftercare services we can leave your pet in your care.',
    imageSrc: '/images/pet.svg',
    alt: 'pethouse Icon',
    bgColor: '#F6F0EA',
  },
];
function Privatecards() {
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
                <p
                  className="font-sans text-[#404040] text-[14px] xl:text-[17px] leading-relaxed mt-4 pb-4"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                ></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Privatecards;
