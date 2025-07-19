'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Link from 'next/link';

const faqData = [
  {
    question: 'How much does at home pet euthanasia cost?',
    answer:
      '<b>Home euthanasia services start from £279, and vary with your pet’s weight and the time/day of our visit.</b><br/><br/>Our pricing includes the home visit, sedation before euthanasia and the euthanasia process itself.<br/><br/>You can see a full list of our service prices on our pricing page.',
  },
  {
    question: 'How do I pay?',
    answer:
      'Payment for our services is taken at the time of booking via credit or debit card.',
  },
  {
    question: 'What can I expect from an in home pet euthanasia?',
    answer:
      'Pet euthanasia is a very peaceful process. We ensure that everything is done to make your pet’s farewell as smooth and stress-free as possible including offering sedation prior to the euthanasia and giving family and loved ones as much time as you need with your pet at each stage of the process.<br/><br/>Choosing a pet euthanasia at home saves you and them the added stress of travelling to a vet clinic where they may have had negative experiences in the recent past, and allows you to say farewell in the place they know and love best.<br/><br/>Please note that if your pet is severely debilitated at the time of our arrival, we may discuss with you providing euthanasia without giving sedation first as the sedation may make it impossible to then place an IV catheter if your pet’s blood pressure is already extremely low. Alternative injection methods directly into your pet’s body may occasionally be necessary where IV access is not possible or even be preferable once they are fully anaesthetised to eliminate the necessity to shave their fur to place a catheter. This will always be discussed with you in advance of proceeding with any of these processes should they be deemed necessary by our veterinarians.<br/><br/>Also, please be aware that in some rare instances where pets are very unstable, peaceful euthanasia may be achieved with only the first injection and the second injection may not be required.',
  },
  {
    question: 'When is the right time to put my pet to sleep?',
    answer: `
    There are no strict, hard and fast rules around this question and ultimately, the decision must be yours as your pet’s guardian to make. However, the following points may help guide your decision-making:<br/><br/>
    <ul>
      <li>
      You may consider how much of the time your pet is enjoying their life i.e<br/>
      Can they no longer do the things they used to enjoy?<br/>
      Are they in constant pain?<br/>
      Are they constantly feeling nauseous?<br/>
      Are they unable to eat or get up to the toilet?</li>
    </ul>
    <ul>
      <li>Do you feel that you might be holding off on putting them to sleep for your own sake rather than theirs?</li>
      <li>We almost never hear families say they made the decision too early, but often hear it was too late.</li>
      <li>Euthanasia is a peaceful, gentle and beautiful process to prevent suffering.</li>
      <li>The Quality of Life Scale may help assess your pet’s situation.</li>
    </ul>
    `,
  },
  {
    question: 'What are your operating hours?',
    answer:
      'Our services are generally available from 7 am to 11 pm, 7 days a week, but times vary by vet availability in your area. Emergency appointments may also sometimes be possible outside these times.<br/><br/>Our customer care team is available 24/7 on <strong>0330 2366 999</strong>.<br/><br/>Or you can click here to request an appointment.',
  },
  {
    question: 'What mobile pet euthanasia areas do you service?',
    answer:
      'We provide at-home pet euthanasia services to much of the UK. You can see a full list of our current service areas on our <strong>locations</strong> page.<br/><br/>You can also <strong>send us a booking request</strong> and we will get back to you ASAP.',
  },
  {
    question: 'What happens after my pet has been put to sleep?',
    answer:
      'There are several <strong>aftercare options</strong> available. You may bury them at home or transfer them for cremation yourself. Otherwise, we or our crematorium partner will take them with us.<br/><br/>If your pet is above 20kg, assistance may be needed. Please let us know during booking if you prefer we handle everything (additional charges may apply).<br/><br/>We can also return your pet’s ashes in a memorial vessel or arrange a companion cremation without ashes returned.',
  },
  {
    question: 'What happens if my pet passes away before you arrive?',
    answer:
      'Please cancel your appointment immediately via the confirmation email link or by calling <strong>0330 2366 999</strong>. You won’t be charged for euthanasia if your pet passes before our arrival.<br/><br/>We can still assist with cremation if arranged.',
  },
];

function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FEFBF8]">
      <div className="container mx-auto px-6">
        <h1 className="text-[27.5px] md:text-[38.5px] font-serif mb-12 text-[#404040]">
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
                      isOpen ? 'bg-[#E5F2F2]' : ''
                    }`}
                  >
                    <span
                      className={`text-[20.5px] md:text-[22.5px] md:pr-6 lg:pr-0  text-start transition-colors ${
                        isOpen ? 'text-[#404040]' : 'text-[#404040]'
                      }`}
                    >
                      {item.question}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 transform transition-transform ${
                        isOpen ? 'rotate-180 text-primary' : 'text-[#6591C0]'
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
                    <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                      <div
                        className="faq-content text-[14px] text-[#404040] font-sans"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    </div>
                  )}
                </div>
              );
            })}

            <Link href="/uk">
              <Button
                label="VIEW ALL"
                className="hover:gap-2 hover:opacity-80 text-[14px] lg:text-[15px] font-medium px-4 py-3 lg:px-6 lg:py-3"
              />
            </Link>
          </div>

          {/* Image */}
          <div className="w-full">
            <Image
              src="/images/dog2.jpg"
              alt="Pet and owner"
              width={800}
              height={600}
              className="w-full h-auto  object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
