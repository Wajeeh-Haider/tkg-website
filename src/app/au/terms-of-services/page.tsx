"use client";
import Navbarhome from "@/components/uk/Homes/Navbarhome";
import React from "react";

const pages = () => {
  return (
    <div>
      <Navbarhome country="au" />
      <div className="bg-[#E5F2F2]">
        <div className="container mx-auto lg:pt-67 pt-35 p-3  lg:pb-30 pb-10 ">
          <h1 className="text-[40px] lg:text-[72px] font-serif text-primary">
            Terms of Service
          </h1>
        </div>
      </div>
      <div className="bg-[#FEFBF8]">
        <div className="container max-w-5xl mx-auto px-4">
          <article className="xl:pl-6 lg:pb-20 pb-5 lg:pt-20 pt-5">
            <h2 className="text-gray-600 text-[27.5px] md:text-[38.5px] xl:text-[57.76px] font-serif lg:pb-5 pb-3">
              Nature of Service
            </h2>
            <p className="text-gray-600 text-[14px] xl:text-[19.125px] font-sans  leading-[1.9]  lg:pb-5 pb-3">
              The Kindest Goodbye is not a registered veterinary clinic, but an
              agency that connects families and their pets with our wonderful
              network of home euthanasia vets and aftercare providers across
              Australia. All euthanasia service providers are independent
              registered veterinary clinics and they are responsible for
              providing services under Australian law and local veterinary board
              guidelines.
            </p>

            <h2 className="text-gray-600 text-[27.5px] md:text-[38.5px] xl:text-[57.76px] font-serif lg:pb-5 pb-3">
              Booking availability
            </h2>
            <p className="text-gray-600 text-[14px] xl:text-[19.125px] font-sans  leading-[1.9]  lg:pb-5 pb-3">
              Availability of home euthanasia veterinarians for bookings is
              subject to change. As far as possible, individual veterinarians’
              availability will be maintained frequently and accurately to avoid
              appointments being made that cannot be serviced by the booked
              veterinarian. Where unforeseen circumstances should render the
              booked veterinarian unavailable for a specific appointment, The
              Kindest Goodbye will contact the client immediately via the phone
              number provided in the booking process to offer an alternative
              provider or an alternative appointment time. If alternative times
              are unacceptable to the client, a full refund will be issued.
            </p>

            <h2 className="text-gray-600 text-[27.5px] md:text-[38.5px] xl:text-[57.76px] font-serif lg:pb-5 pb-3">
              Cancellations/Changes & Refund Policy
            </h2>
            <p className="text-gray-600 text-[14px] xl:text-[19.125px] font-sans  leading-[1.9]  lg:pb-5 pb-3">
              Changes to appointments and cancellations may be made by calling
              our customer care team on 1300 799 452 or via the link in your
              booking confirmation email. For cancellations made within 60
              minutes of the start of an appointment arrival window, a $100
              administration fee will be retained to pay the Vet who was booked
              for the service for their time, travel and potential loss of
              another booking at this time. The remainder of the booking charge
              will be refunded. For cancellations made prior to this time, a $20
              administration fee will apply to cover transaction and
              administrative costs and the balance of payment will be refunded.
            </p>
            <p className="text-gray-600 text-[14px] xl:text-[19.125px] font-sans  leading-[1.9]  lg:pb-5 pb-3">
              Where a cancellation is due to a pet passing away of natural
              causes, regardless of the proximity to the original appointment
              arrival window start time, a full refund will be issued. The only
              exception to this is where a pet has passed away and we have not
              been immediately informed, meaning our vet has attended
              unnecessarily, in which case the $100 administration fee as for
              last minute cancelations will apply. This would apply for example,
              if there is evidence that a pet has passed away some hours prior
              to our arrival. If we are organising crematorium transfer for your
              pet and our vet is facilitating this, then a $150 transfer fee
              will apply instead of the administration fee.
            </p>
            <p className="text-gray-600 text-[14px] xl:text-[19.125px] font-sans  leading-[1.9]  lg:pb-5 pb-3">
              Should our vet attend and you have a change of mind and decide not
              to proceed with euthanasia, then a home visit and consultation fee
              of $220 will apply and any difference in payment already received
              will be refunded to you.
            </p>
            <p className="text-gray-600 text-[14px] xl:text-[19.125px] font-sans  leading-[1.9]  lg:pb-5 pb-3">
              Where unforeseen circumstances should render the booked
              veterinarian unavailable for a specific appointment, The Kindest
              Goodbye will contact the client immediately via the phone number
              provided during the booking process to offer an alternative
              provider or an alternative appointment time. If alternative times
              are unacceptable to the client, a full refund will be issued.
            </p>
            <p className="text-gray-600 text-[14px] xl:text-[19.125px] font-sans  leading-[1.9]  lg:pb-5 pb-3">
              In the unlikely event that a client is unhappy with the service
              provided by a veterinarian from The Kindest Goodbye, a full refund
              may be issued after consultation with company management.
            </p>
            <p className="text-gray-600 text-[14px] xl:text-[19.125px] font-sans  leading-[1.9]  lg:pb-5 pb-3">
              Disputes arising around after-care and memorial items will be
              handled by the Kindest Goodbye on behalf of our clients with our
              various crematorium partners. Should you decide to cancel a
              cremation service after having paid for it, please note that the
              same policy will apply as above in terms of our non-refundable
              transaction costs.
            </p>

            <h2 className="text-gray-600 text-[27.5px] md:text-[38.5px] xl:text-[57.76px] font-serif lg:pb-5 pb-3">
              Variation to standard service
            </h2>
            <p className="text-gray-600 text-[14px] xl:text-[19.125px] font-sans  leading-[1.9]  lg:pb-5 pb-3">
              Please note that if your pet is severely debilitated at the time
              of our arrival, we may discuss with you providing euthanasia
              without giving sedation first as the sedation may make it
              impossible to then place an IV catheter if your pet’s blood
              pressure is already extremely low. Alternative injection methods
              including intracardiac, intrarenal and intrahepatic may
              occasionally be necessary where IV access is not possible. This
              will always be discussed with you in advance of proceeding with
              any these processes should they be deemed necessary by our
              veterinarians. Also, please be aware that in some rare instances
              where pets are very unstable, peaceful euthanasia may be achieved
              with only the first injection and intravenous injection may not be
              required.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default pages;
