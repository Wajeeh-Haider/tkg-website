'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'When is the right time to put my pet to sleep?',
    answer: `
      There are no strict, hard and fast rules around this question and ultimately, the decision must be yours as your pet’s guardian to make, however, the following points may help guide your decision-making:<br/><br/>
      <ul>
        <li>You may consider how much of the time your pet is enjoying their life, i.e:<br/>
        Can they no longer do the things they used to enjoy?<br/>
        Are they in constant pain?<br/>
        Are they constantly feeling nauseous?<br/>
        Are they unable to eat or get up to the toilet?</li>
      </ul>
      <ul>
        <li>Do you feel that you might be holding off on putting them to sleep for your own sake rather than theirs? This can be a very difficult question to ask ourselves, but ultimately of course we only want what is best for them.</li>
        <li>As vets, we have many conversations with the families of pets before and after the process of pet euthanasia. In all these cases we almost never have a family who expressed after an in-home pet euthanasia that they had made the decision too early, but sadly the opposite is very often the case.</li>
        <li>We are blessed to be able to provide our pets with euthanasia as an end-of-life option. It is a peaceful, gentle and beautiful process that ensures they do not suffer unnecessarily and that we can give them the farewell they deserve embraced in our love.</li>
        <li>The below Quality of Life Scale may be of assistance in assessing your pet's individual situation.</li>
      </ul>
  <a href='/uk/quality-of-life' class='inline-block px-7 py-4 mt-6 bg-primary text-white font-sans font-bold rounded border-2 border-primary hover:bg-[#20B1B7] hover:border-teal-700 transition duration-300'>
    QUALITY OF LIFE SCALE FOR PETS
  </a>
    `,
  },
  {
    question: 'What can I expect from an in home pet euthanasia?',
    answer: `Pet euthanasia is a very peaceful process. We ensure that everything is done to make your pet’s farewell as smooth and stress-free as possible including offering sedation prior to the euthanasia and giving family and loved ones as much time as you need with your pet at each stage of the process.<br/><br/>
    Choosing a pet euthanasia at home saves you and them the added stress of travelling to a vet clinic where they may have had negative experiences in the recent past, and allows you to say farewell in the place they know and love best.<br/><br/>
    You can see a full list of our service prices on our pricing page.<br/><br/>
    Please note that if your pet is severely debilitated at the time of our arrival, we may discuss with you providing euthanasia without giving sedation first as the sedation may make it impossible to then place an IV catheter if your pet’s blood pressure is already extremely low. Alternative injection methods directly into your pet’s body may occasionally be necessary where IV access is not possible or even be preferable once they are fully anaesthetised to eliminate the necessity to shave their fur to place a catheter. This will always be discussed with you in advance of proceeding with any these processes should they be deemed necessary by our veterinarians. Also, please be aware that in some rare instances where pets are very unstable, peaceful euthanasia may be achieved with only the first injection and the second injection may not be required.`,
  },
  {
    question: 'How much does at home pet euthanasia cost?',
    answer: `<b>Home euthanasia services start from £279, and vary with your pet’s weight and the time/day of our visit.</b><br/><br/>
    Our pricing includes the home visit, sedation before euthanasia and the euthanasia process itself.`,
  },
  {
    question: 'How do I pay?',
    answer:
      'Payment for our services is taken at the time of booking via credit or debit card.',
  },
  {
    question: 'What mobile pet euthanasia areas do you service?',
    answer: `We provide at-home pet euthanasia services to much of the UK population. You can see a full list of our current service areas on our <b>locations</b> page.<br/><br/>
    You can also <a>send us a booking request</a> and we will get back to you ASAP with potential availability.`,
  },
  {
    question: 'What are your operating hours?',
    answer: `Our services are generally available from 7 am to 11 pm, 7 days a week, but please note that appointment times are subject to the individual availability of the vets servicing your specific area. Emergency appointments may also sometimes be possible outside these times.<br/><br/>
    Our customer care team is available to assist 24 hours a day on <a>0330 2366 999</a>.<br/><br/>
    Or you can click <a>here</a> to request an appointment for your pet.`,
  },
  {
    question: 'What happens after my pet has been put to sleep?',
    answer: `There are a number of <a>aftercare options</a> available for your pet. If you wish to bury them at home and have the capacity to do so, or wish to transfer them for cremation yourself, we will leave them in your care. Otherwise we, or our crematorium partner, will take them with us when we leave and transfer them for cremation.<br/><br/>
    If your pet is above 20kg in weight, please note that assistance may be required in transporting them to their vehicle. If you prefer not to have to assist with this process, please advise at the time of booking and we can ensure that extra assistance is available (please note that extra charges may apply).<br/><br/>
    If you would like your pet to be cremated and their ashes returned to you to scatter, bury or keep in a memorial vessel, there are a wide variety of options to choose from from our cremation partners.<br/><br/>
    Alternatively, we can also organise a companion cremation for your pet (without the return of their ashes).`,
  },
  {
    question: 'What happens if my pet passes away before you arrive?',
    answer: `Should your pet pass away before our arrival, we ask that you immediately cancel your appointment either through the link in your booking confirmation email or by calling us on <a>0330 2366 999</a>.<br/><br/>
    You will not be charged anything for your euthanasia visit in the instance your pet has passed away prior to our arrival regardless of the timing so long as you notify us immediately.<br/><br/>
    If we are organising transfer of your pet for cremation for you, either our vet or crematorium partner should still be able to assist with this process.`,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      type: 'spring' as const,
      stiffness: 60,
      damping: 14,
    },
  }),
};

function Faqsservice() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center px-4 xl:py-12">
      <div className="w-full max-w-4xl space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              className="transition-all duration-200 font-serif bg-[#E8EFF4] border border-gray-200 rounded"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className={`flex items-center justify-between w-full px-4 py-5 sm:p-6 cursor-pointer transition-colors ${
                  isOpen ? 'bg-[#E5F2F2]' : ''
                }`}
              >
                <span className="text-[20.5px] md:text-[22.5px] md:pr-6 lg:pr-0 text-start text-[#404040]">
                  {item.question}
                </span>
                <motion.svg
                  initial={false}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 ${
                    isOpen ? 'text-primary' : 'text-[#6591C0]'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: 'easeInOut',
                    }}
                    className={`overflow-hidden px-4 pb-5 sm:px-6 sm:pb-6 ${
                      isOpen ? 'bg-[#E5F2F2]' : ''
                    }`}
                  >
                    <div
                      className="faq-content text-[14px] text-[#404040] font-sans"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        <motion.p
          className="text-[#404040] pt-8 text-[17px] font-sans text-center leading-6 pb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
            delay: faqData.length * 0.1,
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          If you would like to speak to one of our vets in person about your
          end-of-life decision for your pet free-of-charge, please complete our{' '}
          <Link
            href="/contact"
            className="text-[#0e797d] underline font-medium"
          >
            contact form
          </Link>{' '}
          and we will call you back ASAP.
        </motion.p>
      </div>
    </div>
  );
}

export default Faqsservice;
