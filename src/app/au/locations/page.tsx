'use client';
import Navbarhome from '@/components/au/Homes/Navbarhome';
import React from 'react';
const data = [
  {
    name: 'VIC',
    areas: [
      'Greater Melbourne',
      'Mornington Peninsula',
      'Geelong and surrounding areas',
      'Ballarat and surrounding areas',
      'Colac and surrounding areas',
    ],
  },
  {
    name: 'NSW',
    areas: [
      'Greater Sydney',
      'Southern Highlands and Wollongong',
      'Central Coast',
      'Newcastle & Hunter Valley',
    ],
  },
  {
    name: 'QLD',
    areas: ['Greater Brisbane', 'Gold Coast', 'Sunshine Coast'],
  },
  {
    name: 'SA',
    areas: ['Greater Adelaide', 'Fleurieu Peninsula'],
  },
  {
    name: 'WA',
    areas: ['Greater metropolitan Perth & surrounding areas'],
  },
  {
    name: 'ACT',
    areas: ['Canberra and surrounding areas of NSW'],
  },
  {
    name: 'TAS',
    areas: ['Hobart and surrounding areas'],
  },
];
const page = () => {
  return (
    <div>
      <Navbarhome country="au" />
      <div className="bg-[#E5F2F2]">
        <div className="container mx-auto lg:pt-67 pt-35 p-3  lg:pb-30 pb-10 ">
          <h1 className="text-[40px] lg:text-[72px] font-serif text-primary">
            LOCATIONS
          </h1>
        </div>
      </div>
      {/* Location data */}
      <div className="bg-[#FEFBF8]">
        <div className="container mx-auto lg:pt-20 pt-10  lg:pb-15 pb-5 ">
          <h1 className="lg:text-[33px] text-[23px] font-serif text-primary p-3">
            Our wonderful network of vets can provide home euthanasia services
            to most of the Australian population, including the following areas:
          </h1>
          <div className="bg-[#fdfaf6] lg:py-25 py-10">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-900 p-3">
              {data.map((state) => (
                <div key={state.name}>
                  <h3 className="text-[24px] font-serif mb-2">{state.name}</h3>
                  <ul className="space-y-1 list-disc list-inside">
                    {state.areas.map((area, index) => (
                      <li
                        key={index}
                        className="text-[14px] lg:text-[17px] font-sans text-gray-500 leading-[2.5] marker:text-black marker:font-bold"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-gray-700 lg:mt-25 mt-10 font-sans text-[14px] lg:text-[17px] font-semibold p-3">
              To see whether we currently have vets available to come to your
              home,{' '}
              <a href="#" className="text-primary hover:underline">
                click here
              </a>{' '}
              and enter your location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
