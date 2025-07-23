'use client';

import React from 'react';
import Link from 'next/link';

type Section = {
  title: string;
  paragraphs: string[];
  phone?: string;
};

const content: Section[] = [
  {
    title: 'Nature of Service',
    paragraphs: [
      `The Kindest Goodbye is not a registered veterinary clinic. We are an agency that connects families with our wonderful network of home euthanasia vets and aftercare providers across the UK. All euthanasia service providers are independent registered veterinarinas or veterinary clinics and are responsible for providing services under British law and the Royal College of Veterinary Surgeons guidelines.`,
    ],
  },
  {
    title: 'Cancellations/Changes & Refund Policy',
    phone: '03302366999',
    paragraphs: [
      `Changes to appointments and cancellations may be made by calling our customer care team on 0330 2366 999 or via the link in your booking confirmation email.  For cancellations made within 60 minutes of the start of an appointment arrival window, a £66 administration fee will be retained/charged to pay the Vet who was booked for the service for their time, travel and potential loss of another booking at this time. The remainder of the booking charge will be refunded. For cancellations made prior to this time an £10 administration fee will apply to cover transaction and administrative costs and the balance of payment will be refunded.`,
      `Where a cancellation is due to a pet passing away of natural causes, regardless of the proximity to the original appointment time, a full refund will be issued. The only exception to this is where a pet has passed away and we have not been immediately informed, meaning our vet has attended unnecessarily, in which case the £66 administration fee as for last minute cancellations will apply. This would apply for example, if there is evidence that a pet has passed away some hours prior to our arrival. If we are organising crematorium transfer for your pet and our vet is facilitating this, then only a £100 attendance and transfer fee will apply instead of the administration fee. If one of our cremation partners is collecting your pet, then timing will be rearranged as best as possible to suit you.`,
      `Should our vet attend and you have a change of mind and decide not to proceed with euthanasia, then a home visit and consultation fee of £120 will apply and any difference on payment already received will be refunded to you.`,
      `Where unforeseen circumstances should render the booked veterinarian unavailable for a specific appointment, The Kindest Goodbye will contact the client immediately via the phone number provided during the booking process to offer an alternative provider or an alternative appointment time. If alternative times are unacceptable to the client, a full refund will be issued.`,
      `In the unlikely event that a client is unhappy with the service provided by a veterinarian from The Kindest Goodbye, a full refund may be issued after consultation with company management.`,
      `Disputes arising around aftercare and memorial items will be handled by the Kindest Goodbye on behalf of our clients with our various crematorium partners. Should you decide to cancel a cremation service after having paid for it, please note that the same policy will apply as above in terms of our non-refundable transaction costs.`,
    ],
  },
  {
    title: 'Variation to Standard Service',
    paragraphs: [
      `Please note that if your pet is severely debilitated at the time of our arrival, we may discuss with you providing euthanasia without giving sedation first as the sedation may make it impossible to then place an IV catheter if your pet’s blood pressure is already extremely low. Alternative injection methods including intracardiac, intrarenal and intrahepatic may occasionally be necessary or even desirable where IV access is not possible or practical. This will always be discussed with you in advance of proceeding with any these processes should they be deemed necessary by our veterinarians.`,
      `please be aware that in some rare instances where pets are very unstable, peaceful euthanasia may be achieved with only the first injection and intravenous injection may not be required.`,
    ],
  },
];

const Natureofservice = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-14 text-gray-800 space-y-12">
      {content.map((section, idx) => (
        <section key={idx}>
          <h2 className="text-[27.68px] md:text-[38.72px] text-[#404040] font-serif  mb-4">
            {section.title}
          </h2>

          {section.paragraphs.map((para, i) => (
            <p
              key={i}
              className="text-sm md:text-[15.75px] xl:text-[18px] text-[#404040] font-sans leading-8 my-5"
            >
              {para}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
};

export default Natureofservice;
