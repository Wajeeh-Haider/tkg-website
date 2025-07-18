"use client";
import React, { useState } from "react";
import Image from "next/image";

const faqData = [
  {
    question: "How much does at home pet euthanasia cost?",
    answer: "<b>Weekdays (8 am-6 pm)- $449 After-hours </b> <br/> (weekends, and weekday evenings)- $599 Emergency overnight visist and visits on public holidays are $300 in addition to standard weekday fees. Our pricing includes the visit itself, sedation before euthanasia and the euthanasia process itself. Private (guaranteed individual) cremation with the return of your pet’s ashes and a selection of memorial options are available at an additional cost through our crematorium partners. Companion cremation is also available from $170 if you do not wish your pet’s ashes to be returned. Alternatively, we can leave your pet with you to bury at home or make your own cremation arrangements. Please note that for pets 40kg and over (or where the combined weight of multiple pets is 40kg or over) a $25 surcharge applies. If we do not have a vet available that services your area, we may be able to arrange for someone from further afield to attend. Please note that in this instance an additional travel fee may be applicable, but this would be discussed with you prior to booking. On the rare occasion that multiple pets are to be put to sleep during the same visit, additional pets are charged at a rate of $300 each.",
  },
  {
    question: "How do I pay?",
    answer: "Payment for online mobile pet euthanasia bookings is required at the time of booking via credit or debit card. We can also accept cash at the time of our visit or if you require a loan/BNPL provider, we can also accept payment through TLC, VetPay (though please note a surcharge applies for VetPay) and can also accept ZipPay payments via their virtual credit card functionality. If you would like to utilise these alternative payment methods (including cash), please call us on 1300 799 452 or submit a pet euthanasia request form to organise your booking.",
  },
  {
    question: "What can I expect from an in home pet euthanasia?",
    answer: "Pet euthanasia is a very peaceful process. We ensure that everything is done to make your pet’s farewell as smooth and stress-free as possible including offering sedation prior to the euthanasia if desired, placing an intravenous catheter and giving family and loved ones as much time as you need with your pet at each stage of the process. Choosing to do a pet euthanasia at home saves you and them the added stress of travelling to a vet clinic where they may have had negative experiences in the recent past, and allows you to say farewell in the place they know and love best. Please note that if your pet is severely debilitated at the time of our arrival, we may discuss with you providing euthanasia without giving sedation first as the sedation may make it impossible to then place an IV catheter if your pet’s blood pressure is already extremely low. Alternative injection methods including intracardiac, intrarenal and intrahepatic may occasionally be necessary where IV access is not possible or preferable. This will always be discussed with you in advance of proceeding with any these processes should they be deemed necessary by our veterinarians. Also, please be aware that in some rare instances where pets are very unstable, peaceful euthanasia may be achieved with only the first injection and intravenous injection may not be required.",
  },
  {
    question: "When is the right time to put my pet to sleep?",
    answer: "This is a very personal decision. We recommend speaking with your vet about quality of life assessments.",
  },
  {
    question: "What are your operating hours?",
    answer: "We operate 7 days a week, including most public holidays. Appointments available from 8 AM to 8 PM.",
  },
  {
    question: "What mobile pet euthanasia areas do you service?",
    answer: "We service most major metro areas. Please enter your postcode when booking to confirm availability.",
  },
  {
    question: "What happens after my pet has been put to sleep?",
    answer: "You may choose to keep your pet or opt for cremation. Our vet will guide you based on your preference.",
  },
  {
    question: "What happens if my pet passes away before you arrive?",
    answer: "We understand this can happen. We still offer collection and aftercare services to assist you.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto  ">
          <h2 className="text-7xl font-serif text-[#333333] mb-8">FAQs</h2>

      <div className=" flex flex-col md:flex-row gap-10 items-start">

        {/* Left Column: FAQs */}
        <div className="w-full md:w-1/2">

          {faqData.map((item, index) => (
            <div key={index} className="mb-2">
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full text-left bg-[#e6eef3] text-[#333333] px-5 py-4 font-semibold text-lg rounded-md flex justify-between items-center focus:outline-none"
              >
                <span>{item.question}</span>
               <span
  className={`text-xl transform transition-transform duration-300 ${
    openIndex === index ? "rotate-90" : "rotate-0"
  }`}
>
  &gt;
</span>
              </button>
              {openIndex === index && (
                // <div className="bg-white px-5 py-4 text-[#333333] text-[16px] leading-relaxed">
                //   {item.answer}
                // </div>
                <span dangerouslySetInnerHTML={{ __html: item.answer }}
                  className=" text-[#333333] text-[16px] leading-relaxed font-sans"
                />
              )}
            </div>
          ))}

          <div className="mt-6">
            <button className="px-5 py-3 bg-[#1A4D4A] text-white font-semibold text-sm uppercase rounded hover:bg-[#133f3c] transition">
              View All
            </button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/dog2.jpg"
            alt="Pet and owner"
            width={800}
            height={600}
            className="w-full h-auto rounded-md object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;