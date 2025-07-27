import Link from 'next/link';
import React from 'react';

function Emergency() {
  return (
    <div className="flex justify-center px-6">
      <div className="text-center container mx-auto xl:px-8 font-sans space-y-4 text-[14px] xl:text-[17px] text-[#404040]">
        <div className="pb-13">
          For{' '}
          <span className="font-medium">
            emergency overnight appointments (10pm–7am)
          </span>{' '}
          and attendance on <span className="font-medium">Bank Holidays</span>{' '}
          where a vet is able to attend, an additional £50 charge applies in
          addition to normal After Hours pricing.
        </div>
        <div className="pb-13">
          <span className="font-medium">Transfer of pets for cremation</span>{' '}
          starts from £70 per pet.
        </div>
        <div className="pb-13 text-start mx-6">
          Please note that{' '}
          <span className="font-medium">additional travel fees</span> may be
          requested by vets in our network if they are required to travel
          significant distances for a visit.
        </div>
        <div className="pb-13 mx-4">
          In the rare instance where{' '}
          <span className="font-medium">multiple pets</span> are being put to
          sleep together, additional pets are charged at £160 per additional
          pet. For bookings for multiple pets, please contact our customer care
          team on{' '}
          <Link className="font-medium text-[#0e797d]" href="tel:03302366999">
            0330 2366 999
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

export default Emergency;
