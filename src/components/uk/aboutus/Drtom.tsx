import React from 'react';
import { MdOutlinePets } from 'react-icons/md';
import Image from 'next/image';

const introText = `<b> Dr Tom Milton’s veterinary journey</b>has taken him from mixed practice to small animal work in clinic and finally to in-home veterinary care and a passion for offering and promoting peaceful home euthanasia for pets.<br/><br/>His own work locally in this area inspired him to set up The Kindest Goodbye, a national network of equally dedicated vets offering this wonderful service to families and their beloved pets across Australia.<br/>Building on the success there and having deep family roots in the UK , Dr Tom was inspired to expand our network to also provide this important service to pets and families across the British Isles.`;

const doctorInfo = {
  image: {
    src: '/images/drtom.jpg',
    alt: 'Dr Tom Milton',
    width: 352,
    height: 282,
  },
  name: 'Dr Tom Milton',
  title: 'FOUNDER',
};

const cards = [
  {
    title: 'The Kindest Goodbye',
    description:
      'Putting your pet to sleep in the comfort of home, with loved ones by their side and away from the stress of the vet clinic is the kindest goodbye you can give your beloved friend.',
  },
  {
    title: 'Experience & Care',
    description:
      'As a team of pet lovers, we understand what it’s like to love and lose your pet. We believe that your pet’s end-of-life journey should be just as caring, loving and unique as they are.',
  },
];

function Drtom() {
  return (
    <div className="relative overflow-hidden pt-30 xl:pt-10 pb-10 md:pb-30 xl:pb-40 px-6 md:px-8 lg:px-12">
      {/* Background Image on the Bottom Right */}
      <div className="absolute right-0 bottom-0 w-[500px] lg:w-[650px] h-[400px] pointer-events-none z-0">
        <Image
          src="/images/decor1.svg"
          alt="Decorative Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto xl:grid lg:grid-cols-2 xl:grid-cols-3 items-start relative z-10">
        {/* Intro Text */}
        <p
          className="font-sans text-[#404040]  my-6 pr-[3.5px] xl:pr-0 xl:mt-20 xl:pt-15 text-sm xl:text-[16px] leading-[1.8] col-span-1 md:w-[67%] xl:w-full"
          dangerouslySetInnerHTML={{ __html: introText }}
        ></p>

        {/* Image + Doctor Info & Cards */}
        <div className="md:flex col-span-2 xl:pl-8">
          <div className="py-8 xl:py-0">
            <Image
              src={doctorInfo.image.src}
              alt={doctorInfo.image.alt}
              width={doctorInfo.image.width}
              height={doctorInfo.image.height}
              className="w-full md:w-[352px] lg:w-[580px] h-auto"
            />
            <h2 className="font-serif text-[25px] md:text-[32px] text-[#404040] mt-4">
              {doctorInfo.name}
            </h2>
            <h4 className="font-sans text-sm text-[#404040]">
              {doctorInfo.title}
            </h4>
          </div>

          {/* Cards */}
          <div className="bg-[#F6F0EA] space-y-8 px-7 py-9 relative md:top-20 lg:top-50 xl:top-40 md:right-5 h-[480px] md:w-[58%] lg:w-[76%] xl:w-[50%]">
            {cards.map((card, index) => (
              <div key={index}>
                <div className="flex items-center gap-4">
                  <MdOutlinePets className="text-primary w-6 h-6 -rotate-10" />
                  <h3 className="text-[20.5px] font-serif text-[#404040]">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[14px] xl:text-[16px] pt-4 ml-10 font-sans leading-[2] text-[#404040]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drtom;
