import React from 'react';
import { MdOutlineHealthAndSafety, MdSchedule } from 'react-icons/md';
import Button from '@/components/Button';
import Link from 'next/link';

const pricingData = {
  weekdays: {
    title: 'Weekdays',
    notes: [
      {
        icon: <MdOutlineHealthAndSafety className="text-xl text-[#306060]" />,
        text: <>Pricing includes sedation prior to euthanasia</>,
      },
      {
        icon: <MdSchedule className="text-xl text-[#306060]" />,
        text: (
          <>
            <strong className="text-[#306060]">8AM–6PM</strong>{' '}
            <i>excluding bank holidays</i>
          </>
        ),
      },
    ],
    prices: [
      {
        label: 'Pocket Pets (mice, rats, hamsters, guinea pigs, rabbits)',
        price: '£249',
      },
      { label: 'Pets under 10kg', price: '£279' },
      { label: 'Pets 10-19.9kg', price: '£289' },
      { label: 'Pets 20-29.9kg', price: '£299' },
      { label: 'Pets 30-39.9kg', price: '£309' },
      { label: 'Pets 40-59.9kg', price: '£319' },
      { label: 'Pets 60kg & over', price: '£349' },
    ],
  },
  afterHours: {
    title: 'After Hours',
    notes: [
      {
        icon: <MdOutlineHealthAndSafety className="text-xl text-[#306060]" />,
        text: <>Pricing includes sedation prior to euthanasia</>,
      },
      {
        icon: <MdSchedule className="text-xl text-[#306060]" />,
        text: (
          <>
            <i>Weekends, bank holidays, 6PM–10PM & 7AM–8AM</i>
          </>
        ),
      },
    ],
    prices: [
      {
        label: 'Pocket Pets (mice, rats, hamsters, guinea pigs, rabbits)',
        price: '£339',
      },
      { label: 'Pets under 10kg', price: '£369' },
      { label: 'Pets 10-19.9kg', price: '£379' },
      { label: 'Pets 20-29.9kg', price: '£389' },
      { label: 'Pets 30-39.9kg', price: '£399' },
      { label: 'Pets 40-59.9kg', price: '£419' },
      { label: 'Pets 60kg & over', price: '£439' },
    ],
  },
};

function PricingSection({
  title,
  notes,
  prices,
  bgColor,
  textColor,
  buttonClassName,
}: {
  title: string;
  notes: { icon: React.ReactElement; text: React.ReactNode }[];
  prices: { label: string; price: string }[];
  bgColor: string;
  textColor: string;
  buttonClassName: string;
}) {
  return (
    <div className={`${bgColor} px-8 py-12 space-y-4 w-full`}>
      <h4 className={`text-[25px] md:text-[32px] font-serif ${textColor}`}>
        {title}
      </h4>

      <div className="space-y-2">
        {notes.map((note, index) => (
          <div key={index} className="flex items-start gap-2 text-sm">
            <div className={textColor}>{note.icon}</div>
            <p className={`text-sm xl:text-[17px] pb-2 font-sans ${textColor}`}>
              {note.text}
            </p>
          </div>
        ))}
      </div>

      <ul
        className={`list-disc list-inside space-y-4 pt-10 font-serif text-[20.5px] md:text-[22px] ${textColor}`}
      >
        {prices.map((item, index) => (
          <li key={index}>
            <span className="font-medium">{item.label}</span> – {item.price}
          </li>
        ))}
      </ul>

      <Link href="/" className="mt-10 block">
        <Button
          label="MAKE A BOOKING"
          className={`hover:gap-2 hover:opacity-80 cursor-pointer hover:bg-[#0e797d] font-sans text-white text-[13px] lg:text-[15px] font-medium mt-20 px-4 py-3 lg:px-6 lg:py-3 ${buttonClassName}`}
        />
      </Link>
    </div>
  );
}

export default function Cost() {
  return (
    <div className="container mx-auto px-4 md:px-16 pb-10">
      <h3 className="text-[25px] md:text-[32px] font-serif text-[#404040] mb-6">
        How much does a home euthanasia cost?
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PricingSection
          title={pricingData.weekdays.title}
          notes={pricingData.weekdays.notes}
          prices={pricingData.weekdays.prices}
          bgColor="bg-[#e5f2f2]"
          textColor="text-[#306060]"
          buttonClassName="bg-[#306060]"
        />
        <PricingSection
          title={pricingData.afterHours.title}
          notes={pricingData.afterHours.notes}
          prices={pricingData.afterHours.prices}
          bgColor="bg-[#e8eff4]"
          textColor="text-[#406D9c]"
          buttonClassName="bg-[#406D9c]"
        />
      </div>
    </div>
  );
}
