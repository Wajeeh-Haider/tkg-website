"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const faqData = [
  {
    question: "How much does at home pet euthanasia cost?",
    answer:
      "<b>Weekdays (8 am-6 pm)- $449 <br/> After-hours (weekends, and weekday evenings)- $599 </b><br/><br/>" +
      "Emergency overnight visist and visits on public holidays are $300 in addition to standard weekday fees.<br/><br/>" +
      "Our pricing includes the visit itself, sedation before euthanasia and the euthanasia process itself.<br/><br/>" +
      "Private (guaranteed individual) cremation with the return of your pet’s ashes and a selection of memorial options are available at an additional cost through our crematorium partners.<br/><br/>" +
      "Companion cremation is also available from $170 if you do not wish your pet’s ashes to be returned.<br/><br/>" +
      "Alternatively, we can leave your pet with you to bury at home or make your own cremation arrangements.<br/><br/>" +
      "Please note that for pets 40kg and over (or where the combined weight of multiple pets is 40kg or over) a $25 surcharge applies.<br/><br/>" +
      "If we do not have a vet available that services your area, we may be able to arrange for someone from further afield to attend. Please note that in this instance an additional travel fee may be applicable, but this would be discussed with you prior to booking.<br/><br/>" +
      "On the rare occasion that multiple pets are to be put to sleep during the same visit, additional pets are charged at a rate of $300 each.",
  },
  {
    question: "How do I pay?",
    answer:
      "Payment for online mobile pet euthanasia bookings is required at the time of booking via credit or debit card. " +
      "We can also accept cash at the time of our visit or if you require a loan/BNPL provider, we can also accept payment through TLC, VetPay (though please note a surcharge applies for VetPay) and can also accept ZipPay payments via their virtual credit card functionality. " +
      "If you would like to utilise these alternative payment methods (including cash), please call us on 1300 799 452 or submit a pet euthanasia request form to organise your booking.",
  },
  {
    question: "What can I expect from an in home pet euthanasia?",
    answer:
      "Pet euthanasia is a very peaceful process. We ensure that everything is done to make your pet’s farewell as smooth and stress-free as possible including offering sedation prior to the euthanasia if desired, placing an intravenous catheter and giving family and loved ones as much time as you need with your pet at each stage of the process.<br/><br/>" +
      "Choosing to do a pet euthanasia at home saves you and them the added stress of travelling to a vet clinic where they may have had negative experiences in the recent past, and allows you to say farewell in the place they know and love best.<br/><br/>" +
      "Please note that if your pet is severely debilitated at the time of our arrival, we may discuss with you providing euthanasia without giving sedation first as the sedation may make it impossible to then place an IV catheter if your pet’s blood pressure is already extremely low. " +
      "Alternative injection methods including intracardiac, intrarenal and intrahepatic may occasionally be necessary where IV access is not possible or preferable. " +
      "This will always be discussed with you in advance of proceeding with any these processes should they be deemed necessary by our veterinarians. " +
      "Also, please be aware that in some rare instances where pets are very unstable, peaceful euthanasia may be achieved with only the first injection and intravenous injection may not be required.",
  },
  {
    question: "When is the right time to put my pet to sleep?",
    answer: `
  <p>There are no strict, hard and fast rules around this question and ultimately, the decision must be yours as your pet’s guardian to make.</p>
  <p>However, the following points may help guide your decision-making:</p>

  <ul class="list-disc ml-6 mt-4 space-y-5">
    <p></p>
    <li>
      You may consider how much of the time your pet is enjoying their life, i.e.<br/>
      Can they no longer do the things they used to enjoy?<br/>
      Are they in constant pain?<br/>
      Are they constantly feeling nauseous?<br/>
      Are they unable to eat or get up to the toilet?
    </li>
    <p></p>
    <li>
      Do you feel that you might be holding off on putting them to sleep for your own sake rather than theirs? This can be a very difficult question to ask ourselves, but ultimately of course we only want what is best for them.
    </li>
    <p></p>
    <li>
      As vets, we have many conversations with the families of pets before and after the process of pet euthanasia. In all these cases we almost never have a family who expressed after an in-home pet euthanasia that they had made the decision too early — but sadly, the opposite is very often the case.
    </li>
    <p></p>
    <li>
      We are blessed to be able to provide our pets with euthanasia as an end-of-life option. It is a peaceful, gentle and beautiful process that ensures they do not suffer unnecessarily and that we can give them the farewell they deserve embraced in our love.
    </li>
    <p></p>
    <li>
      The below Quality of Life Scale may be of assistance in assessing your pet’s individual situation.
    </li>
  </ul>

  <a href='/au/quality-of-life' class='inline-block px-7 py-4 mt-6 bg-primary text-white font-sans font-bold rounded border-2 border-primary hover:bg-[#20B1B7] hover:border-teal-700 transition duration-300'>
    QUALITY OF LIFE SCALE FOR PETS
  </a>
`,
  },
  {
    question: "What are your operating hours?",
    answer:
      "We operate from 7 am to 11 pm 7 days a week, but please note that appointments are subject to the individual availability of the vets servicing your specific area.<br/><br/>" +
      "Please click on our booking link to request availability in your area.",
  },
  {
    question: "What mobile pet euthanasia areas do you service?",
    answer:
      "We provide at-home pet euthanasia services to most of the Australian population, including the following areas:<br/><br/>" +
      "We provide dog euthanasia services across Australia, including key areas for services like dog euthanasia in Brisbane, dog euthanasia in Perth, and dog euthanasia in Melbourne, among other significant regions. We aim to provide compassionate at-home pet euthanasia services in these areas, ensuring a peaceful transition for your beloved pets.<br/><br/>" +
      "<strong>VICTORIA</strong><br/>Greater Melbourne<br/>Mornington Peninsula<br/>Geelong, the Bellarine and Surf Coast<br/>Ballarat and surrounding areas<br/>Colac and surrounding areas<br/><br/>" +
      "<strong>NSW</strong><br/>Greater Sydney<br/>Southern Highlands and Wollongong<br/>Central Coast<br/>Newcastle<br/><br/>" +
      "<strong>QLD</strong><br/>Greater Brisbane<br/>Gold Coast<br/>Sunshine Coast<br/><br/>" +
      "<strong>SA</strong><br/>Greater Adelaide<br/><br/>" +
      "<strong>WA</strong><br/>Greater Perth<br/><br/>" +
      "<strong>ACT</strong><br/>Canberra and surrounding areas of NSW<br/><br/>" +
      "To see whether we currently have vets available to come to your home through our instant booking system <a href='#' class='text-primary underline hover:text-teal-700 transition duration-300'>click here</a>, or send us an enquiry.",
  },
  {
    question: "What happens after my pet has been put to sleep?",
    answer:
      "There are a number of aftercare options available for your pet.<br/><br/>" +
      "If you wish to bury them at home and have the capacity to do so, or wish to transport them for cremation yourself, we will leave your pet in your care. Otherwise, we or our crematorium partner will take them with us when we leave.<br/><br/>" +
      "If your pet is above 25-35kg in weight, please note that our vets will require assistance in transporting them to their vehicle. If you prefer not to have to assist with this process, please advise at the time of booking and we can organise for our crematorium partner to collect your pet directly from your home (please note that extra charges apply).<br/><br/>" +
      "If you would like your pet cremated and their ashes returned to you to scatter, bury or keep in a memorial vessel, there are a wide variety of options to choose from. A link to a booking form to allow you to choose your memorial options for your pet will be included in your booking confirmation email.<br/><br/>" +
      "Please note that there is no need to rush your decision – you can take your time to decide on what option you feel would best help you remember and honour your beloved pet.<br/><br/>" +
      "Should you opt for private cremation for your pet, the typical turnaround time for the return of their ashes is 10-12 business days. This period can be shortened to as little as 24 hours should you wish, at additional cost.<br/><br/>" +
      "Alternatively, we can organise a companion cremation for your pet (without the return of their ashes).",
  },
  {
    question: "What happens if my pet passes away before you arrive?",
    answer:
      "Should your pet pass away before our arrival, we ask that you cancel your appointment through the link in your booking confirmation email or contact us immediately at 1300 799 452. You will not be charged for the pet euthanasia visit in the instance your pet has passed away prior to our arrival regardless of the timing so long as you notify us immediately.<br/><br/>" +
      "If we are organising cremation for you, we may be able to organise for our vet to attend and collect your pet for transfer to our crematorium partner at a cost of $150/$200 for weekday/after-hours collections. If this is not possible, we can organise for the crematorium to collect from you directly.",
  },
];
function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-[#FEFBF8]">
      <div className="relative w-full h-full z-10">
        <Image
          src={"/images/decor1.svg"}
          alt="decor"
          height={700}
          width={750}
          className="absolute bottom-0 left-0 -z-1 pointer-events-none"
        />

        {/* Animate on scroll into view */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto pb-15 z-20 p-2"
        >
          <h1 className="lg:text-[57.76px] text-[27.86px] font-serif text-[#333333] mb-8">
            FAQS
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FAQ List */}
            <div className="space-y-4">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="transition-all duration-200 font-serif bg-[#E8EFF4] border border-gray-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      className={`flex items-center justify-between w-full px-4 py-5 sm:p-6 cursor-pointer transition-colors ${
                        isOpen ? "bg-[#E5F2F2]" : ""
                      }`}
                    >
                      <span
                        className={`text-[20.8px] lg:text-[24px] md:pr-6 lg:pr-0  text-start transition-colors ${
                          isOpen ? "text-[#404040]" : "text-[#404040]"
                        }`}
                      >
                        {item.question}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-6 h-6 transform transition-transform ${
                          isOpen ? "rotate-180 text-primary" : "text-[#6591C0]"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-6 sm:pb-6 bg-[#E5F2F2]">
                        <div
                          className="faq-content lg:text-[17px] text-[14px] leading-[2.2] text-gray-600 font-sans"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}

              <a
                href="/au/faqs"
                className="inline-block px-7 py-4 mt-5 bg-[#FEFBF8] border-2 text-primary font-bold rounded hover:bg-teal-700 hover:text-white transition duration-300"
              >
                VIEW ALL
              </a>
            </div>

            {/* Image */}
            <div>
              <Image
                src="/images/dog2.jpg"
                alt="Pet and owner"
                width={800}
                height={600}
                className="w-full lg:w-[663px] lg:h-[544px] h-auto object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Faqs;
