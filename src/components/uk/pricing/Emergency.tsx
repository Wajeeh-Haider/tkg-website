import React from 'react';

function Emergency() {
  return (
    <div className="flex justify-center px-6">
      <div className="text-center container mx-auto xl:px-8 font-sans space-y-4 text-[14px] xl:text-[17px] text-[#404040]">
        <div className="pb-13">
          For <b>emergency overnight appointments (10pm–7am)</b> and attendance
          on <b>Bank Holidays</b> where a vet is able to attend, an additional
          £50 charge applies in addition to normal After Hours pricing.
        </div>
        <div className="pb-13">
          <b>Transfer of pets for cremation</b> starts from £70 per pet.
        </div>
        <div className="pb-13 text-start mx-6">
          Please note that <b>additional travel fees</b> may be requested by
          vets in our network if they are required to travel significant
          distances for a visit.
        </div>
        <div className="pb-13 mx-4">
          In the rare instance where <b>multiple pets</b> are being put to sleep
          together, additional pets are charged at £160 per additional pet. For
          bookings for multiple pets, please contact our customer care team on{' '}
          <span className="font-semibold">0330 2366 999</span>.
        </div>
      </div>
    </div>
  );
}

export default Emergency;
