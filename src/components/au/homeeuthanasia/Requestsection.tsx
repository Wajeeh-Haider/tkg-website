'use client';
import React from 'react';
import Image from 'next/image';

const WorkData = [
  {
    title: 'Request an Appointment',
    description:
      'To organise a home visit appointment,  simply click on the <b>‘Request an Appointment’</b> button in the site menu, provide us with some information about your pet and your preferred arrival windows for our visit. If we have vets available for your requested times, we will contact you and confirm one of the available times. If we do not have any vets available for your prposed times, we will advise when we do have availability.  Should you prefer, you can also call us on <b>0330 2366 999</b> and we can assist you over the phone with your request.<br/><br/>If you have any general questions about euthanasia for your pet, or would like to discuss your pet’s quality of life, please complete our <b>contact form</b> and one of the caring team in our network will call you back as soon as possible for a phone consultation free-of-charge.',
    number: '1',
    Image: '/images/howitwork1.jpg',
  },
  {
    title: 'Peaceful Home Euthanasia',
    description:
      'One of our compassionate team will come to your home to carry out a peaceful euthanasia for your pet. We offer sedation prior to the procedure at no extra charge, and this is highly recommended to ensure your pet’s final moments are as gentle and stress-free as possible.<br/><br/>If you have any special requests for our visit, please include these details when booking and complete our pre-visit questionnaire, a link to which will be provided in your booking confirmation email. We are committed to tailoring your pet’s farewell to your wishes as much as possible<br/><br/>After your pet has passed, we or our cremation partner can handle their transfer for cremation. Should you prefer to bury your pet at home or make your own cremation arrangements, we will leave your pet in your care.',
    number: '2',
    Image: '/images/howitswork2.jpg',
  },
  {
    title: 'Aftercare',
    description:
      'We have a variety of <b>aftercare options</b> available. Individual cremation for your pet with the return of their ashes can be organised at additional cost with a wide range of options to choose from. Prices vary  depending on your location, the specific crematorium provider you choose and your pet’s weight.<br/><br/>If you would like to bury your pet at home or make your own cremation arrangements, we will leave them in your care.<br/><br/>Finally, companion cremation (without the return of ashes) is also available if this is your preference.',
    number: '3',
    Image: '/images/howitswork3.jpg',
  },
];

function Requestsection() {
  return (
    <div className="container mx-auto space-y-20">
      {WorkData.map((step) => {
        const isEven = parseInt(step.number) % 2 === 0;

        return (
          <div
            key={step.number}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center pb-0 px-5"
          >
            {/* Text Content */}
            <div
              className={`
          relative pl-2 
          order-1 
          ${isEven ? 'md:order-2' : 'md:order-1'}
        `}
            >
              {/* Background Number */}
              <span className="absolute text-[190px] md:text-[200px] font-serif text-[#f0ede9] top-0 -left-4 z-0 select-none leading-none -translate-y-10 pointer-events-none">
                {step.number}
              </span>

              <div className="relative z-10 mt-16">
                <h3 className="text-[27.5px] md:text-[32px] xl:text-[40px] font-serif text-gray-700 mb-4">
                  {step.title}
                </h3>
                <p
                  className="text-sm md:text-base xl:text-[17px] text-[#727171] leading-relaxed font-sans"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              </div>
            </div>

            {/* Image */}
            <div
              className={`
    w-full h-full 
    order-2 
    ${isEven ? 'md:order-1' : 'md:order-2'}
    flex justify-center items-center lg:justify-start lg:items-start
  `}
            >
              <Image
                src={step.Image}
                alt={step.title}
                className="w-full h-auto object-cover"
                layout="responsive"
                width={677}
                height={500}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Requestsection;
